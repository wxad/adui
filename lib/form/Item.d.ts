import React from "react";
import { IconNames } from "../icon";
import { IPopoverProps } from "../popover";
import "./style";
export interface IItemProps {
    [key: string]: any;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * label
     */
    label?: React.ReactNode;
    /**
     * label 字符对齐方式
     */
    labelAlign?: "left" | "center" | "right" | null;
    /**
     * label 解释内容
     */
    labelHelper?: React.ReactNode;
    /**
     * label 解释内容的 Icon
     */
    labelHelperIcon?: IconNames;
    /**
     * label 解释内容所使用的 Popover 的 Props
     */
    labelHelperProps?: IPopoverProps;
    /**
     * label 字符数，Form 会以 em 单位设置 label 宽度
     */
    labelSize?: number | null;
    /**
     * label style
     */
    labelStyle?: React.CSSProperties;
    /**
     * 附加 style
     */
    style?: React.CSSProperties;
}
/**
 * 表单 item
 */
declare const Item: React.FunctionComponent<IItemProps>;
export default Item;
