import React from "react";
import "./style";
export interface IAsideProps {
    [key: string]: any;
    /**
     * 是否固定
     */
    affixed?: boolean;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 是否收起
     */
    collapsed?: boolean;
    /**
     * 是否支持收起
     */
    collapsible?: boolean;
    /**
     * 收起状态变化时的 handler
     */
    onCollapseChange?: (collapsed: boolean) => void;
}
/**
 * 布局 - 侧边栏 `<aside />`
 */
declare const Aside: React.FunctionComponent<IAsideProps> & {
    stickable: boolean;
};
export default Aside;
