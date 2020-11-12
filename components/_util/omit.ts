const omit = (obj: { [key: string]: any }, fields: string[]) => {
  const shallowCopy = {
    ...obj,
  }
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i]
    delete shallowCopy[key]
  }
  return shallowCopy
}

export default omit
