import React from "react";
import "./style";
export interface ICollapseProps {
    className?: string;
    collapsed?: boolean;
    content: React.ReactNode;
    defaultCollapsed?: boolean;
    header: React.ReactNode;
    onCollapseChange?: (collapsed: boolean) => void;
}
/**
 * 颜色选择器
 */
declare const ColorPickerCollapse: React.FC<ICollapseProps>;
export default ColorPickerCollapse;
