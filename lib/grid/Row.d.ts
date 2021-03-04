import * as React from "react";
import "./style";
export interface IRowProps {
    [key: string]: any;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 每列之间的间距
     */
    gutter?: number;
    /**
     * 附加样式，可以在这里设置 flex 相关样式，如 align-items
     */
    style?: React.CSSProperties;
}
/**
 * 栅格行
 */
declare const Row: React.FunctionComponent<IRowProps>;
export default Row;
