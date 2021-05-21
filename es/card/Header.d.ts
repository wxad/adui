import React from "react";
import "./style";
export interface IHeaderProps {
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
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 卡片副标题
     */
    subTitle?: React.ReactNode;
    /**
     * 卡片主标题（如不填整个标题模块隐藏）
     */
    title?: React.ReactNode;
    /**
     * 头部右侧节点
     */
    topContent?: React.ReactNode;
}
/**
 * 卡片组件头部部分
 */
declare const Header: React.FC<IHeaderProps>;
export default Header;
