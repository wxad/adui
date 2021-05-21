import React from "react";
import { IButtonProps } from "../button/Button";
import { IPopoverProps } from "../popover";
import "./style";
interface IVisibleOptions {
    target?: "cancel" | "confirm";
}
export interface IPopconfirmProps extends Omit<IPopoverProps, "onVisibleChange"> {
    cancelButton?: IButtonProps;
    cancelText?: React.ReactNode;
    confirmButton?: IButtonProps;
    confirmText?: React.ReactNode;
    onCancel?: () => void;
    onConfirm?: () => void;
    onVisibleChange?: (visible: boolean, options: IVisibleOptions) => void;
}
/**
 * 弹出式面板组件。
 */
declare const Popconfirm: React.ForwardRefExoticComponent<IPopconfirmProps & React.RefAttributes<any>>;
export default Popconfirm;
