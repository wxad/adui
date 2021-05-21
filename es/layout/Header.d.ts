import React from "react";
import "./style";
export interface IHeaderProps {
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
}
/**
 * 布局 - 头部 `<header />`
 */
declare const Header: React.FC<IHeaderProps> & {
    stickable: boolean;
};
export default Header;
