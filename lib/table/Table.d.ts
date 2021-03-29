/**
 * Table 组件将不会修改成 FunctionComponent，
 * 因为考虑到之前在使用时存在不少通过 实例.table 的方法直接访问 <table /> 元素的用法。
 */
import * as React from "react";
import PropTypes from "prop-types";
import Column, { IColumnProps } from "./Column";
import Affix from "../affix";
import "./style";
interface IBaseObject {
    [key: string]: any;
}
interface IFixedColumnsInfo {
    width: number;
    dataIndex: string;
    fixed: "left" | "right";
    index: number;
    isLastLeft?: boolean;
    isFirstRight?: boolean;
    offset?: number;
}
export interface ITableProps<T extends IBaseObject> {
    [key: string]: any;
    /**
     * 统一地控制列水平靠齐方向
     */
    align?: null | "left" | "center" | "right";
    /**
     * 子节点
     */
    children?: any;
    /**
     * 以数组的方式传入 Columns，如果传入了此 Prop，则 Table 会忽略 children
     */
    columns?: IColumnProps<T>[] | null;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 控制整个 Table 的 Columns 能否调整宽度
     */
    columnsResizable?: boolean | null;
    /**
     * 数据源
     */
    dataSource?: T[];
    /**
     * 【展开行】默认展开的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    defaultExpandedRowKeys?: Array<React.ReactText> | null;
    /**
     * 【选择行】默认选中的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    defaultSelectedRowKeys?: Array<React.ReactText> | null;
    /**
     * 空数据源时显示的内容
     */
    emptyText?: React.ReactNode;
    /**
     * 【展开行】是否显示展开 icon，如果为 false，意味着
     * 1. 使用 expandOnRowClick 或者
     * 2. 需要在组件外自行调用组件方法完成展开功能（this.table.handleExpand(row.key)）。
     */
    expandIconVisible?: boolean;
    /**
     * 【展开行】是否在点击整行时触发展开收起
     * 此 prop 会在 .tr 上加入 onClick 事件，
     * 如果不希望单元格内 onClick 触发事件，请在那些事件中 stopPropagation。
     */
    expandOnRowClick?: boolean;
    /**
     * 【展开行】从外部控制，展开的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    expandedRowKeys?: Array<React.ReactText> | null;
    /**
     * 【展开行】展开行的内容
     */
    expandedRowRender?: (row: T, rowIndex: number) => React.ReactNode;
    /**
     * 设置每个单元格的类名：(row, col, rowIndex, colIndex) => (string)
     */
    getCellClassName?: (row: T, col: IBaseObject, rowIndex: number, colIndex: number) => string;
    /**
     * 设置每个单元格上的由组件规定的 prop，
     * 如 rowSpan colSpan，(row, col, rowIndex, colIndex) => ({})
     */
    getCellProps?: (row: T, col: IBaseObject, rowIndex: number, colIndex: number) => IBaseObject | void;
    /**
     * 设置每个单元格上的 style，(row, col, rowIndex, colIndex) => ({})
     */
    getCellStyle?: (row: T, col: IBaseObject, rowIndex: number, colIndex: number) => React.CSSProperties | void;
    /**
     * 设置 thead 的类名：() => (string)
     */
    getHeadClassName?: () => string;
    /**
     * 设置 thead 上的 style，() => ({})
     */
    getHeadStyle?: () => React.CSSProperties | void;
    /**
     * 设置每个 TH 的类名：(col, colIndex) => (string)
     */
    getHeadCellClassName?: (col: IBaseObject, colIndex: number) => string;
    /**
     * 设置每个 TH 上的 style，(col, colIndex) => ({})
     */
    getHeadCellStyle?: (col: IBaseObject, colIndex: number) => React.CSSProperties | void;
    /**
     * 设置每行的类名：(row, rowIndex) => (string)
     */
    getRowClassName?: (row: T, rowIndex: number) => string;
    /**
     * 设置每行的 style，(row, rowIndex) => ({})
     */
    getRowStyle?: (row: T, rowIndex: number) => React.CSSProperties | void;
    /**
     * 【选择行】设置每个 Checkbox/Radio 上的 prop (row, rowIndex) => ({})；
     * 可以在这里回传 disabled: true, 控制该行不能选择；请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    getSelectProps?: (row: T, rowIndex: number) => IBaseObject;
    /**
     * 是否需要表头固定到页面上
     */
    headerAffixed?: boolean;
    /**
     * 距离窗口顶部达到指定偏移量后触发表头固定
     */
    headerAffixedOffsetTop?: number;
    /**
     * 参考 <Affix /> 的 getTarget Prop
     */
    headerAffixGetTarget?: (() => HTMLElement) | null;
    /**
     * 加重头部，开启之后表头将会加粗 + 背景
     */
    headerEmphasized?: boolean;
    /**
     * 指定高度以实现表格内滚动，此 prop 与 prop headerAffixed 互斥。
     */
    height?: number | null;
    /**
     * 是否加载中
     */
    loading?: boolean;
    /**
     * 【展开行】展开每行时的 handler，Table 也以此 prop 作为开启展开功能的判断；
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    onExpandChange?: ((keys: Array<React.ReactText>) => void) | null;
    /**
     * 每行的 click handler，(row, i, e) => {}
     */
    onRowClick?: ((row: T, rowIndex: number, e?: React.MouseEvent<HTMLDivElement>) => void) | null;
    /**
     * 每行的 mouseEnter handler，(row, i, e) => {}
     */
    onRowMouseEnter?: ((row: T, rowIndex: number, e?: React.MouseEvent<HTMLDivElement>) => void) | null;
    /**
     * 每行的 mouseLeave handler，(row, i, e) => {}
     */
    onRowMouseLeave?: ((row: T, rowIndex: number, e?: React.MouseEvent<HTMLDivElement>) => void) | null;
    /**
     * 【选择行】选择每行时的 handler，Table 也以此 prop 作为开启选择功能的判断；
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    onSelectChange?: ((keys: Array<React.ReactText>) => void) | null;
    /**
     * Table 滚动时的 handler
     */
    onScroll?: ((e: React.UIEvent<HTMLDivElement>) => void) | null;
    /**
     * 【选择行】多 / 单选；请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    selectMultiple?: boolean;
    /**
     * 【选择行】是否在点击整行时触发选择。
     * 此 prop 会在 .tr 上加入 onClick 事件，
     * 如果不希望单元格内 onClick 触发事件，请在那些事件中 stopPropagation。
     */
    selectOnRowClick?: boolean;
    /**
     * 【选择行】从外部控制，选中的行的 key，请在传入前进行合法校验，
     * 因为 Table 对此 Prop 没有过多校验；
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    selectedRowKeys?: Array<React.ReactText> | null;
    /**
     * 设置尺寸，注意：尺寸仅控制行与列间距，与字体大小不绑定。
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 统一地控制列垂直靠齐方向
     */
    verticalAlign?: "top" | "center" | "bottom";
    /**
     * 虚拟列表的 Props，请参考 https://www.npmjs.com/package/rc-virtual-list
     */
    virtualListProps?: IBaseObject;
    /**
     * 虚拟列表的样式，请在这里指定宽度，默认将会有 500 px 宽度
     */
    virtualListStyle?: React.CSSProperties;
    /**
     * 是否开启虚拟滚动，此 Prop 请配合 height Prop 同时使用，用于处理大数据量下的虚拟内滚动；
     * 此功能的实际用例较少，如果有任何问题请及时反馈
     */
    virtualScroll?: boolean;
}
export interface ITableState {
    affixedTop: boolean;
    affixedBottom: boolean;
    children: React.ReactNode;
    combinedCellsInfo: IBaseObject[];
    expandedRowKeys: Array<React.ReactText>;
    fixedColumnsInfos: Array<IFixedColumnsInfo>;
    mainTableStyle: React.CSSProperties;
    isMainTableOverflowX: boolean;
    isMainTableOverflowY: boolean;
    isResizerShow: boolean;
    currentlyResizing: IBaseObject;
    resized: IBaseObject[];
    selectedRowKeys: Array<React.ReactText>;
}
/**
 * 表格是一种格式化信息的展示形式。通常服务于大量数据浏览、管理场景。
 */
