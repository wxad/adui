import React from "react";
import Divider from "./Divider";
import Group from "./Group";
import Item from "./Item";
import SubNav from "./SubNav";
import "./style";
export interface INavProps {
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
     * 默认展开的 SubNav indexes，请确保数组项合法，Nav 不会做过多验证
     */
    defaultOpenIndexes?: Array<React.ReactText> | null;
    /**
     * 默认选中的 Nav.Item index
     */
    defaultSelectedIndex?: React.ReactText | null;
    /**
     * 点击 Nav.Item 时的 handler，参数：index
     */
    onChange?: (index: React.ReactText) => void;
    /**
     * Sub 收起 / 展开 时的 handler，参数：index
     */
    onOpenChange?: (indexes: Array<React.ReactText>) => void;
    /**
     * 外部控制：展开的 SubNav indexes，请确保数组项合法，Nav 不会做过多验证
     */
    openIndexes?: Array<React.ReactText> | null;
    /**
     * 外部控制：选中的 Nav.Item index
     */
    selectedIndex?: React.ReactText | null;
    /**
     * 设置尺寸大小
     */
    size?: "mini" | "small" | "medium" | "large";
}
/**
 * 导航栏引导用户确认位置、方向，完成内容之间移动。依据内容选择适当配合的导航形式，为页面和功能提供引导性结构菜单。
 */
declare const Nav: React.FC<INavProps> & {
    Divider: typeof Divider;
    Group: typeof Group;
    Item: typeof Item;
    SubNav: typeof SubNav;
};
export default Nav;
