import React from "react";
import { IInputProps } from "../input";
import "./style";
export interface INumericInputProps extends Omit<IInputProps, "defaultValue" | "onChange" | "value"> {
    [key: string]: any;
    /**
     * 默认的初始值 - 内部驱动
     */
    defaultValue?: number | null;
    /**
     * 设置最大值
     */
    max?: number;
    /**
     * 设置最小值
     */
    min?: number;
    /**
     * 值改变时的 handler
     */
    onChange?: (value?: number) => void;
    /**
     * 设置精度
     */
    precision?: number;
    /**
     * 设置增加的幅度
     */
    step?: number;
    /**
     * 值 - 外部控制
     */
    value?: number | null;
}
/**
 * 数字输入框。
 */
declare const NumericInput: React.ForwardRefExoticComponent<INumericInputProps & React.RefAttributes<any>>;
export default NumericInput;
