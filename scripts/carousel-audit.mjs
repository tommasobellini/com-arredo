import { chromium } from 'playwright'
import { mkdirSync, writeFileSync } from 'fs'

const BASE = process.env.BASE_URL || 'http://localhost:4000'
const VIEWPORTS = [390, 768, 1024, 1440]
const outDir = '.carousel-audit'

mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch()
const context = await browser.newContext()
await context.addCookies([
  { name: 'maintenance_bypass', value: 'true', domain: 'localhost', path: '/' },
])

const results = []

for (const width of VIEWPORTS) {
  const page = await context.newPage()
  await page.setViewportSize({ width, height: 900 })

  try {
    await page.goto(`${BASE}/#portfolio`, { waitUntil: 'networkidle', timeout: 45000 })
    await page.waitForTimeout(1500)

    const carousel = await page.evaluate(() => {
      const active = document.querySelector('.portfolio-card.shadow-accent')
      if (!active) return { error: 'No active card found' }

      const rect = active.getBoundingClientRect()
      const vw = window.innerWidth
      const cardCenter = rect.left + rect.width / 2
      const viewportCenter = vw / 2
      const offset = Math.round(cardCenter - viewportCenter)

      return {
        offset,
        cardCenter: Math.round(cardCenter),
        viewportCenter: Math.round(viewportCenter),
        cardWidth: Math.round(rect.width),
        viewportWidth: vw,
        pass: Math.abs(offset) <= 4,
      }
    })

    const logos = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img[alt*="Com-Arredo"]'))
      return imgs.map((img) => {
        const el = img
        const rect = el.getBoundingClientRect()
        return {
          alt: el.getAttribute('alt'),
          naturalWidth: el.naturalWidth,
          visible: rect.width > 0 && rect.height > 0,
        }
      })
    })

    const logoPass = logos.length > 0 && logos.every((l) => l.visible && l.naturalWidth > 0)

    await page.screenshot({ path: `${outDir}/portfolio-${width}.png`, fullPage: false })
    await page.locator('#portfolio').screenshot({ path: `${outDir}/carousel-${width}.png` })

    results.push({
      viewport: width,
      carousel,
      logos: { count: logos.length, items: logos, pass: logoPass },
      pass: carousel.pass !== false && carousel.error === undefined && logoPass,
    })
  } catch (e) {
    results.push({ viewport: width, error: String(e), pass: false })
  }

  await page.close()
}

writeFileSync(`${outDir}/report.json`, JSON.stringify(results, null, 2))
console.log(JSON.stringify(results, null, 2))

const allPass = results.every((r) => r.pass)
await browser.close()
process.exit(allPass ? 0 : 1)
