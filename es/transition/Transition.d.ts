import React from "react";
export declare type TEase = "ease-in" | "ease-out";
export declare type TPhase = "enter" | "leave";
export interface ITransitionProps {
    [key: string]: any;
    /**
     * 结束 enter 时的回调
     */
    afterEnter?: () => void;
    /**
     * 结束 leave 时的回调
     */
    afterLeave?: () => void;
    /**
     * 初次 mount 时是否进行动画
     */
    appear?: boolean;
    /**
     * 开始 enter 前的回调
     */
    beforeEnter?: () => void;
    /**
     * 开始 leave 前的回调
     */
    beforeLeave?: () => void;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * enter：延迟
     */
    enterDelay?: number | number[];
    /**
     * enter：总体时间，当有此 Prop 时将忽略 spring 相关属性，即 stiffness 和 damping
     */
    enterDuration?: number | number[];
    /**
     * enter：贝塞尔曲线，将在 duration 有效时应用，在 spring 动画时被忽略
     */
    enterEase?: TEase | TEase[];
    /**
     * enter：弹力 —— 在现实世界中是由材料和钢卷厚度（coil thickness）造成的。弹力越大，弹簧会收缩得更有力，动画也会变得活泼
     */
    enterTension?: number | number[];
    /**
     * enter：摩擦力 —— 摩擦力越高，就需要越多的力让物体运动，动画也会越慢。如果摩擦力足够低，物体会运动超过终点，产生数个回弹效果
     */
    enterFriction?: number | number[];
    /**
     * enter：起点的一些原子类名
     */
    enterFrom?: string | string[];
    /**
     * enter：终点的一些原子类名
     */
    enterTo?: string | string[];
    /**
     * leave：延迟
     */
    leaveDelay?: number | number[];
    /**
     * leave：总体时间，当有此 Prop 时将忽略 spring 相关属性，即 stiffness 和 damping
     */
    leaveDuration?: number | number[];
    /**
     * leave：贝塞尔曲线，将在 duration 有效时应用，在 spring 动画时被忽略
     */
    leaveEase?: TEase | TEase[];
    /**
     * leave：弹力 —— 在现实世界中是由材料和钢卷厚度（coil thickness）造成的。弹力越大，弹簧会收缩得更有力，动画也会变得活泼
     */
    leaveTension?: number | number[];
    /**
     * leave：摩擦力 —— 摩擦力越高，就需要越多的力让物体运动，动画也会越慢。如果摩擦力足够低，物体会运动超过终点，产生数个回弹效果
     */
    leaveFriction?: number | number[];
    /**
     * leave：起点的一些原子类名
     */
    leaveFrom?: string | string[];
    /**
     * leave：终点的一些原子类名
     */
    leaveTo?: string | string[];
    /**
     * 元素进场入场的开关
     */
    show?: boolean;
    /**
     * 附加样式
     */
    style?: React.CSSProperties;
    /**
     * 节点
     */
    tag?: keyof JSX.IntrinsicElements;
}
/**
 * 动效
 */
declare const Transition: React.FC<ITransitionProps>;
export default Transition;
