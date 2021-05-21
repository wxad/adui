import React from "react";
import { ITooltipProps } from "../tooltip";
import "./style";
export interface IPopoverProps extends ITooltipProps {
    [key: string]: any;
    /**
     * 是否边缘对齐
     */
    alignEdge?: boolean;
    /**
     * 是否带有箭头
     */
    arrowed?: boolean;
}
/**
 * 气泡提示用于触发、操作某项信息临时性弹出的内容，高于当前页面层级，为内容的轻量延伸。
 * Popover 是基于 Tooltip 进行封装的。
 * 可能是文字解释，也可能内涵操作，可设置带箭头、或不带箭头。
 * Popover 默认边缘对齐。
 */
declare const Popover: React.ForwardRefExoticComponent<IPopoverProps & React.RefAttributes<any>>;
export default Popover;
