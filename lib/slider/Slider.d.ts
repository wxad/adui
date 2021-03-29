import React from "react";
import { ITooltipProps } from "../tooltip";
import "./style";
export interface ISliderMarks {
    [key: number]: React.ReactNode | {
        style: React.CSSProperties;
        label: React.ReactNode;
    };
}
export declare type SliderValue = number | [number, number] | undefined | null;
export declare type ChangeHandler = (value: SliderValue) => void;
export interface ISliderProps {
    [key: string]: any;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 初始的默认值
     */
    defaultValue?: SliderValue;
    /**
     * 是否支持输入框，此 prop 与双滑块模式互斥
     */
    inputVisible?: boolean;
    /**
     * 刻度标记，例如：{25: "25%", 50: "50℃"}
     */
    marks?: ISliderMarks;
    /**
     * 最大值
     */
    max?: number;
    /**
     * 最小值
     */
    min?: number;
    /**
     * 在 `onmouseup` 时触发的 handler
     */
    onAfterChange?: ChangeHandler;
    /**
     * 在 `onmousedown` 时触发的 handler
     */
    onBeforeChange?: ChangeHandler;
    /**
     * 在值发生变化时触发的 handler
     */
    onChange?: ChangeHandler;
    /**
     * 双滑块模式
     */
    range?: boolean;
    /**
     * 步长，必须大于 0
     */
    step?: number;
    /**
     * 附加样式
     */
    style?: React.CSSProperties;
    /**
     * 对于 Tooltip 内容进行编辑，如：tipFormatter={value => `${value}元`}
     */
    tipFormatter?: null | ((value: number) => React.ReactNode);
    /**
     * 开启 tipFormatter 后，对于 Tooltip 的 props
     */
    tooltipProps?: ITooltipProps;
    /**
     * 设置当前的值
     */
    value?: SliderValue;
}
/**
 * 滑动条用于以拖拽的方式，更人性化地完成输入数据、选择数据区间等目的。
 */
declare const Slider: React.FC<ISliderProps>;
export default Slider;
