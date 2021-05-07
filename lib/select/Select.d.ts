import * as React from "react";
import PropTypes from "prop-types";
import OptGroup from "./OptGroup";
import Option from "./Option";
import { IconNames } from "../icon";
import { Placement } from "../pop-trigger";
import "./style";
export interface ISelect {
    forcePopupAlign?: () => void;
    getRootDomNode?: () => HTMLElement;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    setInputValue?: (value?: string) => void;
    getPopupDOMNode: () => HTMLElement;
}
export interface ISelectProps {
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
     * 内部驱动：是否展开
     */
    defaultOpen?: boolean | null;
    /**
     * 内部驱动：当前选中项的值
     */
    defaultValue?: React.ReactText | null;
    /**
     * 下拉菜单和选择器同宽
     */
    dropdownMatchSelectWidth?: boolean;
    /**
     * 指定弹出层的父级，默认为 document.body
     */
    getPopupContainer?: null | ((node: HTMLElement) => HTMLElement);
    /**
     * 下拉展示发生变化时的 handler，参数：bool
     */
    onDropdownVisibleChange?: (open: boolean) => void;
    /**
     * 选择时的 handler，参数：(value, option)
     */
    onSelect?: (value: React.ReactText, option: React.ReactElement<any>) => void;
    /**
     * 外部控制：是否展开
     */
    open?: null | boolean;
    /**
     * 选择框默认文字
     */
    placeholder?: React.ReactNode;
    /**
     * 设置 placement
     */
    placement?: Placement;
    /**
     * 设置右图标
     */
    rightIcon?: IconNames;
    /**
     * 搜索框默认文字
     */
    searchable?: boolean;
    /**
     * 是否需要内嵌搜索
     */
    searchPlaceholder?: string;
    /**
     * 设置尺寸，跟着 button 走
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 设置主题
     */
    theme?: null | "light";
    /**
     * 外部控制：当前选中项的值
     */
    value?: React.ReactText | null;
}
export interface ISelectState {
    open?: boolean;
    placeholderShow?: boolean;
    placeholderText?: string;
    value?: React.ReactText | null;
    selectId?: string;
}
/**
 * 选择器用于选择某项内容。
 * 选择器对比单选 Radio 的优势是，当选项过多时，选择器可对内容收起，并更关注于已选项。
 * 通常，当用户能够通过已选项，轻易得知其余选项的规律时（如年份、城市等），选择器 Select 是比较好的选择。
 */
declare class Select extends React.Component<ISelectProps, ISelectState> {
    static type: string;
    static Option: typeof Option;
    static OptGroup: typeof OptGroup;
    static propTypes: {
        /**
         * 子节点
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 附加类名
         */
        className: PropTypes.Requireable<string>;
        /**
         * 内部驱动：是否展开
         */
        defaultOpen: PropTypes.Requireable<boolean>;
        /**
         * 内部驱动：当前选中项的值
         */
        defaultValue: PropTypes.Requireable<string | number>;
        /**
         * 下拉菜单和选择器同宽
         */
        dropdownMatchSelectWidth: PropTypes.Requireable<boolean>;
        /**
         * 指定弹出层的父级，默认为 document.body
         */
        getPopupContainer: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 下拉展示发生变化时的 handler，参数：bool
         */
        onDropdownVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 选择时的 handler，参数：(value, option)
         */
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 外部控制：是否展开
         */
        open: PropTypes.Requireable<boolean>;
        /**
         * 选择框默认文字
         */
        placeholder: PropTypes.Requireable<any>;
        /**
         * 设置 placement
         */
        placement: PropTypes.Requireable<string>;
        /**
         * 设置右图标
         */
        rightIcon: PropTypes.Requireable<any>;
        /**
         * 搜索框默认文字
         */
        searchPlaceholder: PropTypes.Requireable<string>;
        /**
         * 是否需要内嵌搜索
         */
        searchable: PropTypes.Requireable<boolean>;
        /**
         * 设置尺寸，跟着 button 走
         */
        size: PropTypes.Requireable<string>;
        /**
         * 设置主题
         */
        theme: PropTypes.Requireable<string | null>;
        /**
         * 外部控制：当前选中项的值
         */
        value: PropTypes.Requireable<string | number>;
    };
    static defaultProps: ISelectProps;
    static getDerivedStateFromProps: ({ open, value }: ISelectProps) => ISelectState | null;
    locked: boolean;
    select: ISelect;
    search: HTMLInputElement;
    menu: JSX.Element;
    constructor(props: ISelectProps);
    saveSelect: (node: ISelect) => void;
    saveSearch: (node: HTMLInputElement) => void;
    onDropdownVisibleChange: (open: boolean) => void;
    onSelect: (value: React.ReactText, option: any) => void;
    handleDropdownRender: (menu: JSX.Element) => JSX.Element;
    handleSearch: (e?: React.ChangeEvent<HTMLInputElement> | undefined) => void;
    handleSearchKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    preventVisibleChange: () => void;
    render(): JSX.Element;
}
export default Select;
