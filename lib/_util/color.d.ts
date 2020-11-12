export declare const rgb2hex: (r: number, g: number, b: number) => string;
export declare const hsb2hsl: (a: number, b: number, c: number) => number[];
export declare const hsl2hsb: (a: number, b: number, c: number) => number[];
export declare const hsl2rgb: (h: number, s: number, l: number) => number[];
export declare const hsb2hex: (h?: number | null | undefined, s?: number | null | undefined, b?: number | null | undefined) => string;
export declare const rgb2hsl: (r: number, g: number, b: number) => {
    h: number;
    s: number;
    l: number;
};
export declare const w3trim: (x: any) => any;
export declare const getColorArr: (x: any) => string[] | undefined;
export declare const color2hsb: (c: any) => number[];
export declare const color2hsl: (c: any) => {
    h: number;
    s: number;
    l: number;
};
