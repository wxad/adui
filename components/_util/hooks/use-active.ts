import { useRef } from "react"

export function useActive({ ref, delay = 200 }: { ref?: any; delay?: number }) {
  const activeTimeOutRef = useRef(0)

  const handleWindowMouseUp = () => {
    window.clearTimeout(activeTimeOutRef.current)
    window.removeEventListener("mouseup", handleWindowMouseUp)
  }

  const handleMouseDown = () => {
    window.addEventListener("mouseup", handleWindowMouseUp)

    if (ref && "current" in ref && ref.current) {
      delete ref.current.dataset.actived
    }

    activeTimeOutRef.current = window.setTimeout(() => {
      if (ref && "current" in ref && ref.current) {
        ref.current.dataset.actived = "true"
      }
    }, delay)
  }

  return {
    handleMouseDown,
  }
}
