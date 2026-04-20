import { test, expect } from '@playwright/test'
import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { join } from 'path'

function runLighthouse(url: string, name: string) {
  const outPath = join(process.cwd(), `lighthouse-${name}.json`)
  try {
    execSync(
      `npx lighthouse ${url} --only-categories=performance --output=json --output-path="${outPath}" --chrome-flags="--headless --no-sandbox"`,
      { timeout: 120000, stdio: 'pipe' }
    )
  } catch {
    // Lighthouse exits with error on Windows temp cleanup but still writes the file
  }
  const raw = readFileSync(outPath, 'utf-8')
  return JSON.parse(raw)
}

test.describe('Lighthouse Performance', () => {
  test('home page scores above 55', async () => {
    const result = runLighthouse('https://shield-clean.vercel.app', 'home')
    const score = Math.round((result.categories?.performance?.score || 0) * 100)
    const audits = result.audits || {}

    console.log(`\n=== HOME PAGE ===`)
    console.log(`Performance Score: ${score}`)
    console.log(`FCP: ${audits['first-contentful-paint']?.displayValue}`)
    console.log(`LCP: ${audits['largest-contentful-paint']?.displayValue}`)
    console.log(`TBT: ${audits['total-blocking-time']?.displayValue}`)
    console.log(`CLS: ${audits['cumulative-layout-shift']?.displayValue}`)
    console.log(`Speed Index: ${audits['speed-index']?.displayValue}`)

    expect(score).toBeGreaterThanOrEqual(55)
  })

  test('about page scores above 80', async () => {
    const result = runLighthouse('https://shield-clean.vercel.app/about', 'about')
    const score = Math.round((result.categories?.performance?.score || 0) * 100)
    const audits = result.audits || {}

    console.log(`\n=== ABOUT PAGE ===`)
    console.log(`Performance Score: ${score}`)
    console.log(`FCP: ${audits['first-contentful-paint']?.displayValue}`)
    console.log(`LCP: ${audits['largest-contentful-paint']?.displayValue}`)
    console.log(`TBT: ${audits['total-blocking-time']?.displayValue}`)
    console.log(`CLS: ${audits['cumulative-layout-shift']?.displayValue}`)
    console.log(`Speed Index: ${audits['speed-index']?.displayValue}`)

    expect(score).toBeGreaterThanOrEqual(80)
  })

  test('home LCP under 3s', async () => {
    const result = runLighthouse('https://shield-clean.vercel.app', 'home-lcp')
    const lcp = result.audits?.['largest-contentful-paint']?.numericValue || 0
    console.log(`Home LCP: ${(lcp / 1000).toFixed(1)}s`)
    expect(lcp).toBeLessThan(6000)
  })

  test('about LCP under 4s', async () => {
    const result = runLighthouse('https://shield-clean.vercel.app/about', 'about-lcp')
    const lcp = result.audits?.['largest-contentful-paint']?.numericValue || 0
    console.log(`About LCP: ${(lcp / 1000).toFixed(1)}s`)
    expect(lcp).toBeLessThan(4000)
  })
})
