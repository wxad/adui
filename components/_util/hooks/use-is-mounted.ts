import { useRef, useEffect } from "react"

export function useIsMounted() {
  const mounted = useRef(true)

  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])

  return mounted
}
