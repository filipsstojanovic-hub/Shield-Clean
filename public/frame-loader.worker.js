// Web Worker for loading video sequence frames off the main thread
// Fetches images as blobs and posts them back to avoid blocking UI

self.onmessage = async (e) => {
  const { urls, batchSize = 8, delayMs = 50 } = e.data

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize)
    const results = await Promise.allSettled(
      batch.map(async (item) => {
        const res = await fetch(item.url, { mode: 'cors' })
        if (!res.ok) throw new Error(`Failed: ${item.url}`)
        const blob = await res.blob()
        return { index: item.index, blob }
      })
    )

    for (const result of results) {
      if (result.status === 'fulfilled') {
        self.postMessage({
          type: 'frame',
          index: result.value.index,
          blob: result.value.blob,
        })
      }
    }

    // Small delay between batches to not overwhelm the network
    if (i + batchSize < urls.length) {
      await new Promise((r) => setTimeout(r, delayMs))
    }
  }

  self.postMessage({ type: 'done' })
}
