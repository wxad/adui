/**
 * confirm 是将 Dialog 函数式编程的结果。
 * 1. confirm 是为了让使用者方便地函数式调用组件；因此 confirm 方法的 visible 状态是不交给外部处理的；
 * 2. 每次调用 confirm 都会创建一个 Dialog，在 close 时都需要进行 unmountComponentAtNode。
 */
import * as React from "react";
import { IDialogProps } from "./Dialog";
import "./style";
export interface IConfirmProps extends IDialogProps {
    content?: React.ReactNode;
    contentTitle?: React.ReactNode;
    contentText?: React.ReactNode;
    intent?: "danger" | "info" | "success" | "warning";
    onClose?: (func?: (() => void) | null) => void;
}
declare const confirm: (config: IConfirmProps) => {
    destroy: (cb: () => void) => void;
    update: (newConfig: IConfirmProps) => void;
};
export default confirm;
