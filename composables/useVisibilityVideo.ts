/**
 * Play/pause a video based on viewport visibility.
 * Inspired by Terminal Industries approach using useElementVisibility.
 */
export function useVisibilityVideo(videoRef: Ref<HTMLVideoElement | null>, rootMargin = '200px') {
  onMounted(() => {
    const video = videoRef.value
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin }
    )

    observer.observe(video)

    onUnmounted(() => observer.disconnect())
  })
}
