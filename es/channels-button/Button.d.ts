import React from "react";
import { IconNames } from "../icon";
import Group from "./Group";
import "./style";
export interface IButtonProps {
    [key: string]: any;
    /**
     * active 状态，用于 Button.Group 中
     */
    active?: boolean;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean | null;
    /**
     * 使用 href，将 <button /> 转化为 <a /> 标签，这时候也可以传入 target="_blank" 等 <a /> 标签的属性
     */
    href?: string;
    /**
     * 类型
     */
    intent?: "normal" | "primary" | "success" | "warning" | "danger";
    /**
     * 左图标
     */
    leftIcon?: IconNames;
    /**
     * 是否加载
     */
    loading?: boolean;
    /**
     * 点击事件的 handler
     */
    onClick?: null | ((e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void);
    /**
     * 右图标
     */
    rightIcon?: IconNames;
    /**
     * 尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 主题
     */
    theme?: null | "light";
}
export interface IButton extends React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<any>> {
    Group: typeof Group;
    type: string;
}
/**
 * 按钮用于触发一个新任务、新流程等的即时行动。
 */
declare const Button: IButton;
export default Button;
