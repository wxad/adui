const detectStickySupport = () => {
  const el = document.createElement("a")
  const { style }: any = el
  style.cssText = "position:sticky;position:-webkit-sticky;"
  return style.position.includes("sticky")
}

export { detectStickySupport }
