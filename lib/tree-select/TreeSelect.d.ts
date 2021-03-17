import * as React from "react";
import RcTreeSelect, { TreeNode } from "rc-tree-select";
import PropTypes from "prop-types";
import { Placement } from "../pop-trigger";
import "./style";
export declare type TreeNodeValue = string[] | number[] | null;
export interface ITreeNode {
    value: string;
    label: string;
    key: string;
    disabled: boolean;
}
export interface ITreeSelectProps {
    [key: string]: any;
    autoClearSearchValue?: boolean;
    className?: string;
    defaultValue?: TreeNodeValue;
    disabled?: boolean;
    getPopupContainer?: null | ((node: HTMLElement) => HTMLElement);
    maxTagCount?: null | number;
    multiple?: boolean;
    onChange?: (value: TreeNodeValue, titleList: React.ReactNode[]) => void;
    onDropdownVisibleChange?: (visible: boolean) => void;
    onSearch?: (value: string) => void;
    placement?: Placement;
    resultRender?: null | ((values: ITreeNode[]) => JSX.Element);
    resultVisible?: boolean;
    showCheckedStrategy?: "show-all" | "show-child" | "show-parent";
    value?: TreeNodeValue;
}
export interface ITreeSelectState {
    value?: TreeNodeValue;
}
export interface ITreeNodeProps {
    [key: string]: any;
    className?: string;
    checkable?: boolean;
    disabled?: boolean;
    disableCheckbox?: boolean;
    title?: string | React.ReactNode;
    key?: string;
    eventKey?: string;
    isLeaf?: boolean;
    checked?: boolean;
    expanded?: boolean;
    loading?: boolean;
    selected?: boolean;
    selectable?: boolean;
    children?: React.ReactNode;
}
/**
 * 树形选择
 */
declare class TreeSelect extends React.Component<ITreeSelectProps, ITreeSelectState> {
    static propTypes: {
        /**
         * 值被选择后，是否需要清空搜索框
         */
        autoClearSearchValue: PropTypes.Requireable<boolean>;
        /**
         * 附加类名
         */
        className: PropTypes.Requireable<string>;
        /**
         * 默认选中的 key
         */
        defaultValue: PropTypes.Requireable<string | any[]>;
        /**
         * 是否禁用
         */
        disabled: PropTypes.Requireable<boolean>;
        /**
         * 指定弹出层的父级，默认为 document.body
         */
        getPopupContainer: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 最多显示多少个 tag，如果超过了则以收起的形式出现
         */
        maxTagCount: PropTypes.Requireable<number>;
        /**
         * 是否多选模式
         */
        multiple: PropTypes.Requireable<boolean>;
        /**
         * 值变化时的回调，参数: value
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 下拉 visible 变化时的回调，参数: boolean
         */
        onDropdownVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 搜索时的回调，参数: value
         */
        onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置弹出位置
         */
        placement: PropTypes.Requireable<string>;
        /**
         * 设置输入框的默认内容
         */
        placeholder: PropTypes.Requireable<string>;
        /**
         * 设置自定义的结果渲染
         */
        resultRender: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 输入框内的标签是否显示，此 Prop 用于想要将结果区展示在别的地方的需求
         */
        resultVisible: PropTypes.Requireable<boolean>;
        /**
         * 定制树形选择器的icon
         */
        rightIcon: PropTypes.Requireable<string>;
        /**
         * 定义选中项回填的方式：
         * 1. show-all：显示包括父节点的所有选中节点；
         * 2. show-parent：只显示父节点；
         * 3. show-child：只显示子节点。默认值：show-parent
         */
        showCheckedStrategy: PropTypes.Requireable<string>;
        /**
         * 外部控制：选中的 key
         */
        value: PropTypes.Requireable<string | any[]>;
    };
    static defaultProps: ITreeSelectProps;
    static getDerivedStateFromProps: ({ value }: ITreeSelectProps) => {
        value: string[] | number[] | undefined;
    } | null;
    static TreeNode: typeof TreeNode;
    select: typeof RcTreeSelect;
    wrapper: HTMLDivElement;
    constructor(props: ITreeSelectProps);
    shouldComponentUpdate: (nextProps: ITreeSelectProps, nextState: ITreeSelectState) => boolean;
    saveSelect: (node: React.ReactNode) => void;
    saveWrapper: (node: HTMLDivElement) => void;
    renderSwitcherIcon: ({ isLeaf, loading }: ITreeNodeProps) => JSX.Element | null;
    handleChange: (value: TreeNodeValue, titleList: React.ReactNode[]) => void;
    handleSearch: (val: string) => void;
    filterTreeNode: (input: string, treeNode: any) => boolean;
    getMaxTagCount: () => 0 | null;
    getMaxTagPlaceholder: (nodes: ITreeNode[]) => JSX.Element | null;
    listenInputChange: (e: any) => void;
    componentDidMount: () => void;
    componentDidUpdate: () => void;
    render(): JSX.Element;
}
export default TreeSelect;
