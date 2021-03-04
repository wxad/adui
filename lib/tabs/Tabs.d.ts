import React from "react";
import Tab from "./Tab";
import "./style";
export interface ITabsProps {
    [key: string]: any;
    /**
     * 是否通栏分配宽度（flex: 1;）
     */
    banner?: boolean;
    /**
     * 子节点
     */
    children: React.ReactNode;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 默认的已选中项
     */
    defaultValue?: React.ReactText | null;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * tab 的间距 margin
     */
    gutter?: number;
    /**
     * 值变化时的 handler
     */
    onChange?: (value: React.ReactText) => void;
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 已选中项
     */
    value?: React.ReactText | null;
}
export interface ITabs extends React.ForwardRefExoticComponent<ITabsProps & React.RefAttributes<HTMLDivElement>> {
    Tab: typeof Tab;
}
/**
 * 导航页签，顶部横向导航的内容，用于切换页面中同一层级的内容。
 */
declare const Tabs: ITabs;
export default Tabs;
