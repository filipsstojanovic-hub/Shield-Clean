import { test, expect } from '@playwright/test'

test.describe('Home Page E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Wait for loader to disappear
    await page.waitForSelector('.loader-fadeout, [class*="loader"]', { state: 'hidden', timeout: 30000 }).catch(() => {})
    await page.waitForTimeout(3000)
  })

  test('hero canvas renders', async ({ page }) => {
    const canvas = page.locator('canvas').first()
    await expect(canvas).toBeVisible()
  })

  test('hero canvas has content after scroll', async ({ page }) => {
    const canvas = page.locator('canvas').first()
    await page.mouse.wheel(0, 500)
    await page.waitForTimeout(1000)
    // Canvas should have non-zero dimensions
    const box = await canvas.boundingBox()
    expect(box?.width).toBeGreaterThan(0)
    expect(box?.height).toBeGreaterThan(0)
  })

  test('section 3 panels are visible on scroll', async ({ page }) => {
    // Scroll to section 3 area
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 5))
    await page.waitForTimeout(1000)
    const panels = page.locator('section').nth(2)
    await expect(panels).toBeVisible()
  })

  test('bullet parallax section exists', async ({ page }) => {
    const bulletImg = page.locator('img[src="/bullet-hero.webp"]')
    await expect(bulletImg).toHaveCount(1)
  })

  test('contact form has all fields', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(1000)
    await expect(page.locator('input[type="text"]').first()).toBeVisible()
    await expect(page.locator('input[type="email"]')).toBeVisible()
    await expect(page.locator('input[type="tel"]')).toBeVisible()
    await expect(page.locator('select')).toBeVisible()
    await expect(page.locator('button[type="submit"]')).toBeVisible()
  })

  test('footer is visible at bottom', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(1000)
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })
})

test.describe('About Page E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about')
    await page.waitForSelector('.loader-fadeout, [class*="loader"]', { state: 'hidden', timeout: 30000 }).catch(() => {})
    await page.waitForTimeout(3000)
  })

  test('hero canvas renders', async ({ page }) => {
    const canvas = page.locator('canvas')
    await expect(canvas).toBeVisible()
  })

  test('ammunition panels are visible', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2))
    await page.waitForTimeout(1000)
    await expect(page.locator('h3:has-text("5.56×45mm NATO")')).toBeVisible()
    await expect(page.locator('h3:has-text("7.62×51mm NATO")')).toBeVisible()
    await expect(page.locator('h3:has-text(".50 BMG")')).toBeVisible()
  })

  test('panel hover shows description', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2))
    await page.waitForTimeout(1000)
    const panel = page.locator('.group.cursor-pointer').first()
    const desc = panel.locator('p')
    // Before hover - opacity 0
    await panel.hover()
    await page.waitForTimeout(500)
    // After hover - should be visible
    await expect(desc).toBeVisible()
  })

  test('SVG panels with glow exist', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 4))
    await page.waitForTimeout(1000)
    const svgPanels = page.locator('svg filter')
    expect(await svgPanels.count()).toBeGreaterThanOrEqual(3)
  })

  test('sticky text is present', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 3))
    await page.waitForTimeout(1000)
    await expect(page.locator('text=End-to-End Capability')).toBeVisible()
  })

  test('contact form exists', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - window.innerHeight * 2))
    await page.waitForTimeout(1000)
    await expect(page.locator('input[type="email"]')).toBeVisible()
  })

  test('footer renders', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(1000)
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })
})
