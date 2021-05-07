import React from "react";
import Textarea from "./Textarea";
import "./style";
export interface IInputProps {
    [key: string]: any;
    /**
     * input 标签原生属性 - autoComplete
     */
    autoComplete?: "on" | "off";
    /**
     * input 标签原生属性 - autoFocus
     */
    autoFocus?: boolean;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 实现手机号、日期、数字及自定义格式，可查看[示例](http://wxad.design/adui/components/input)。
     */
    cleaveOptions?: object;
    /**
     * 宽度是否与内容宽度对齐
     */
    contentJustify?: boolean;
    /**
     * 是否按照一个汉字算 2 字数的方式限制长度
     */
    countHanzi?: boolean;
    /**
     * 默认值 - 内部驱动
     */
    defaultValue?: string | null;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 输入框的 id
     */
    id?: string | null;
    /**
     * 类型
     */
    intent?: "normal" | "primary" | "success" | "warning" | "danger";
    /**
     * 前置元素
     */
    leftElement?: JSX.Element;
    /**
     * 限制长度
     */
    limit?: number | null;
    /**
     * input 标签原生属性 - name
     */
    name?: string | null;
    /**
     * blur 时的 handler
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * 值改变时的 handler
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, value?: string) => void;
    /**
     * focus 时的 handler
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * keydown 时的 handler
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * enter 时的 handler
     */
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * placeholder
     */
    placeholder?: string;
    /**
     * input 标签原生属性 - required
     */
    required?: boolean;
    /**
     * 后置元素
     */
    rightElement?: JSX.Element;
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 附加样式
     */
    style?: React.CSSProperties;
    /**
     * 设置主题
     */
    theme?: null | "light";
    /**
     * input 标签原生属性 - type
     */
    type?: string | null;
    /**
     * 值 - 外部控制
     */
    value?: string | null;
}
export interface IInput extends React.ForwardRefExoticComponent<IInputProps & React.RefAttributes<any>> {
    Textarea: typeof Textarea;
}
/**
 * 输入框用于文本输入的区域，可结合图标、按钮、选择器等组件使用。
 */
declare const Input: IInput;
export default Input;
