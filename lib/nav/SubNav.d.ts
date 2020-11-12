import React from "react";
import { IconNames } from "../icon";
import "./style";
export interface ISubNavProps {
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
     * 设置图标
     */
    icon?: IconNames;
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
 * 导航栏 - 子导航
 */
declare const SubNav: React.FunctionComponent<ISubNavProps>;
export default SubNav;
