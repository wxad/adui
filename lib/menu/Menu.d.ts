import * as React from "react";
import Item from "./Item";
import SubMenu from "./SubMenu";
import "./style";
export interface IMenuProps {
    [key: string]: any;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 其下的 SubMenu 展开状态发生变化的 handler，参数1 index，参数2 bool
     */
    onExpandChange?: (index: React.ReactText, open: boolean) => void;
    /**
     * 其下的 Item 点击的 handler，参数 index。当然也可以在每个 Item 上加 onClick prop。
     * 这个 prop 也只是作为一个 context，其下 Item 的 onClick 都会触发此方法。
     */
    onItemClick?: (index: React.ReactText) => void;
}
/**
 * 行动菜单是以“行动”、“操作”为主的选择菜单，与选择器 Select 不同，行动菜单不用于选择某项内容，而用于进行某种操作。
 */
declare const Menu: React.FunctionComponent<IMenuProps> & {
    Item: typeof Item;
    SubMenu: typeof SubMenu;
};
export default Menu;
