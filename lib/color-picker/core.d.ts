/**
 * 验证颜色字符串，注意此方法去除了 # 号。
 */
export declare const isLegalHexString: (color: string) => boolean;
export declare const addHashTag: (str: string) => string;
export declare const removeHashTag: (str: string) => string;
export declare const TRANSPARENT_BG = "linear-gradient(45deg, transparent calc(50% - 1px), rgb(222, 40, 33) calc(50% - 1px), rgb(222, 40, 33) calc(50% + 1px), transparent calc(50% + 1px))";
/**
 * 相较于 STANDARDS 去除了 #1f1f1f，加入了 TRANSPARENT
 */
export declare const STANDARDS_TRANSPARENT: string[];
export declare const STANDARDS: string[];
