import React from "react";
import "./style";
export interface ISubMenuProps {
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
     * 是否禁用
     */
    disabled?: Boolean;
    /**
     * 独立的 index required
     */
    index: React.ReactText;
    /**
     * subnav 标题
     */
    title?: React.ReactNode;
}
/**
 * 行动菜单 - 子菜单
 */
declare const SubMenu: React.FC<ISubMenuProps>;
export default SubMenu;
