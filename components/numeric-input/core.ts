/**
 * 取得小数点后几位
 * @param value
 */
export const getDecimalNumber = (value: number) => {
  if (value % 1 === 0) {
    return 0
  }
  return value.toString().split(".")[1].length
}

/**
 * 将字符串转换成数字，对空字符转换成 0
 * @param value
 */
export const stringToNumber = (value?: string | null) =>
  value ? Number(value) : 0

/**
 * 判断字符串是否合法
 * @param step
 * @param val
 * @param min
 * @param max
 */
export const isLegal = (
  step: number,
  val?: string,
  min?: number,
  max?: number
) => {
  if (val === "") {
    return true
  }
  const value = stringToNumber(val)
  const decimal = getDecimalNumber(step)
  if (min !== undefined) {
    /**
     * 如果有最小值，则判断：
     * 1. 是否不比最小值小；
     * 2. 是否存在最大值，如果存在则要比最大值小；
     * 3. 与最小值的差值是否整除 step。
     */
    return (
      value >= min &&
      (max === undefined || value <= max) &&
      (value * 10 ** decimal - min * 10 ** decimal) % (step * 10 ** decimal) ===
        0
    )
  }
  if (max !== undefined) {
    /**
     * 如果只有最大值，则判断：
     * 1. 是否不比最大值大；
     * 2. 与最大值的差值是否整除 step。
     */
    return (
      value <= max &&
      (max * 10 ** decimal - value * 10 ** decimal) % (step * 10 ** decimal) ===
        0
    )
  }
  /**
   * 如果没有设置 min 与 max，那么 step 的意义也没有了，这样任何数都是合法的。
   */
  return true
}
