// Shared curtain state so pages can trigger the same enter-right / exit-left overlay
// that app.vue renders. app.vue mounts the element + transition hooks; pages call navigateWithCurtain.
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

    await new Promise<void>((r) => {
      _enterResolve = r
      curtainVisible.value = true
    })

    await navigateTo(path)
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(null))))

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
