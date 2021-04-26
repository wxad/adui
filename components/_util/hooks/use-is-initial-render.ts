import { useRef, useEffect } from "react"

export function useIsInitialRender() {
  const initial = useRef(true)

  useEffect(() => {
    initial.current = false
  }, [])

  return initial.current
}
