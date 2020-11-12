import React from "react";
import Group from "./Group";
import { IconNames } from "../icon";
import { IPopoverProps } from "../popover";
import "./style";
export interface ICheckboxProps {
    [key: string]: any;
    /**
     * 是否选中
     */
    checked?: null | boolean;
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
     * 加入问号气泡提示内容
     */
    helper?: React.ReactNode;
    /**
     * 自定义问号气泡的 Icon
     */
    helperIcon?: IconNames;
    /**
     * 问号气泡提示的 props，会将此对象都传递给 <Popover />
     */
    helperProps?: IPopoverProps;
    /**
     * 设置 indeterminate 状态，负责且仅仅负责样式控制，请在实现全选效果时使用
     */
    indeterminate?: boolean;
    /**
     * 选中态发生变化时的 handler
     */
    onChange?: ((checked: boolean) => void) | null;
    /**
     * 点击时的 handler
     */
    onClick?: ((e: React.MouseEvent<HTMLLabelElement> | React.KeyboardEvent<HTMLLabelElement>) => void) | null;
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 值，只在使用 Checkbox.Group 时会读取使用
     */
    value?: null | React.ReactText;
}
export interface ICheckbox extends React.ForwardRefExoticComponent<ICheckboxProps & React.RefAttributes<HTMLLabelElement>> {
    Group: typeof Group;
}
/**
 * 勾选提供用户在多个选项中，对选项的内容进行单或多个选择。
 */
declare const Checkbox: ICheckbox;
export default Checkbox;
