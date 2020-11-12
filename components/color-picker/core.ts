/* eslint-disable max-len */

/**
 * 验证颜色字符串，注意此方法去除了 # 号。
 */
export const isLegalHexString = (color: string) =>
  /(^[0-9A-F]{6}$)/i.test(color)

export const addHashTag = (str: string) => `#${str}`

export const removeHashTag = (str: string) => str.slice(1)

export const TRANSPARENT_BG =
  "linear-gradient(45deg, transparent calc(50% - 1px), rgb(222, 40, 33) calc(50% - 1px), rgb(222, 40, 33) calc(50% + 1px), transparent calc(50% + 1px))"

/**
 * 相较于 STANDARDS 去除了 #1f1f1f，加入了 TRANSPARENT
 */
export const STANDARDS_TRANSPARENT = [
  "TRANSPARENT",
  "#FFFFFF",
  "#EBEBEB",
  "#B8B8B8",
  "#858585",
  "#525252",
  "#000000",

  "#F7615C",
  "#FFB13D",
  "#FFEA4D",
  "#8DE080",
  "#5BDEC8",
  "#63BCFF",
  "#FA8CF4",

  "#DE2821",
  "#ED8D18",
  "#FAD902",
  "#45BA4F",
  "#0AC2A9",
  "#2F8EED",
  "#D259D4",

  "#99251F",
  "#B8571C",
  "#D9A61A",
  "#348C46",
  "#1D8A7F",
  "#1E64A6",
  "#8C428F",
]

export const STANDARDS = [
  "#FFFFFF",
  "#EBEBEB",
  "#B8B8B8",
  "#858585",
  "#525252",
  "#1F1F1F",
  "#000000",

  "#F7615C",
  "#FFB13D",
  "#FFEA4D",
  "#8DE080",
  "#5BDEC8",
  "#63BCFF",
  "#FA8CF4",

  "#DE2821",
  "#ED8D18",
  "#FAD902",
  "#45BA4F",
  "#0AC2A9",
  "#2F8EED",
  "#D259D4",

  "#99251F",
  "#B8571C",
  "#D9A61A",
  "#348C46",
  "#1D8A7F",
  "#1E64A6",
  "#8C428F",
]
