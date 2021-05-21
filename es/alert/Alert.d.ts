import React from "react";
import { IconNames } from "../icon";
import "./style";
export interface IAlertProps {
    [key: string]: any;
    /**
     * 关闭后的 handler，参数 node
     */
    afterClose?: () => void;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 是否可关闭
     */
    closable?: boolean;
    /**
     * 关闭文字
     */
    closeText?: React.ReactNode;
    /**
     * 是否展开，内部驱动
     */
    defaultExpanded?: boolean | null;
    /**
     * 展开内容
     */
    expandContent?: React.ReactNode;
    /**
     * 是否展开，外部控制
     */
    expanded?: boolean | null;
    /**
     * 设置图标
     */
    icon?: IconNames | null;
    /**
     * 设置类型
     */
    intent?: "normal" | "primary" | "success" | "info" | "warning" | "danger";
    /**
     * 关闭时的 handler，参数 node
     */
    onClose?: (node: HTMLElement) => void;
    /**
     * 展开状态变化时的 handler，参数为 bool
     */
    onExpandChange?: (expanded: boolean) => void;
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium";
    /**
     * 提醒内容
     */
    text: React.ReactNode;
    /**
     * 设置主题
     */
    theme?: null | "light";
    /**
     * 提醒标题
     */
    title?: React.ReactNode;
}
/**
 * 提醒是内容的常态、即时性提示，展示需要用户即时关注的信息。
 * 与对话框 Dialog 或气泡提示 Popover 不同，提醒 Alert 通常常驻在页面中，与页面内容有更强的关联性。
 */
declare const Alert: React.FC<IAlertProps>;
export default Alert;
