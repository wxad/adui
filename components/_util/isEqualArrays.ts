const isEqualArrays = (arrA: any[], arrB: any[]): boolean => {
  if (arrA === arrB) {
    return true
  }

  if (!arrA || !arrB) {
    return false
  }

  const len = arrA.length

  if (arrB.length !== len) {
    return false
  }

  for (let i = 0; i < len; i += 1) {
    if (arrA[i] !== arrB[i]) {
      return false
    }
  }

  return true
}

export default isEqualArrays
