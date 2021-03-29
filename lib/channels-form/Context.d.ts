import * as React from "react";
declare type ContextProps = {
    /**
     * item style
     */
    itemStyle?: React.CSSProperties;
    /**
     * label 字符对齐方式
     */
    labelAlign?: "left" | "center" | "right" | null;
    /**
     * label 字符数，Form 会以 em 单位设置 label 宽度
     */
    labelSize?: number | null;
    /**
     * label style
     */
    labelStyle?: React.CSSProperties;
};
export declare const FormContext: React.Context<ContextProps>;
export {};
