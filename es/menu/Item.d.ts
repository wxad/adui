import React from "react";
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
    disabled?: Boolean;
    /**
     * 独立的 index required
     */
    index: React.ReactText;
    /**
     * 点击事件
     */
    onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}
/**
 * 行动菜单 - 菜单项
 */
declare const Item: React.FC<IItemProps>;
export default Item;
