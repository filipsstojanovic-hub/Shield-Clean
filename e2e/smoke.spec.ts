import { test, expect } from '@playwright/test'

test.describe('Smoke Tests', () => {
  test('home page loads', async ({ page }) => {
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)
    await expect(page).toHaveTitle(/Shield/)
  })

  test('about page loads', async ({ page }) => {
    const response = await page.goto('/about')
    expect(response?.status()).toBe(200)
  })

  test('navigation works home → about', async ({ page }) => {
    await page.goto('/')
    await page.click('a[href="/about"]')
    await page.waitForURL('/about')
    expect(page.url()).toContain('/about')
  })

  test('navigation works about → home', async ({ page }) => {
    await page.goto('/about')
    await page.click('a[href="/"]')
    await page.waitForURL('/')
    expect(page.url()).not.toContain('/about')
  })

  test('navbar is visible on home', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
  })

  test('navbar is visible on about', async ({ page }) => {
    await page.goto('/about')
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
  })
})
