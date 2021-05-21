import React from "react";
import "./style";
export interface IMessageProps {
    [key: string]: any;
    /**
     * 行动按钮的配置，如：action: { text: "解锁", onClick: () => { message.destroy() } }
     */
    action?: {
        text: string;
        onClick: () => void;
    } | null;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 是否显示关闭 Icon，如果需要只支持手动关闭，还需要传入 duration: 0
     */
    closable?: boolean;
    /**
     * 内容
     */
    content?: React.ReactNode;
    /**
     * 间隔多久自动关闭，单位为 s，如果传入 0，则表示不会自动消失
     */
    duration?: number;
    /**
     * Message 插入到哪个元素，默认 () => document.body
     */
    getContainer?: () => HTMLElement;
    /**
     * 设置类型
     */
    intent: "normal" | "primary" | "success" | "warning" | "danger";
    /**
     * 关闭时的 handler
     */
    onClose?: (() => void) | null;
}
export interface IMessage extends React.ForwardRefExoticComponent<IMessageProps & React.RefAttributes<HTMLDivElement>> {
    normal: any;
    primary: any;
    success: any;
    warning: any;
    danger: any;
}
/**
 * 全局提醒用于全局性地展示需要即时性关注的信息。
 */
declare const Message: IMessage;
export default Message;
