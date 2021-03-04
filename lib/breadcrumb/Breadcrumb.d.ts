import React from "react";
import Item from "./Item";
import "./style";
export interface IBreadcrumbProps {
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
     * 尺寸大小
     */
    size?: "mini" | "small" | "medium" | "large";
}
/**
 * 面包屑用于展示当前和历史的行为路径、所在位置，并能够依据线性逻辑进行返回。
 */
declare const Breadcrumb: React.FunctionComponent<IBreadcrumbProps> & {
    Item: typeof Item;
};
export default Breadcrumb;
