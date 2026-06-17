import { chromium } from 'playwright'

const BASE = process.env.BASE_URL || 'http://localhost:4000'
const VIEWPORT = { width: 390, height: 844 }

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
  '/prodotti/soggiorno-su-misura',
  '/prodotti/camera-da-letto-premium',
  '/prodotti/infissi-su-misura',
  '/maintenance',
]

const issues = []

function auditPage(path, result) {
  const { overflowX, smallTargets, wideElements } = result
  if (overflowX > 2) {
    issues.push({ path, type: 'overflow', detail: `scrollWidth - clientWidth = ${overflowX}px` })
  }
  if (smallTargets.length) {
    issues.push({
      path,
      type: 'touch-target',
      detail: `${smallTargets.length} tap targets < 44px`,
      samples: smallTargets.slice(0, 5),
    })
  }
  if (wideElements.length) {
    issues.push({
      path,
      type: 'wide-element',
      detail: `${wideElements.length} elements wider than viewport`,
      samples: wideElements.slice(0, 5),
    })
  }
}

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: 2,
})
await context.addCookies([
  {
    name: 'maintenance_bypass',
    value: 'true',
    domain: 'localhost',
    path: '/',
  },
])

const page = await context.newPage()

for (const route of routes) {
  const url = `${BASE}${route}`
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForTimeout(600)

    const result = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth
      const overflowX = document.documentElement.scrollWidth - vw

      const smallTargets = []
      for (const el of document.querySelectorAll('a, button, [role="button"]')) {
        const r = el.getBoundingClientRect()
        if (r.width < 1 || r.height < 1) continue
        if (getComputedStyle(el).display === 'none' || getComputedStyle(el).visibility === 'hidden') continue
        if (r.width < 44 || r.height < 44) {
          const label =
            el.getAttribute('aria-label') ||
            el.textContent?.trim().slice(0, 40) ||
            el.className.toString().slice(0, 40)
          smallTargets.push({ label, w: Math.round(r.width), h: Math.round(r.height) })
        }
      }

      const wideElements = []
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect()
        if (r.width <= vw + 2) continue
        const tag = el.tagName.toLowerCase()
        if (['html', 'body', 'main', 'section'].includes(tag)) continue
        wideElements.push({
          tag,
          cls: (el.className?.toString() || '').slice(0, 50),
          w: Math.round(r.width),
        })
      }

      return { overflowX, smallTargets, wideElements }
    })

    auditPage(route, result)
    const status = result.overflowX > 2 || result.wideElements.length ? 'FAIL' : 'OK'
    console.log(`${status} ${route}`)
  } catch (err) {
    issues.push({ path: route, type: 'error', detail: String(err.message || err) })
    console.log(`ERR ${route}: ${err.message}`)
  }
}

await browser.close()

console.log('\n--- Summary ---')
if (!issues.length) {
  console.log('No mobile issues detected at 390px width.')
  process.exit(0)
}

for (const issue of issues) {
  console.log(JSON.stringify(issue, null, 2))
}
process.exit(1)
