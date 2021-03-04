import React from "react";
import "./style";
export interface IColProps {
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
     * 栅格占位格数
     */
    span?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;
    /**
     * 附加样式
     */
    style?: React.CSSProperties;
}
/**
 * 栅格列
 */
declare const Col: React.FunctionComponent<IColProps>;
export default Col;
