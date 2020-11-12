import * as React from "react";
import PropTypes from "prop-types";
import { Option, OptGroup } from "rc-select";
import { IInputProps } from "../input";
import "./style";
export interface ISuggest {
    getPopupDOMNode: () => HTMLElement;
    getInputDOMNode: () => HTMLInputElement;
}
export interface IOption {
    [key: string]: any;
    key: string;
    value: string;
    children: React.ReactNode;
}
export interface ISuggestProps {
    [key: string]: any;
    /**
     * 是否在搜索框为空时，自动隐藏 popup
     */
    autoHidePopup?: boolean;
    /**
     * input 标签原生属性 - autoFocus
     */
    autoFocus?: boolean;
    children?: React.ReactNode;
    defaultOpen?: boolean | null;
    /**
     * 默认值 - 内部驱动
     */
    defaultValue?: string | null;
    dataSource?: any[];
    /**
     * 指定弹出层的父级，默认为 document.body
     */
    getPopupContainer?: null | ((node: HTMLElement) => HTMLElement);
    inputProps?: IInputProps;
    /**
     * 类型
     */
    intent?: "normal" | "primary" | "success" | "warning" | "danger";
    leftElement?: JSX.Element;
    notFoundContent?: string | null;
    onDropdownVisibleChange?: (open: boolean) => void;
    onSearch?: (val: string) => void;
    onSelect?: (value: string, option: IOption) => void;
    open?: null | boolean;
    placeholder?: string;
    rightElement?: JSX.Element;
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 设置主题
     */
    theme?: null | "light";
    value?: string | null;
}
export interface ISuggestState {
    open?: boolean;
    searchValue?: string;
}
/**
 * 下拉选择器。
 */
declare class Suggest extends React.Component<ISuggestProps, ISuggestState> {
    static Option: typeof Option;
    static OptGroup: typeof OptGroup;
    static propTypes: {
        /**
         * 是否在搜索框为空时，自动隐藏 popup
         */
        autoHidePopup: PropTypes.Requireable<boolean>;
        /**
         * input 标签原生属性 - autoFocus
         */
        autoFocus: PropTypes.Requireable<boolean>;
        /**
         * 子节点
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 下拉列表
         */
        dataSource: PropTypes.Requireable<any[]>;
        /**
         * 内部驱动：是否展开
         */
        defaultOpen: PropTypes.Requireable<boolean>;
        /**
         * 默认值 - 内部驱动
         */
        defaultValue: PropTypes.Requireable<React.ReactText>;
        /**
         * 指定弹出层的父级，默认为 document.body
         */
        getPopupContainer: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 传递给 <Input /> 的 Props
         */
        inputProps: PropTypes.Requireable<object>;
        /**
         * 类型
         */
        intent: PropTypes.Requireable<string>;
        /**
         * 前置元素
         */
        leftElement: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 无匹配结果时的显示文字
         */
        notFoundContent: PropTypes.Requireable<string>;
        /**
         * 下拉展示发生变化时的 handler，参数：bool
         */
        onDropdownVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 搜索时的 handler，参数：value
         */
        onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 选择时的 handler，参数：(value, option)
         */
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 从外部指定下拉是否展开
         */
        open: PropTypes.Requireable<boolean>;
        /**
         * 选择框默认文字
         */
        placeholder: PropTypes.Requireable<string>;
        /**
         * 后置元素
         */
        rightElement: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 设置尺寸
         */
        size: PropTypes.Requireable<string>;
        /**
         * 设置主题
         */
        theme: PropTypes.Requireable<string | null>;
        /**
         * 从外部指定当前选中项的值
         */
        value: PropTypes.Requireable<React.ReactText>;
    };
    static defaultProps: ISuggestProps;
    static getDerivedStateFromProps: ({ open, value }: ISuggestProps) => ISuggestState | null;
    locked: boolean;
    suggest: ISuggest;
    constructor(props: ISuggestProps);
    saveSuggest: (node: ISuggest) => void;
    onDropdownVisibleChange: (open: boolean) => void;
    onSearch: (val: string) => void;
    render(): JSX.Element;
}
export default Suggest;