declare class Table<T extends IBaseObject> extends React.Component<ITableProps<T>, ITableState> {
    static Column: typeof Column;
    static propTypes: {
        /**
         * 统一地控制列水平靠齐方向
         */
        align: PropTypes.Requireable<string | null>;
        /**
         * 子节点
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 附加类名
         */
        className: PropTypes.Requireable<string>;
        /**
         * 以数组的方式传入 Columns，如果传入了此 Prop，则 Table 会忽略 children
         */
        columns: PropTypes.Requireable<any[]>;
        /**
         * 控制整个 Table 的 Columns 能否调整宽度
         */
        columnsResizable: PropTypes.Requireable<boolean>;
        /**
         * 数据源
         */
        dataSource: PropTypes.Requireable<any[]>;
        /**
         * 【展开行】默认展开的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
         * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
         */
        defaultExpandedRowKeys: PropTypes.Requireable<any[]>;
        /**
         * 【选择行】默认选中的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
         * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
         */
        defaultSelectedRowKeys: PropTypes.Requireable<any[]>;
        /**
         * 空数据源时显示的内容
         */
        emptyText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 【展开行】是否显示展开 icon，如果为 false，意味着
         * 1. 使用 expandOnRowClick 或者
         * 2. 需要在组件外自行调用组件方法完成展开功能（this.table.handleExpand(row.key)）。
         */
        expandIconVisible: PropTypes.Requireable<boolean>;
        /**
         * 【展开行】是否在点击整行时触发展开收起
         * 此 prop 会在 .tr 上加入 onClick 事件，
         * 如果不希望单元格内 onClick 触发事件，请在那些事件中 stopPropagation。
         */
        expandOnRowClick: PropTypes.Requireable<boolean>;
        /**
         * 【展开行】从外部控制，展开的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
         * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
         */
        expandedRowKeys: PropTypes.Requireable<any[]>;
        /**
         * 【展开行】展开行的内容
         */
        expandedRowRender: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置每个单元格的类名：(row, col, rowIndex, colIndex) => (string)
         */
        getCellClassName: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置每个单元格上的由组件规定的 prop，
         * 如 rowSpan colSpan，(row, col, rowIndex, colIndex) => ({})
         */
        getCellProps: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置每个单元格上的 style，(row, col, rowIndex, colIndex) => ({})
         */
        getCellStyle: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置 thead 的类名：position => (string)
         */
        getHeadClassName: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置 thead 上的 style，position => ({})
         */
        getHeadStyle: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置每个 TH 的类名：(col, colIndex) => (string)
         */
        getHeadCellClassName: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置每个 TH 上的 style，(col, colIndex) => ({})
         */
        getHeadCellStyle: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置每行的类名：(row, rowIndex) => (string)
         */
        getRowClassName: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置每行的 style，(row, rowIndex) => ({})
         */
        getRowStyle: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 【选择行】设置每个 Checkbox/Radio 上的 prop (row, rowIndex) => ({})；
         * 可以在这里回传 disabled: true, 控制该行不能选择；请确保 dataSource 的对象含有属性 key，及其唯一的值。
         */
        getSelectProps: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 是否需要表头固定到页面上
         */
        headerAffixed: PropTypes.Requireable<boolean>;
        /**
         * 距离窗口顶部达到指定偏移量后触发表头固定
         */
        headerAffixedOffsetTop: PropTypes.Requireable<number>;
        /**
         * 参考 <Affix /> 的 getTarget Prop
         */
        headerAffixGetTarget: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 加重头部，开启之后表头将会加粗 + 背景
         */
        headerEmphasized: PropTypes.Requireable<boolean>;
        /**
         * 指定高度以实现表格内滚动，此 prop 与 prop headerAffixed 互斥。
         */
        height: (props: ITableProps<IBaseObject>) => Error | null;
        /**
         * 是否加载中
         */
        loading: PropTypes.Requireable<boolean>;
        /**
         * 【展开行】展开每行时的 handler，Table 也以此 prop 作为开启展开功能的判断；
         * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
         */
        onExpandChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 每行的 click handler，(row, i, e) => {}
         */
        onRowClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 每行的 mouseEnter handler，(row, i, e) => {}
         */
        onRowMouseEnter: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 每行的 mouseLeave handler，(row, i, e) => {}
         */
        onRowMouseLeave: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 【选择行】选择每行时的 handler，Table 也以此 prop 作为开启选择功能的判断；
         * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
         */
        onSelectChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Table 滚动时的 handler
         */
        onScroll: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 【选择行】多 / 单选；请确保 dataSource 的对象含有属性 key，及其唯一的值。
         */
        selectMultiple: PropTypes.Requireable<boolean>;
        /**
         * 【选择行】是否在点击整行时触发选择。
         * 此 prop 会在 .tr 上加入 onClick 事件，
         * 如果不希望单元格内 onClick 触发事件，请在那些事件中 stopPropagation。
         */
        selectOnRowClick: PropTypes.Requireable<boolean>;
        /**
         * 【选择行】从外部控制，选中的行的 key，请在传入前进行合法校验，
         * 因为 Table 对此 Prop 没有过多校验；
         * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
         */
        selectedRowKeys: PropTypes.Requireable<any[]>;
        /**
         * 设置尺寸，注意：尺寸仅控制行与列间距，与字体大小不绑定。
         */
        size: PropTypes.Requireable<string>;
        /**
         * 统一地控制列垂直靠齐方向
         */
        verticalAlign: PropTypes.Requireable<string | null>;
        /**
         * 虚拟列表的 Props，请参考 https://www.npmjs.com/package/rc-virtual-list
         */
        virtualListProps: PropTypes.Requireable<object>;
        /**
         * 虚拟列表的样式，请在这里指定宽度，默认将会有 500 px 宽度
         */
        virtualListStyle: PropTypes.Requireable<object>;
        /**
         * 是否开启虚拟滚动，此 Prop 请配合 height Prop 同时使用，用于处理大数据量下的虚拟内滚动；
         * 此功能的实际用例较少，如果有任何问题请及时反馈
         */
        virtualScroll: PropTypes.Requireable<boolean>;
    };
    static defaultProps: ITableProps<IBaseObject>;
    static getDerivedStateFromProps: ({ children, columns, expandedRowKeys, selectedRowKeys, }: ITableProps<IBaseObject>) => Partial<ITableState> | null;
    combinedCellsInfo: IBaseObject[];
    affixHeader: Affix;
    affixScrollbar: Affix;
    mainTable: HTMLDivElement;
    mainTableBody: HTMLDivElement;
    mainThead: HTMLDivElement;
    wrapper: HTMLDivElement;
    private debouncedWindowResize;
    private resizeEvent;
    private columnManager;
    constructor(props: ITableProps<T>);
    shouldComponentUpdate: (nextProps: ITableProps<T>, nextState: ITableState) => boolean;
    componentDidMount: () => void;
    componentDidUpdate: ({ dataSource: dataSourceOld, getCellProps: getCellPropsOld, }: ITableProps<T>) => void;
    componentWillUnmount: () => void;
    resizeColumnStart: (e: React.MouseEvent<HTMLDivElement>, col: IColumnProps<T>) => void;
    resizeColumnMoving: (e: MouseEvent) => void;
    resizeColumnEnd: (e: MouseEvent) => void;
    handleWindowResize: () => void;
    handleMainTableScroll: (e?: React.UIEvent<HTMLDivElement, UIEvent> | undefined) => void;
    syncTableScrollPosition: (value: number) => void;
    handleRowClick: (row: T, i: number, e: React.MouseEvent<HTMLDivElement>) => void;
    handleThResize: (width: number, dataIndex: string, index: number, fixedPosition?: boolean | "left" | "right" | undefined) => void;
    handleTheadMouseEnter: () => void;
    handleTheadMouseLeave: () => void;
    /**
     * 展开行
     */
    handleExpand: (key: React.ReactText) => void;
    /**
     * 选择行
     */
    handleSelect: (key: React.ReactText, checked: boolean) => void;
    /**
     * 选择行全选操作
     */
    handleSelectAll: (checked: boolean) => void;
    /**
     * 判断是否已全部选择
     */
    hasSelectedAll: () => boolean;
    getAvailableRowsKeys: () => React.ReactText[];
    generateTable: () => (false | JSX.Element | undefined)[];
    generateThCell: (col: IColumnProps<T>, options?: IBaseObject | undefined) => JSX.Element;
    generateTbodyCell: (row: T, cell: IColumnProps<T>, rowIndex: number, cellIndex: number) => JSX.Element;
    getCombinedCellStyle: (_: IBaseObject, __: IColumnProps<T>, rowIndex: number, colIndex: number, rowSpan: number, colSpan: number) => React.CSSProperties;
    saveRef: (name?: "affixHeader" | "affixScrollbar" | "mainTable" | "mainTableBody" | "mainThead" | "wrapper" | undefined) => (node: any) => void;
    render(): JSX.Element;
}
export default Table;
