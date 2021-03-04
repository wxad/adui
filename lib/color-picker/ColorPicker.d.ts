import React from "react";
import { IPopoverProps } from "../popover";
import "./style";
export interface IColorPickerProps {
    [key: string]: any;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 默认的初始值 - 内部驱动
     */
    defaultValue?: string | null;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 输入框是否显示
     */
    inputVisible?: boolean;
    /**
     * 值改变时的 handler
     */
    onChange?: (value: string) => void;
    /**
     * 在 visible 变为 false，以及 Input blur 时触发的 handler；
     * 这个 handler 非常特殊，为了配合特殊的 recentColors Prop 使用，请在这个事件触发的时候设置 recentColors。
     */
    onFinishChange?: (value: string) => void;
    /**
     * 传入 Popover 的 props
     */
    popoverProps?: IPopoverProps;
    /**
     * 弹出框内的结果区域是否显示
     */
    popupResultVisible?: boolean;
    /**
     * 最近使用的颜色，此功能非常特殊，需配合 onFinishChange 使用
     */
    recentColors?: string[];
    /**
     * 尺寸大小
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 开启透明色
     */
    transparentEnabled?: boolean;
    /**
     * 值 - 外部控制
     */
    value?: string | null;
}
/**
 * 颜色选择器
 */
declare const ColorPicker: React.ForwardRefExoticComponent<IColorPickerProps & React.RefAttributes<any>>;
export default ColorPicker;
