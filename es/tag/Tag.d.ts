import React from "react";
import "./style";
export interface ITagProps {
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
     * 自定义颜色
     */
    color?: string | null;
    /**
     * 设置类型
     */
    intent?: "normal" | "primary" | "success" | "warning" | "danger";
    /**
     * 指定 Tag 是否可交互，组件将会自动加上 hover active 样式
     */
    interactive?: boolean;
    /**
     * 移除时的 handler，设置此 prop 时 Tag 将会忽略 removable prop
     */
    onRemove?: ((e: React.MouseEvent) => void) | null;
    /**
     * 是否可移除
     */
    removable?: boolean;
    /**
     * 是否圆角
     */
    round?: boolean;
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 附加样式
     */
    style?: React.CSSProperties;
    /**
     * 主题
     */
    theme?: null | "light";
}
/**
 * 标签展现相关的独立关键词信息，方便用户快速辨别内容属性，也可进行操作。
 */
declare const Tag: React.FC<ITagProps>;
export default Tag;
