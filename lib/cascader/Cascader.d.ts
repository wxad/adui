import React from "react";
import { IPopoverProps } from "../popover";
import "./style";
export declare type CascaderValueType = React.ReactText[];
export interface CascaderOption {
    [key: string]: any;
    value?: string | number;
    title: React.ReactNode;
    disabled?: boolean;
    children?: CascaderOption[];
}
export interface ICascaderProps {
    [key: string]: any;
    /**
     * 是否支持清除
     */
    allowClear?: boolean;
    /**
     * 当此项为 true 时，点选每级菜单选项值都会发生变化
     */
    changeOnSelect?: boolean;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 附加类名，注意 Cascader 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
     */
    className?: string;
    /**
     * 默认值，内部驱动
     */
    defaultValue?: CascaderValueType | null;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 选择后展示的渲染函数
     */
    displayRender?: (title: string[], selectedOptions?: CascaderOption[]) => React.ReactNode;
    /**
     * 次级菜单的展开方式，可选 'click' 和 'hover'
     */
    expandTrigger?: "click" | "hover";
    /**
     * 值变化时的 handler
     */
    onChange?: (value: CascaderValueType, selectOptions: CascaderOption[]) => void;
    /**
     * 下拉框 visible 状态改变时的回调
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 可选项数据源
     */
    options?: CascaderOption[];
    /**
     * 占位文本
     */
    placeholder?: React.ReactNode;
    /**
     * 属性将会透传给 Popover 组件
     */
    popoverProps?: IPopoverProps;
    /**
     * 尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 值，外部控制
     */
    value?: CascaderValueType | null;
    /**
     * 外部控制下拉框 visible 状态
     */
    visible?: boolean | null;
}
/**
 * 级联选择器直观展示已有的层级关系。
 */
declare const Cascader: React.FC<ICascaderProps>;
export default Cascader;
