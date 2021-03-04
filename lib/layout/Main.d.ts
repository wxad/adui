import * as React from "react";
import "./style";
export interface IMainProps {
    [key: string]: any;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 附加类名
     */
    className?: string;
}
/**
 * 布局 - 主体内容 `<main />`
 */
declare const Main: React.FunctionComponent<IMainProps>;
export default Main;
