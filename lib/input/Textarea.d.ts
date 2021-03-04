import React from "react";
import "./style";
export interface ITextareaProps {
    [key: string]: any;
    /**
     * input 标签原生属性 - autoFocus
     */
    autoFocus?: boolean;
    /**
     * 附加类名
     */
    className?: string;
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
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * 值改变时的 handler
     */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, value?: string) => void;
    /**
     * focus 时的 handler
     */
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * keydown 时的 handler
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    /**
     * enter 时的 handler
     */
    onPressEnter?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    /**
     * scroll 时的 handler
     */
    onScroll?: (e: React.UIEvent<HTMLTextAreaElement>) => void;
    /**
     * placeholder
     */
    placeholder?: string;
    /**
     * input 标签原生属性 - required
     */
    required?: boolean;
    /**
     * 是否支持调整大小
     */
    resize?: "none" | "both" | "horizontal" | "vertical";
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
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
/**
 * 输入区域，用于多行纯文本编辑。
 */
declare const Textarea: React.ForwardRefExoticComponent<ITextareaProps & React.RefAttributes<any>>;
export default Textarea;
