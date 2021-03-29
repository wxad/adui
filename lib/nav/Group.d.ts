import * as React from "react";
import "./style";
export interface IGroupProps {
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
     * 组名
     */
    title?: React.ReactNode;
}
/**
 * 导航栏 - 分组
 */
declare const Group: React.FC<IGroupProps>;
export default Group;
