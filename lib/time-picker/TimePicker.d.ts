import React from "react";
import { IPopoverProps } from "../popover";
import "./style";
export interface ITimePickerProps {
    [key: string]: any;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 是否在选择后，消失 Popover
     */
    closeOnSelect?: boolean;
    /**
     * 内部驱动，默认选择时间
     */
    defaultValue?: null | string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 禁止选择的小时
     */
    disabledHours?: (hour?: string | null) => boolean | void;
    /**
     * 禁止选择的分钟
     */
    disabledMinutes?: (minute?: string | null) => boolean | void;
    /**
     * 设置输入框类型
     */
    intent?: "normal" | "primary" | "success" | "warning" | "danger";
    /**
     * 可选时间的最大值
     */
    maxTime?: string | null;
    /**
     * 可选时间的最小值
     */
    minTime?: string | null;
    /**
     * 时间改变的 handler
     */
    onChange?: (value: string) => void;
    /**
     * 判断是否是整数
     */
    onlyHour?: boolean;
    /**
     * 占位字符
     */
    placeholder?: string;
    /**
     * 传入 Popover 的 props
     */
    popoverProps?: IPopoverProps;
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 外部控制：当前时间
     */
    value?: null | string;
}
export interface ITimePickerState {
    hour: string | null;
    minute: string | null;
    inputValue?: string | null;
    visible: boolean;
    prevValueProp: null | string;
}
/**
 * 时间选择器用于了解当前已选时间，选择或输入需要的时间、时间范围等。
 */
declare const TimePicker: React.ForwardRefExoticComponent<ITimePickerProps & React.RefAttributes<any>>;
export default TimePicker;
