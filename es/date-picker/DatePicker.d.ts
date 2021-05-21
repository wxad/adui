import React from "react";
import RangePicker from "./RangePicker";
import "./style";
import { Placement } from "../pop-trigger";
import { IPopoverProps } from "../popover";
export interface IDatePickerProps {
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
     * 内部驱动：默认日期
     */
    defaultValue?: Date | "" | null;
    /**
     * 内部驱动：默认是否显示下拉
     */
    defaultVisible?: boolean | null;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 禁止选择的天，day => bool，每一天是的时间为 12:00:00，这一个是由 day-picker-react 决定的；
     * 比较日期的时候小心这一点。
     */
    disabledDays?: (date: Date) => boolean | void;
    /**
     * 设置输入框类型
     */
    intent?: "normal" | "primary" | "success" | "warning" | "danger";
    /**
     * 最大限制日期
     */
    maxDate?: Date | null;
    /**
     * 最小限制日期
     */
    minDate?: Date | null;
    /**
     * 日期改变时的 handler
     */
    onChange?: (date?: Date | "" | null) => void;
    /**
     * 显示状态发生变化时的handler
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 占位字符
     */
    placeholder?: string;
    /**
     * 弹出层位置
     */
    placement?: Placement;
    /**
     * 传入 Popover 的 props
     */
    popoverProps?: IPopoverProps;
    /**
     * 快捷选择项，格式：[{ label: "祖国生日", value: new Date("2020-10-01") }]
     */
    shortcuts?: {
        /**
         * 该项的文字
         */
        label: React.ReactNode;
        /**
         * 该项的日期
         */
        value: Date;
    }[];
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 设置主题
     */
    theme?: null | "light";
    /**
     * 外部控制：当前日期
     */
    value?: Date | "" | null;
    /**
     * 外部控制：是否显示下拉选择
     */
    visible?: boolean | null;
}
export interface IDatePicker extends React.ForwardRefExoticComponent<IDatePickerProps & React.RefAttributes<any>> {
    RangePicker: typeof RangePicker;
}
/**
 * 日期选择器用于了解当前已选日期，选择或输入需要的日期、日期范围等。
 */
declare const DatePicker: IDatePicker;
export default DatePicker;
