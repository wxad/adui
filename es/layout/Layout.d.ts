import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";
export interface ILayoutProps {
    [key: string]: any;
    /**
     * 子节点
     */
    children?: React.ReactNode;
}
/**
 * 布局组件用于搭建一个网站的基本框架。包含子组件 `Aside` `Header` `Main`
 */
declare const Layout: React.FC<ILayoutProps> & {
    Aside: typeof Aside;
    Header: typeof Header;
    Main: typeof Main;
};
export default Layout;
