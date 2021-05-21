import * as React from "react";
import "./style";
export interface IDividerProps {
    [key: string]: any;
    /**
     * 附加类名
     */
    className?: string;
}
/**
 * 导航栏 - 分割线
 */
declare const Divider: React.FC<IDividerProps>;
export default Divider;
