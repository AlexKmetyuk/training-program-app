import { ref, onMounted, onUnmounted } from 'vue'

export function useSwipe(el, { onLeft, onRight, threshold = 60 } = {}) {
  let startX = 0
  let startY = 0
  let tracking = false

  function onTouchStart(e) {
    const t = e.touches[0]
    startX = t.clientX
    startY = t.clientY
    tracking = true
  }

  function onTouchEnd(e) {
    if (!tracking) return
    tracking = false
    const t = e.changedTouches[0]
    const dx = t.clientX - startX
    const dy = t.clientY - startY

    // Only trigger if horizontal swipe is dominant
    if (Math.abs(dx) < threshold || Math.abs(dy) > Math.abs(dx) * 0.7) return

    if (dx < 0 && onLeft) onLeft()
    if (dx > 0 && onRight) onRight()
  }

  onMounted(() => {
    const target = el.value || document
    target.addEventListener('touchstart', onTouchStart, { passive: true })
    target.addEventListener('touchend', onTouchEnd, { passive: true })
  })

  onUnmounted(() => {
    const target = el.value || document
    target.removeEventListener('touchstart', onTouchStart)
    target.removeEventListener('touchend', onTouchEnd)
  })
}
