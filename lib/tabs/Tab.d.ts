import React from "react";
import "./style";
export interface ITabProps {
    [key: string]: any;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 点击事件的 handler
     */
    onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * 附加样式
     */
    style?: React.CSSProperties;
    /**
     * 标签文字
     */
    title: React.ReactNode;
    /**
     * value
     */
    value?: React.ReactText;
}
/**
 * 导航页签 - Tab
 */
declare const Tab: React.FunctionComponent<ITabProps>;
export default Tab;
