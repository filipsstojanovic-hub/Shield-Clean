// Shared curtain navigation — enter-from-right overlay, navigate under cover, exit-to-left.
// Uses module-scoped callbacks (client-only) + useState for reactive visibility flag.

let _enterResolve: (() => void) | null = null
let _leaveResolve: (() => void) | null = null

export function useCurtainNav() {
  const curtainVisible = useState('curtain-visible', () => false)
  const curtainInFlight = useState('curtain-in-flight', () => false)
  const route = useRoute()

  async function navigateWithCurtain(path: string) {
    if (curtainInFlight.value) return
    if (route.path === path) return
    curtainInFlight.value = true

    // Phase 1 — slide curtain in from right, wait for transitionend via @after-enter hook
    await new Promise<void>((r) => {
      _enterResolve = r
      curtainVisible.value = true
    })

    // Phase 2 — curtain fully covers, now swap pages
    await navigateTo(path)
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(null))))

    // Phase 3 — slide curtain out to left, wait for @after-leave
    await new Promise<void>((r) => {
      _leaveResolve = r
      curtainVisible.value = false
    })

    curtainInFlight.value = false
  }

  function onCurtainEntered() {
    _enterResolve?.()
    _enterResolve = null
  }
  function onCurtainLeft() {
    _leaveResolve?.()
    _leaveResolve = null
  }

  return { curtainVisible, navigateWithCurtain, onCurtainEntered, onCurtainLeft }
}
