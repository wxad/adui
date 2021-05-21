import React from "react";
import { Placement } from "../pop-trigger";
import "./style";
export interface ITooltipProps {
    [key: string]: any;
    /**
     * 是否边缘对齐
     */
    alignEdge?: boolean;
    /**
     * 自动调整位置
     */
    autoAdjustPlacement?: boolean;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 气泡提示是否默认显示
     */
    defaultVisible?: null | boolean;
    /**
     * 指定气泡提示的父级，默认为 document.body
     */
    getPopupContainer?: null | ((node: HTMLElement) => HTMLElement);
    /**
     * mouseEnter 显示的延时，单位：s，只在 trigger="hover" 时有效
     */
    mouseEnterDelay?: number;
    /**
     * mouseLeave 消失的延时，单位：s，只在 trigger="hover" 时有效
     */
    mouseLeaveDelay?: number;
    /**
     * 显示发生变化时的 handler
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 弹出层位置
     */
    popup?: React.ReactNode;
    /**
     * 弹出内容
     */
    popupClassName?: string;
    /**
     * 气泡提示的附加类名
     */
    popupTransitionName?: string;
    /**
     * 气泡提示的附加样式
     */
    placement?: Placement;
    /**
     * 弹出框的动画类名，动画格式遵循 rc-animate
     */
    popupStyle?: React.CSSProperties | null;
    /**
     * 触发方式
     */
    trigger?: "hover" | "focus" | "click";
    /**
     * 手动控制气泡提示是否显示
     */
    visible?: null | boolean;
}
/**
 * 工具提示用于针对某个元素的、轻量的操作说明。
 * 与气泡提示 Popover 不同，工具提示 Tooltip 不承载复杂内容信息，而主要用于解释工具的操作含义，如“复制”、“编辑”、“删除”等。
 * Tooltip 是基于 PopTrigger 进行封装的。
 * Tooltip 负责定义箭头与内容的相关样式。
 */
declare const Tooltip: React.ForwardRefExoticComponent<ITooltipProps & React.RefAttributes<any>>;
export default Tooltip;
