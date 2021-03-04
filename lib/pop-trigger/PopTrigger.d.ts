import React from "react";
import "./style";
interface IBaseObject {
    [key: string]: any;
}
export interface ITrigger {
    forcePopupAlign?: () => void;
    getRootDomNode?: () => HTMLElement;
}
export declare type Placement = "bottom" | "bottomLeft" | "bottomRight" | "left" | "leftBottom" | "leftTop" | "right" | "rightBottom" | "rightTop" | "top" | "topLeft" | "topRight";
export interface IPopTriggerProps {
    [key: string]: any;
    action?: string[];
    builtinPlacements?: object;
    children?: React.ReactNode;
    defaultPopupVisible?: null | boolean;
    destroyPopupOnHide?: boolean;
    getPopupContainer?: null | ((node: HTMLElement) => HTMLElement);
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    onPopupAlign: (node: HTMLElement, align?: IBaseObject) => void;
    onPopupVisibleChange: (visible: boolean) => void;
    popup: React.ReactNode;
    popupAlign?: null | object;
    popupClassName?: string;
    popupPlacement?: Placement;
    popupStyle?: null | React.CSSProperties;
    popupTransitionName?: string;
    popupVisible?: null | boolean;
}
/**
 * 弹出行为。
 *
 * PopTrigger 是基于 rc-trigger (MIT License) 进行封装的。
 * PopTrigger 的定位是抽象的弹出行为。
 * PopTrigger 应提供所有弹出相关的能力与配置，供 Tooltip、Select 等调用。
 * PopTrigger 也可以被使用者直接使用，实现自定的弹出功能。
 */
declare const PopTrigger: React.ForwardRefExoticComponent<IPopTriggerProps & React.RefAttributes<any>>;
export default PopTrigger;
