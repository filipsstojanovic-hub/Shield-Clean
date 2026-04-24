// Scramble-on-hover text effect — same behavior as index.vue hero CTAs
const scrambleChars = '!<>-_\\/[]{}—=+*^?#________'

export function useScramble() {
  function scrambleElement(el: HTMLElement) {
    const target = el.dataset.scrambleTarget || el.textContent || ''
    el.dataset.scrambleTarget = target
    const queue: Array<{ to: string; start: number; end: number; char?: string }> = []
    for (let i = 0; i < target.length; i++) {
      const start = Math.floor(Math.random() * 15)
      const end = start + Math.floor(Math.random() * 15) + 8
      queue.push({ to: target[i], start, end })
    }
    let frame = 0
    function update() {
      let output = ''
      let complete = 0
      for (let i = 0; i < queue.length; i++) {
        const { to, start, end } = queue[i]
        if (frame >= end) {
          complete++
          output += to
        } else if (frame >= start) {
          if (!queue[i].char || Math.random() < 0.28)
            queue[i].char = scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
          output += queue[i].char
        } else output += to
      }
      el.textContent = output
      if (complete === queue.length) return
      frame++
      requestAnimationFrame(update)
    }
    update()
  }

  function scrambleText(e: Event) {
    scrambleElement(e.currentTarget as HTMLElement)
  }

  return { scrambleElement, scrambleText }
}
