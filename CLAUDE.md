## Shield Project Rules

### Layout

- NEVER change dimensions/positions of other sections when modifying one section
- Always use `onUnmounted` cleanup for scroll listeners and rAF loops
- Use `alive` flag pattern to stop async operations on unmount

### Assets & CDN

- All videos and frame sequences go on Vercel Blob, NOT in public/
- Blob base URL: `https://i8ipe2nbskkytzsn.public.blob.vercel-storage.com`
- Upload: `curl -X PUT "https://blob.vercel-storage.com/path/file" -H "Authorization: Bearer $BLOB_READ_WRITE_TOKEN" -H "x-add-random-suffix: 0" --data-binary @file`
- Pull token: `npx vercel env pull .env.local --environment production`

### Images

- Convert all images to WebP: `ffmpeg -i input.png -quality 80 output.webp`
- Crop whitespace before using: check actual content bounds
- Panel images: 45% size, object-contain

### Frame Loading

- Batch size: 15, delay: 20ms
- Loader waits for 50 frames before hiding
- Draw fallback: nearest loaded frame ±50
- Dispatch `hero-frames-loaded` at 50 frames, not 1

### SVG Panels (Section 4)

- ViewBox must have 40px padding (`-40 -40 480 480`) for glow blur
- Glow: `stroke="#02d4ff" stroke-width="25" opacity="0.6" filter with feGaussianBlur stdDeviation="25"`
- Dot: `stroke="#051e2e" stroke-width="1"`
- Static: `stroke="rgba(0,0,0,0.08)" stroke-width="1.5"`

### Performance

- PageSpeed target: 90+ desktop
- LCP target: under 3s
- Run `npx playwright test` before deploy

### Preview

- Screenshot: `npx tsx scripts/screenshot.ts http://localhost:3006 /about`
- Outputs to C:/tmp/preview.png and C:/tmp/preview-viewport.png

### Deploy

- `git push origin master && npx vercel deploy --prod`
- Live: https://shield-clean.vercel.app

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:

- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
