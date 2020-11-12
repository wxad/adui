/**
 * 取得小数点后几位
 * @param value
 */
export declare const getDecimalNumber: (value: number) => number;
/**
 * 将字符串转换成数字，对空字符转换成 0
 * @param value
 */
export declare const stringToNumber: (value?: string | null | undefined) => number;
/**
 * 判断字符串是否合法
 * @param step
 * @param val
 * @param min
 * @param max
 */
export declare const isLegal: (step: number, val?: string | undefined, min?: number | undefined, max?: number | undefined) => boolean;
