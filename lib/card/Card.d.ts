import React from "react";
import Header from "./Header";
import "./style";
export interface ICardProps {
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
     * 层级
     */
    elevation?: 0 | 1 | 2 | 3 | 4;
    /**
     * 可互动性
     */
    interactive?: boolean;
}
export interface ICard extends React.ForwardRefExoticComponent<ICardProps & React.RefAttributes<HTMLDivElement>> {
    Header: typeof Header;
}
/**
 * 卡片是包含一类特定数据集的有层级的模块，用以承载相关联内容。页面设计中，通常以内容决定卡片的布局方式。
 */
declare const Card: ICard;
export default Card;
