import { chromium } from 'playwright'
import { mkdirSync, writeFileSync } from 'fs'

const BASE = process.env.BASE_URL || 'http://localhost:4000'
const THEMES = ['dark', 'light', 'forest']
const VIEWPORTS = [390, 1440]
const outDir = '.theme-audit'

mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch()
const context = await browser.newContext()
await context.addCookies([
  { name: 'maintenance_bypass', value: 'true', domain: 'localhost', path: '/' },
])

const results = []

for (const theme of THEMES) {
  for (const width of VIEWPORTS) {
    const page = await context.newPage()
    await page.setViewportSize({ width, height: 900 })

    try {
      await page.goto(BASE, { waitUntil: 'networkidle', timeout: 45000 })
      await page.evaluate((t) => {
        localStorage.setItem('comarredo-theme', t)
        document.documentElement.setAttribute('data-theme', t)
      }, theme)
      await page.reload({ waitUntil: 'networkidle' })
      await page.waitForTimeout(800)

      const check = await page.evaluate(() => {
        const theme = document.documentElement.getAttribute('data-theme')
        const bg = getComputedStyle(document.body).backgroundColor
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim()
        const logo = document.querySelector('img[alt*="Com-Arredo"]')
        return {
          theme,
          bg,
          accent,
          logoSrc: logo?.getAttribute('src') || null,
          logoVisible: logo ? logo.getBoundingClientRect().width > 0 : false,
        }
      })

      await page.screenshot({ path: `${outDir}/${theme}-${width}.png`, fullPage: false })

      results.push({
        theme,
        viewport: width,
        ...check,
        pass:
          check.theme === theme &&
          check.logoVisible &&
          (check.accent.includes('348059') || check.accent.includes('5ca87a')),
      })
    } catch (e) {
      results.push({ theme, viewport: width, error: String(e), pass: false })
    }

    await page.close()
  }
}

writeFileSync(`${outDir}/report.json`, JSON.stringify(results, null, 2))
console.log(JSON.stringify(results, null, 2))

const allPass = results.every((r) => r.pass)
await browser.close()
process.exit(allPass ? 0 : 1)
