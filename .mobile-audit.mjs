import { chromium } from 'playwright'
import { writeFileSync, mkdirSync } from 'fs'

const BASE = 'http://localhost:4000'
const VIEWPORT = { width: 390, height: 844 }
const outDir = '.mobile-audit'

const routes = [
  '/',
  '/produzione',
  '/portfolio',
  '/chi-siamo',
  '/contatti',
  '/privacy',
  '/cookies',
  '/termini',
  '/prodotti/cucina-artigianale',
]

mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: VIEWPORT })
await context.addCookies([
  { name: 'maintenance_bypass', value: 'true', domain: 'localhost', path: '/' },
])

const results = []

for (const route of routes) {
  const page = await context.newPage()
  const issues = []

  try {
    const res = await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle', timeout: 45000 })
    await page.waitForTimeout(1200)

    if (page.url().includes('/maintenance')) {
      issues.push({ type: 'redirect', msg: 'Manutenzione attiva' })
    }

    const layout = await page.evaluate(() => {
      const doc = document.documentElement
      const offenders = []
      document.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.width < 1 || r.height < 1) return
        if (r.left < -2 || r.right > window.innerWidth + 2) {
          offenders.push({
            tag: el.tagName,
            cls: String(el.className || '').slice(0, 50),
            left: Math.round(r.left),
            right: Math.round(r.right),
            w: window.innerWidth,
          })
        }
      })
      return {
        overflowX: doc.scrollWidth > doc.clientWidth + 2,
        sw: doc.scrollWidth,
        cw: doc.clientWidth,
        offenders: offenders.slice(0, 6),
      }
    })

    if (layout.overflowX) {
      issues.push({ type: 'overflow', msg: `${layout.sw}px > ${layout.cw}px`, offenders: layout.offenders })
    }

    const safeName = route.replace(/\//g, '_') || 'home'
    await page.screenshot({ path: `${outDir}/${safeName}.png`, fullPage: true })
    results.push({ route, url: page.url(), status: res?.status(), issues })
  } catch (e) {
    results.push({ route, error: String(e) })
  }
  await page.close()
}

writeFileSync(`${outDir}/report.json`, JSON.stringify(results, null, 2))
console.log(JSON.stringify(results, null, 2))
await browser.close()
