import React from "react";
import "./style";
export interface ISpinnerProps {
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
     * 设置颜色
     */
    color?: string | null;
    /**
     * 设置类型
     */
    intent?: "normal" | "primary" | "success" | "info" | "warning" | "danger";
    /**
     * 设置 Spinner 在有 children 为 false（即空状态）时的最小高度
     */
    minHeight?: number;
    /**
     * svg 宽高尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 是否转动
     */
    spinning?: boolean;
    /**
     * 附加样式
     */
    style?: React.CSSProperties;
    /**
     * 文字提示
     */
    text?: string | null;
    /**
     * 指定加载进度
     */
    value?: number | null;
}
/**
 * 旋转加载用于告知用户信息内容的加载状态，通常是即时、短时的。
 */
declare const Spinner: React.FC<ISpinnerProps>;
export default Spinner;
