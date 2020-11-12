function requestAnimationFramePolyfill() {
  let lastTime = 0
  return (callback: (time: number) => void) => {
    const currTime = new Date().getTime()
    const timeToCall = Math.max(0, 16 - (currTime - lastTime))
    const id = window.setTimeout(() => {
      callback(currTime + timeToCall)
    }, timeToCall)
    lastTime = currTime + timeToCall
    return id
  }
}
function getRequestAnimationFrame() {
  if (typeof window === "undefined") {
    return () => {}
  }
  const { requestAnimationFrame } = window
  if (requestAnimationFrame) {
    return requestAnimationFrame
  }
  return requestAnimationFramePolyfill()
}

export { getRequestAnimationFrame }
