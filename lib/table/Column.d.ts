import * as React from "react";
import PropTypes from "prop-types";
import { IPopoverProps } from "../popover";
interface IBaseObject {
    [key: string]: any;
}
export interface IColumnProps<T extends IBaseObject> {
    /**
     * 水平靠齐方向
     */
    align?: null | "left" | "center" | "right";
    /**
     * 子节点
     */
    children?: React.ReactNode[];
    /**
     * 索引
     */
    dataIndex: string;
    /**
     * 是否多选
     */
    filterMultiple?: boolean;
    /**
     * 筛选 Popover props，会将此对象透传给 <Popover />
     */
    filterPopoverProps?: IPopoverProps;
    /**
     * 可以从外部传入筛选的值，null, [], 都会识别为未筛选状态
     */
    filteredValue?: Array<React.ReactText> | null;
    /**
     * 从外部控制 filter Popover 的显示
     */
    filterVisible?: boolean | null;
    /**
     * 筛选项，格式：[{ text: "朋友圈广告", value: '2' }]
     */
    filters?: Array<{
        text: string;
        value: React.ReactText;
    }> | null;
    /**
     * 固定设置
     */
    fixed?: true | false | "left" | "right";
    /**
     * 设置该列每个单元格上的 style，(row, rowIndex) => ({})
     */
    getCellStyle?: (row: T, rowIndex: number) => React.CSSProperties | void;
    /**
     * 筛选时的 handler，筛选和排序功能不能同时使用
     */
    onFilter?: ((value: Array<React.ReactText>) => void) | null;
    /**
     * 筛选 popup visible 变化时的 handler，参数 (bool, col)
     */
    onFilterVisibleChange?: ((visible: boolean) => {}) | null;
    /**
     * 排序时的 handler，筛选和排序功能不能同时使用
     */
    onSort?: ((order: "asc" | "desc" | "") => void) | null;
    /**
     * 在列头上增加 popover。这样的需求越来越常规，样式上内置到 Table 内做规范，作为 prop 是有必要的。
     */
    popover?: React.ReactNode;
    /**
     * 如果有 render，则 render (row, col, rowIndex, colIndex)，否则取 dataIndex。
     */
    render?: (row: T, col: IBaseObject, rowIndex: number, colIndex: number) => React.ReactNode;
    /**
     * 是否允许调整宽度，默认 true
     */
    resizable?: boolean;
    /**
     * 可以从外部控制排序方式
     */
    sortOrder?: null | "" | "asc" | "desc";
    /**
     * 列头显示的内容
     */
    title: React.ReactNode;
    /**
     * 垂直靠齐方向
     */
    verticalAlign?: "top" | "center" | "bottom";
    /**
     * 列的固定宽度
     */
    width?: React.ReactText;
}
/**
 * Column.js 的作用仅是约束 PropTypes。
 * 每一列的 props 在 ColumnManager.js 中得到处理。
 */
declare function Column<T extends IBaseObject>(props: IColumnProps<T>): JSX.Element;
declare namespace Column {
    var propTypes: {
        /**
         * 水平靠齐方向
         */
        align: PropTypes.Requireable<string | null>;
        /**
         * 索引
         */
        dataIndex: PropTypes.Requireable<string>;
        /**
         * 是否多选
         */
        filterMultiple: PropTypes.Requireable<boolean>;
        /**
         * 筛选 Popover props，会将此对象透传给 <Popover />
         */
        filterPopoverProps: PropTypes.Requireable<object>;
        /**
         * 可以从外部传入筛选的值，null, [], 都会识别为未筛选状态
         */
        filteredValue: PropTypes.Requireable<any[]>;
        /**
         * 从外部控制 filter Popover 的显示
         */
        filterVisible: PropTypes.Requireable<boolean>;
        /**
         * 筛选项，格式：[{ text: "朋友圈广告", value: '2' }]
         */
        filters: PropTypes.Requireable<any[]>;
        /**
         * 固定设置
         */
        fixed: PropTypes.Requireable<string | boolean | null>;
        /**
         * 设置该列每个单元格上的 style，(row, rowIndex) => ({})
         */
        getCellStyle: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 筛选时的 handler，筛选和排序功能不能同时使用
         */
        onFilter: (props: IColumnProps<IBaseObject>) => Error | null;
        /**
         * 筛选 popup visible 变化时的 handler，参数 (bool, col)
         */
        onFilterVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 排序时的 handler，筛选和排序功能不能同时使用
         */
        onSort: (props: IColumnProps<IBaseObject>) => Error | null;
        /**
         * 在列头上增加 popover。这样的需求越来越常规，样式上内置到 Table 内做规范，作为 prop 是有必要的。
         */
        popover: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 如果有 render，则 render (row, col, rowIndex, colIndex)，否则取 dataIndex。
         */
        render: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 是否允许调整宽度，默认 true
         */
        resizable: PropTypes.Requireable<boolean>;
        /**
         * 可以从外部控制排序方式
         */
        sortOrder: PropTypes.Requireable<string | null>;
        /**
         * 列头显示的内容
         */
        title: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        /**
         * 垂直靠齐方向
         */
        verticalAlign: PropTypes.Requireable<string | null>;
        /**
         * 列的固定宽度
         */
        width: (props: IColumnProps<IBaseObject>) => Error | null;
    };
    var defaultProps: {
        align: null;
        dataIndex: null;
        filterMultiple: boolean;
        filterPopoverProps: {};
        filteredValue: null;
        filterVisible: null;
        filters: null;
        fixed: null;
        getCellStyle: () => void;
        onFilter: null;
        onFilterVisibleChange: () => void;
        onSort: null;
        popover: null;
        render: null;
        resizable: null;
        sortOrder: null;
        verticalAlign: null;
        width: null;
    };
}
export default Column;
