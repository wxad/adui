import React from "react";
import "./style";
export interface ISwitchProps {
    [key: string]: any;
    /**
     * 开关状态 - 外部控制
     */
    checked?: null | boolean;
    /**
     * 开状态时的附加文字
     */
    checkedText?: React.ReactNode;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 默认开关状态 - 内部驱动
     */
    defaultChecked?: null | boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 开关状态改变时的 handler
     */
    onChange?: ((checked: boolean) => void) | null;
    /**
     * 点击事件的 handler
     */
    onClick?: (() => void) | null;
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 关状态时的附加文字
     */
    unCheckedText?: React.ReactNode;
}
/**
 * 开关用于表示内容的开启与关闭，常用于开启或关闭某一功能、模式，也可以表示业务中的一些特殊逻辑，如广告的“投放/暂停”。
 */
declare const Switch: React.FunctionComponent<ISwitchProps>;
export default Switch;
