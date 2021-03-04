import React from "react";
import { IconNames } from "../icon";
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
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 设置图标
     */
    icon?: IconNames;
    /**
     * 独立的 index required
     */
    index: React.ReactText;
}
/**
 * 导航栏 - item
 */
declare const Item: React.FunctionComponent<IItemProps>;
export default Item;
