import * as React from "react";
export interface IMotionProps {
    [key: string]: any;
    /**
     * dom 移除后的 handler
     */
    afterLeave?: (node: HTMLElement) => void;
    /**
     * 可自定义 animation 的 appear, enter, leave
     */
    animation?: object;
    /**
     * 进入动画是否作用于 appear 阶段
     */
    appear?: boolean;
    /**
     * 子元素
     */
    children?: React.ReactNode;
    /**
     * Motion 包裹层的元素标签
     */
    component?: string;
    /**
     * 动效持续时间，单位 ms
     */
    duration?: number;
    /**
     * dom 开始移除的 handler
     */
    onLeave?: (node: HTMLElement) => void;
    /**
     * 动效形式
     */
    transition?: "slide" | "zoom" | "zoomHorizontal";
}
declare const Motion: React.FC<IMotionProps>;
export default Motion;
