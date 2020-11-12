const preventOuterScroll = (e: any) => {
  const { currentTarget: saveThis, deltaY: delta } = e
  const { scrollTop, scrollHeight } = saveThis
  const height = saveThis.clientHeight

  // const delta = (event.wheelDelta) ? event.wheelDelta : -(event.detail || 0)
  // 这一句是原生获取 delta 的写法，
  // React Wheel Events 让我们不用考虑兼容性，可以通过 e.deltaY 直接拿到，
  // 然而这个值 和 原生的 delta 是相反数，因此以下的 < > 号及 -1 * ，均与原生情况相反。
  if (delta > 0 && scrollHeight - height - scrollTop <= delta) {
    saveThis.scrollTop = scrollHeight
    e.preventDefault()
  } else if (delta < 0 && scrollTop <= -1 * delta) {
    saveThis.scrollTop = 0
    e.preventDefault()
  }
}

export { preventOuterScroll }
