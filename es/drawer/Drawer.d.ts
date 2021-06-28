import React from "react";
import "./style";
export interface IDrawerProps {
    [key: string]: any;
    /**
     * 关闭后（transition 结束后）的 handler
     */
    afterClose?: (() => void) | null;
    /**
     * visible 时页面能否滚动
     */
    bodyScrollable?: boolean;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 附加类名，注意 Drawer 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
     */
    className?: string;
    /**
     * 是否每次 visible: false 都销毁 dom
     */
    destroyAfterClose?: boolean;
    /**
     * 是否支持 ESC 关闭
     */
    escapeKeyClosable?: boolean;
    /**
     * header 标题栏内部的内容
     */
    headerContent?: React.ReactNode;
    /**
     * 完全自定义 header 的内容
     */
    headerElement?: React.ReactNode;
    /**
     * 设置 header 样式
     */
    headerStyle?: React.CSSProperties;
    /**
     * 点击 mask 是否触发 cancel 事件
     */
    maskClosable?: boolean;
    /**
     * 是否显示 mask
     */
    maskVisible?: boolean;
    /**
     * 关闭时的 handler
     */
    onClose?: (() => void) | null;
    /**
     * 位置
     */
    placement?: "top" | "right" | "bottom" | "left";
    /**
     * 尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 外部控制：是否显示
     */
    visible?: boolean;
    /**
     * 设置 z-index 层级，默认为 var(--z-index-dialog)
     */
    zIndex?: React.ReactNode;
}
/**
 * 浮层覆盖在页面内容上，并固定在屏幕的边缘。
 */
declare const Drawer: React.FC<IDrawerProps>;
export default Drawer;
