import React from "react";
import { IIconNames } from "./IconNames";
import "./style";
export declare type IconNames = keyof IIconNames;
export interface IIconProps {
    [key: string]: any;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 颜色值，支持 rgb(a?), hex 以及 css variable
     */
    color?: string;
    /**
     * 图标名称
     */
    icon: IconNames;
    /**
     * 是否可交互，组件内部将会根据当前颜色，为其加上 hover active 样式
     */
    interactive?: boolean;
    /**
     * 点击事件的 handler
     */
    onClick?: ((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | null;
    /**
     * 尺寸
     */
    size?: number;
}
/**
 * 语义化的矢量图形，分为导航、反馈、编辑、工具、图表和生活五种类型。
 */
declare const Icon: React.FunctionComponent<IIconProps> & {
    type: string;
};
export default Icon;
