/**
 * adui1.0： TreeNode 不再实际使用，在 TreeSelect 中会进行 children 遍历 convertChildrenToData
 * 文件暂时保存是因 Site 需生成 API 表格。
 */
import * as React from "react";
import PropTypes from "prop-types";
import { IPopoverProps } from "../popover";
/**
 * 树形选择节点
 */
export interface ITreeNodeProps {
    [key: string]: any;
    children?: React.ReactNode;
    disabled?: boolean;
    popover?: React.ReactNode;
    popoverProps?: IPopoverProps;
    title?: React.ReactNode;
    value?: string | null;
}
export default class TreeNode extends React.Component<ITreeNodeProps> {
    static isTreeNode: number;
    static propTypes: {
        /**
         * 子节点
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 是否禁用
         */
        disabled: PropTypes.Requireable<boolean>;
        /**
         * 增加 popover
         */
        popover: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * popover props，该对象会传递给 <Popover />
         */
        popoverProps: PropTypes.Requireable<object>;
        /**
         * 树节点显示的内容
         */
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 默认根据此属性值进行筛选
         */
        value: PropTypes.Requireable<string>;
    };
    static defaultProps: ITreeNodeProps;
    render(): JSX.Element;
}
