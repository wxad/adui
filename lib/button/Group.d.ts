import * as React from "react";
import "./style";
export interface IButtonGroupProps {
    [key: string]: any;
    /**
     * 是否通栏分配宽度（flex: 1;）
     */
    banner?: boolean;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 设置内部所有 <Button /> 是否禁用
     */
    disabled?: boolean;
    /**
     * 设置内部所有 <Button /> 类型
     */
    intent?: "normal" | "primary" | "success" | "warning" | "danger";
    /**
     * 设置内部所有 <Button /> 尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 设置内部所有 <Button /> 主题
     */
    theme?: null | "light";
}
/**
 * 按钮组
 */
declare const Group: React.FunctionComponent<IButtonGroupProps>;
export default Group;
