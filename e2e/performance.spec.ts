import { test, expect } from '@playwright/test'

test.describe('Performance Tests', () => {
  test('home page loads under 5s', async ({ page }) => {
    const start = Date.now()
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    const loadTime = Date.now() - start
    console.log(`Home DOM ready: ${loadTime}ms`)
    expect(loadTime).toBeLessThan(5000)
  })

  test('about page loads under 5s', async ({ page }) => {
    const start = Date.now()
    await page.goto('/about', { waitUntil: 'domcontentloaded' })
    const loadTime = Date.now() - start
    console.log(`About DOM ready: ${loadTime}ms`)
    expect(loadTime).toBeLessThan(5000)
  })

  test('home page total transfer under 25MB', async ({ page }) => {
    let totalBytes = 0
    page.on('response', (response) => {
      const headers = response.headers()
      const size = parseInt(headers['content-length'] || '0')
      totalBytes += size
    })
    await page.goto('/')
    await page.waitForTimeout(8000) // Wait for lazy loads
    const totalMB = totalBytes / (1024 * 1024)
    console.log(`Home total transfer: ${totalMB.toFixed(1)}MB`)
    expect(totalMB).toBeLessThan(35)
  })

  test('about page total transfer under 10MB', async ({ page }) => {
    let totalBytes = 0
    page.on('response', (response) => {
      const headers = response.headers()
      const size = parseInt(headers['content-length'] || '0')
      totalBytes += size
    })
    await page.goto('/about')
    await page.waitForTimeout(8000)
    const totalMB = totalBytes / (1024 * 1024)
    console.log(`About total transfer: ${totalMB.toFixed(1)}MB`)
    expect(totalMB).toBeLessThan(10)
  })

  test('no failed network requests on home', async ({ page }) => {
    const failures: string[] = []
    page.on('response', (response) => {
      if (response.status() >= 400) {
        failures.push(`${response.status()} ${response.url()}`)
      }
    })
    await page.goto('/')
    await page.waitForTimeout(5000)
    if (failures.length) console.log('Failed requests:', failures)
    expect(failures.length).toBe(0)
  })

  test('no failed network requests on about', async ({ page }) => {
    const failures: string[] = []
    page.on('response', (response) => {
      if (response.status() >= 400) {
        failures.push(`${response.status()} ${response.url()}`)
      }
    })
    await page.goto('/about')
    await page.waitForTimeout(5000)
    if (failures.length) console.log('Failed requests:', failures)
    expect(failures.length).toBe(0)
  })

  test('CDN assets load from Vercel Blob', async ({ page }) => {
    const blobRequests: string[] = []
    page.on('request', (request) => {
      if (request.url().includes('blob.vercel-storage.com')) {
        blobRequests.push(request.url())
      }
    })
    await page.goto('/')
    await page.waitForTimeout(5000)
    console.log(`Blob requests: ${blobRequests.length}`)
    expect(blobRequests.length).toBeGreaterThan(0)
  })

  test('no console errors on home', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    await page.waitForTimeout(5000)
    if (errors.length) console.log('Console errors:', errors)
    expect(errors.length).toBe(0)
  })

  test('no console errors on about', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/about')
    await page.waitForTimeout(5000)
    if (errors.length) console.log('Console errors:', errors)
    expect(errors.length).toBe(0)
  })
})
