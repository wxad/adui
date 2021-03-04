import * as React from "react";
import "./style";
export interface IItemProps {
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
     * 指向链接
     */
    href?: string;
}
/**
 * 面包屑 - item
 */
declare const Item: React.FunctionComponent<IItemProps>;
export default Item;
