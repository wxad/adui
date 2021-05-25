/* eslint-disable max-len */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/**
 * Table 组件将不会修改成 FunctionComponent，
 * 因为考虑到之前在使用时存在不少通过 实例.table 的方法直接访问 <table /> 元素的用法。
 */
import * as React from "react"
import PropTypes from "prop-types"
import Animate from "rc-animate"
import shallowEqual from "shallowequal"
import addEventListener from "rc-util/lib/Dom/addEventListener"
import List from "rc-virtual-list"
import { debounce } from "debounce"
import classNames from "classnames"
import omit from "../_util/omit"
import Column, { IColumnProps } from "./Column"
import Affix from "../affix"
import Checkbox from "../checkbox"
import Icon from "../icon"
import Popover from "../popover"
import Radio from "../radio"
import ResizeObserver from "../resize-observer"
import TableSort from "./TableSort"
import TableFilter from "./TableFilter"
import ColumnManager from "./ColumnManager"
import "./style"

interface IBaseObject {
  [key: string]: any
}

interface IFixedColumnsInfo {
  width: number
  dataIndex: string
  fixed: "left" | "right"
  index: number
  isLastLeft?: boolean
  isFirstRight?: boolean
  offset?: number
}

/* eslint-disable no-nested-ternary */
const noop = () => {}
const prefix = "adui-table"
const TD_MIN_WIDTH = 100
const SELECT_TD_WIDTH = 50
const SELECT_AND_EXPAND_TD_WIDTH = 80
const TD_HEIGHT = {
  large: 60,
  medium: 50,
  mini: 40,
  small: 40,
}
const HORIZONTAL_ALIGN = {
  center: "center" as "center",
  left: "flex-start" as "flex-start",
  right: "flex-end" as "flex-end",
}
const VERTICAL_ALIGN = {
  bottom: "flex-end" as "flex-end",
  center: "center" as "center",
  top: "flex-start" as "flex-start",
}
const isFixedLeft = (col: IBaseObject): boolean =>
  col.fixed === "left" || col.fixed === true
const isFixedRight = (col: IBaseObject): boolean => col.fixed === "right"

export interface ITableProps<T extends IBaseObject = IBaseObject> {
  [key: string]: any
  /**
   * 统一地控制列水平靠齐方向
   */
  align?: null | "left" | "center" | "right"
  /**
   * 子节点
   */
  children?: any
  /**
   * 以数组的方式传入 Columns，如果传入了此 Prop，则 Table 会忽略 children
   */
  columns?: IColumnProps<T>[] | null
  /**
   * 附加类名
   */
  className?: string
  /**
   * 控制整个 Table 的 Columns 能否调整宽度
   */
  columnsResizable?: boolean | null
  /**
   * 数据源
   */
  dataSource?: T[]
  /**
   * 【展开行】默认展开的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
   * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
   */
  defaultExpandedRowKeys?: Array<React.ReactText> | null
  /**
   * 【选择行】默认选中的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
   * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
   */
  defaultSelectedRowKeys?: Array<React.ReactText> | null
  /**
   * 空数据源时显示的内容
   */
  emptyText?: React.ReactNode
  /**
   * 【展开行】是否显示展开 icon，如果为 false，意味着
   * 1. 使用 expandOnRowClick 或者
   * 2. 需要在组件外自行调用组件方法完成展开功能（this.table.handleExpand(row.key)）。
   */
  expandIconVisible?: boolean
  /**
   * 【展开行】是否在点击整行时触发展开收起
   * 此 prop 会在 .tr 上加入 onClick 事件，
   * 如果不希望单元格内 onClick 触发事件，请在那些事件中 stopPropagation。
   */
  expandOnRowClick?: boolean
  /**
   * 【展开行】从外部控制，展开的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
   * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
   */
  expandedRowKeys?: Array<React.ReactText> | null
  /**
   * 【展开行】展开行的内容
   */
  expandedRowRender?: (row: T, rowIndex: number) => React.ReactNode
  /**
   * 设置每个单元格的类名：(row, col, rowIndex, colIndex) => (string)
   */
  getCellClassName?: (
    row: T,
    col: IBaseObject,
    rowIndex: number,
    colIndex: number
  ) => string
  /**
   * 设置每个单元格上的由组件规定的 prop，
   * 如 rowSpan colSpan，(row, col, rowIndex, colIndex) => ({})
   */
  getCellProps?: (
    row: T,
    col: IBaseObject,
    rowIndex: number,
    colIndex: number
  ) => IBaseObject | void
  /**
   * 设置每个单元格上的 style，(row, col, rowIndex, colIndex) => ({})
   */
  getCellStyle?: (
    row: T,
    col: IBaseObject,
    rowIndex: number,
    colIndex: number
  ) => React.CSSProperties | void
  /**
   * 设置 thead 的类名：() => (string)
   */
  getHeadClassName?: () => string
  /**
   * 设置 thead 上的 style，() => ({})
   */
  getHeadStyle?: () => React.CSSProperties | void
  /**
   * 设置每个 TH 的类名：(col, colIndex) => (string)
   */
  getHeadCellClassName?: (col: IBaseObject, colIndex: number) => string
  /**
   * 设置每个 TH 上的 style，(col, colIndex) => ({})
   */
  getHeadCellStyle?: (
    col: IBaseObject,
    colIndex: number
  ) => React.CSSProperties | void
  /**
   * 设置每行的类名：(row, rowIndex) => (string)
   */
  getRowClassName?: (row: T, rowIndex: number) => string
  /**
   * 设置每行的 style，(row, rowIndex) => ({})
   */
  getRowStyle?: (row: T, rowIndex: number) => React.CSSProperties | void
  /**
   * 【选择行】设置每个 Checkbox/Radio 上的 prop (row, rowIndex) => ({})；
   * 可以在这里回传 disabled: true, 控制该行不能选择；请确保 dataSource 的对象含有属性 key，及其唯一的值。
   */
  getSelectProps?: (row: T, rowIndex: number) => IBaseObject
  /**
   * 是否需要表头固定到页面上
   */
  headerAffixed?: boolean
  /**
   * 距离窗口顶部达到指定偏移量后触发表头固定
   */
  headerAffixedOffsetTop?: number
  /**
   * 参考 <Affix /> 的 getTarget Prop
   */
  headerAffixGetTarget?: (() => HTMLElement) | null
  /**
   * 加重头部，开启之后表头将会加粗 + 背景
   */
  headerEmphasized?: boolean
  /**
   * 指定高度以实现表格内滚动，此 prop 与 prop headerAffixed 互斥。
   */
  height?: number | null
  /**
   * 是否加载中
   */
  loading?: boolean
  /**
   * 【展开行】展开每行时的 handler，Table 也以此 prop 作为开启展开功能的判断；
   * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
   */
  onExpandChange?: ((keys: Array<React.ReactText>) => void) | null
  /**
   * 每行的 click handler，(row, i, e) => {}
   */
  onRowClick?:
    | ((row: T, rowIndex: number, e?: React.MouseEvent<HTMLDivElement>) => void)
    | null
  /**
   * 每行的 mouseEnter handler，(row, i, e) => {}
   */
  onRowMouseEnter?:
    | ((row: T, rowIndex: number, e?: React.MouseEvent<HTMLDivElement>) => void)
    | null
  /**
   * 每行的 mouseLeave handler，(row, i, e) => {}
   */
  onRowMouseLeave?:
    | ((row: T, rowIndex: number, e?: React.MouseEvent<HTMLDivElement>) => void)
    | null
  /**
   * 【选择行】选择每行时的 handler，Table 也以此 prop 作为开启选择功能的判断；
   * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
   */
  onSelectChange?: ((keys: Array<React.ReactText>) => void) | null
  /**
   * Table 滚动时的 handler
   */
  onScroll?: ((e: React.UIEvent<HTMLDivElement>) => void) | null
  /**
   * 【选择行】多 / 单选；请确保 dataSource 的对象含有属性 key，及其唯一的值。
   */
  selectMultiple?: boolean
  /**
   * 【选择行】是否在点击整行时触发选择。
   * 此 prop 会在 .tr 上加入 onClick 事件，
   * 如果不希望单元格内 onClick 触发事件，请在那些事件中 stopPropagation。
   */
  selectOnRowClick?: boolean
  /**
   * 【选择行】从外部控制，选中的行的 key，请在传入前进行合法校验，
   * 因为 Table 对此 Prop 没有过多校验；
   * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
   */
  selectedRowKeys?: Array<React.ReactText> | null
  /**
   * 设置尺寸，注意：尺寸仅控制行与列间距，与字体大小不绑定。
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 统一地控制列垂直靠齐方向
   */
  verticalAlign?: "top" | "center" | "bottom"
  /**
   * 虚拟列表的 Props，请参考 https://www.npmjs.com/package/rc-virtual-list
   */
  virtualListProps?: IBaseObject
  /**
   * 虚拟列表的样式，请在这里指定宽度，默认将会有 500 px 宽度
   */
  virtualListStyle?: React.CSSProperties
  /**
   * 是否开启虚拟滚动，此 Prop 请配合 height Prop 同时使用，用于处理大数据量下的虚拟内滚动；
   * 此功能的实际用例较少，如果有任何问题请及时反馈
   */
  virtualScroll?: boolean
}

export interface ITableState {
  affixedTop: boolean
  affixedBottom: boolean
  children: React.ReactNode
  combinedCellsInfo: IBaseObject[]
  expandedRowKeys: Array<React.ReactText>
  fixedColumnsInfos: Array<IFixedColumnsInfo>
  mainTableStyle: React.CSSProperties
  isMainTableOverflowX: boolean
  isMainTableOverflowY: boolean
  isResizerShow: boolean
  currentlyResizing: IBaseObject
  resized: IBaseObject[]
  selectedRowKeys: Array<React.ReactText>
}

/**
 * 表格是一种格式化信息的展示形式。通常服务于大量数据浏览、管理场景。
 */
class Table<T extends IBaseObject = IBaseObject> extends React.Component<
  ITableProps<T>,
  ITableState
> {
  public static Column: typeof Column = Column

  public static propTypes = {
    /**
     * 统一地控制列水平靠齐方向
     */
    align: PropTypes.oneOf([null, "left", "center", "right"]),
    /**
     * 子节点
     */
    children: PropTypes.node,
    /**
     * 附加类名
     */
    className: PropTypes.string,
    /**
     * 以数组的方式传入 Columns，如果传入了此 Prop，则 Table 会忽略 children
     */
    columns: PropTypes.array,
    /**
     * 控制整个 Table 的 Columns 能否调整宽度
     */
    columnsResizable: PropTypes.bool,
    /**
     * 数据源
     */
    dataSource: PropTypes.array,
    /**
     * 【展开行】默认展开的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    defaultExpandedRowKeys: PropTypes.array,
    /**
     * 【选择行】默认选中的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    defaultSelectedRowKeys: PropTypes.array,
    /**
     * 空数据源时显示的内容
     */
    emptyText: PropTypes.node,
    /**
     * 【展开行】是否显示展开 icon，如果为 false，意味着
     * 1. 使用 expandOnRowClick 或者
     * 2. 需要在组件外自行调用组件方法完成展开功能（this.table.handleExpand(row.key)）。
     */
    expandIconVisible: PropTypes.bool,
    /**
     * 【展开行】是否在点击整行时触发展开收起
     * 此 prop 会在 .tr 上加入 onClick 事件，
     * 如果不希望单元格内 onClick 触发事件，请在那些事件中 stopPropagation。
     */
    expandOnRowClick: PropTypes.bool,
    /**
     * 【展开行】从外部控制，展开的行的 key，请在传入前进行合法校验，因为 Table 对此 Prop 没有过多校验
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    expandedRowKeys: PropTypes.array,
    /**
     * 【展开行】展开行的内容
     */
    expandedRowRender: PropTypes.func,
    /**
     * 设置每个单元格的类名：(row, col, rowIndex, colIndex) => (string)
     */
    getCellClassName: PropTypes.func,
    /**
     * 设置每个单元格上的由组件规定的 prop，
     * 如 rowSpan colSpan，(row, col, rowIndex, colIndex) => ({})
     */
    getCellProps: PropTypes.func,
    /**
     * 设置每个单元格上的 style，(row, col, rowIndex, colIndex) => ({})
     */
    getCellStyle: PropTypes.func,
    /**
     * 设置 thead 的类名：position => (string)
     */
    getHeadClassName: PropTypes.func,
    /**
     * 设置 thead 上的 style，position => ({})
     */
    getHeadStyle: PropTypes.func,
    /**
     * 设置每个 TH 的类名：(col, colIndex) => (string)
     */
    getHeadCellClassName: PropTypes.func,
    /**
     * 设置每个 TH 上的 style，(col, colIndex) => ({})
     */
    getHeadCellStyle: PropTypes.func,
    /**
     * 设置每行的类名：(row, rowIndex) => (string)
     */
    getRowClassName: PropTypes.func,
    /**
     * 设置每行的 style，(row, rowIndex) => ({})
     */
    getRowStyle: PropTypes.func,
    /**
     * 【选择行】设置每个 Checkbox/Radio 上的 prop (row, rowIndex) => ({})；
     * 可以在这里回传 disabled: true, 控制该行不能选择；请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    getSelectProps: PropTypes.func,
    /**
     * 是否需要表头固定到页面上
     */
    headerAffixed: PropTypes.bool,
    /**
     * 距离窗口顶部达到指定偏移量后触发表头固定
     */
    headerAffixedOffsetTop: PropTypes.number,
    /**
     * 参考 <Affix /> 的 getTarget Prop
     */
    headerAffixGetTarget: PropTypes.func,
    /**
     * 加重头部，开启之后表头将会加粗 + 背景
     */
    headerEmphasized: PropTypes.bool,
    /**
     * 指定高度以实现表格内滚动，此 prop 与 prop headerAffixed 互斥。
     */
    height: (props: ITableProps<IBaseObject>) => {
      const { headerAffixed, height } = props
      if (height) {
        if (typeof height !== "number") {
          return new Error(
            "Invalid prop `height` supplied to `Table`, expected `number`."
          )
        }
        if (headerAffixed && !!height) {
          return new Error(
            "Table.js 不允许同时使用 prop `headerAffixed` 与 `height`，不认可将这两者混用的需求场景。"
          )
        }
      }
      return null
    },
    /**
     * 是否加载中
     */
    loading: PropTypes.bool,
    /**
     * 【展开行】展开每行时的 handler，Table 也以此 prop 作为开启展开功能的判断；
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    onExpandChange: PropTypes.func,
    /**
     * 每行的 click handler，(row, i, e) => {}
     */
    onRowClick: PropTypes.func,
    /**
     * 每行的 mouseEnter handler，(row, i, e) => {}
     */
    onRowMouseEnter: PropTypes.func,
    /**
     * 每行的 mouseLeave handler，(row, i, e) => {}
     */
    onRowMouseLeave: PropTypes.func,
    /**
     * 【选择行】选择每行时的 handler，Table 也以此 prop 作为开启选择功能的判断；
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    onSelectChange: PropTypes.func,
    /**
     * Table 滚动时的 handler
     */
    onScroll: PropTypes.func,
    /**
     * 【选择行】多 / 单选；请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    selectMultiple: PropTypes.bool,
    /**
     * 【选择行】是否在点击整行时触发选择。
     * 此 prop 会在 .tr 上加入 onClick 事件，
     * 如果不希望单元格内 onClick 触发事件，请在那些事件中 stopPropagation。
     */
    selectOnRowClick: PropTypes.bool,
    /**
     * 【选择行】从外部控制，选中的行的 key，请在传入前进行合法校验，
     * 因为 Table 对此 Prop 没有过多校验；
     * 请确保 dataSource 的对象含有属性 key，及其唯一的值。
     */
    selectedRowKeys: PropTypes.array,
    /**
     * 设置尺寸，注意：尺寸仅控制行与列间距，与字体大小不绑定。
     */
    size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
    /**
     * 统一地控制列垂直靠齐方向
     */
    verticalAlign: PropTypes.oneOf([null, "top", "center", "bottom"]),
    /**
     * 虚拟列表的 Props，请参考 https://www.npmjs.com/package/rc-virtual-list
     */
    virtualListProps: PropTypes.object,
    /**
     * 虚拟列表的样式，请在这里指定宽度，默认将会有 500 px 宽度
     */
    virtualListStyle: PropTypes.object,
    /**
     * 是否开启虚拟滚动，此 Prop 请配合 height Prop 同时使用，用于处理大数据量下的虚拟内滚动；
     * 此功能的实际用例较少，如果有任何问题请及时反馈
     */
    virtualScroll: PropTypes.bool,
  }

  public static defaultProps: ITableProps<IBaseObject> = {
    align: null,
    children: "",
    className: undefined,
    columns: null,
    columnsResizable: null,
    dataSource: [],
    defaultExpandedRowKeys: null,
    defaultSelectedRowKeys: null,
    emptyText: "暂无数据",
    expandIconVisible: true,
    expandOnRowClick: false,
    expandedRowKeys: null,
    expandedRowRender: () => "",
    getCellClassName: () => "",
    getCellProps: noop,
    getCellStyle: noop,
    getHeadClassName: () => "",
    getHeadStyle: noop,
    getHeadCellClassName: () => "",
    getHeadCellStyle: noop,
    getRowClassName: () => "",
    getRowStyle: noop,
    getSelectProps: () => ({}),
    headerAffixed: false,
    headerAffixedOffsetTop: 0,
    headerAffixGetTarget: null,
    headerEmphasized: false,
    height: null,
    loading: false,
    onExpandChange: null,
    onRowClick: null,
    onRowMouseEnter: null,
    onRowMouseLeave: null,
    onSelectChange: null,
    onScroll: null,
    selectMultiple: true,
    selectOnRowClick: false,
    selectedRowKeys: null,
    size: "small",
    verticalAlign: undefined,
    virtualListProps: {},
    virtualListStyle: {},
    virtualScroll: false,
  }

  public static getDerivedStateFromProps = ({
    children,
    columns,
    expandedRowKeys,
    selectedRowKeys,
  }: ITableProps<IBaseObject>) => {
    const newState: Partial<ITableState> = {}
    if (children !== null || columns !== null) {
      newState.children = columns || children
    }
    if (expandedRowKeys !== null) {
      newState.expandedRowKeys = expandedRowKeys
    }
    if (selectedRowKeys !== null) {
      newState.selectedRowKeys = selectedRowKeys
    }
    return Object.keys(newState).length > 0 ? newState : null
  }

  public combinedCellsInfo: IBaseObject[] = []

  public affixHeader: Affix

  public affixScrollbar: Affix

  public mainTable: HTMLDivElement

  public mainTableBody: HTMLDivElement

  public mainThead: HTMLDivElement

  public wrapper: HTMLDivElement

  private debouncedWindowResize: any

  private resizeEvent: any

  private columnManager: any

  constructor(props: ITableProps<T>) {
    super(props)
    const {
      children,
      columns,
      defaultExpandedRowKeys,
      defaultSelectedRowKeys,
      expandedRowKeys: expandedRowKeysProp,
      selectedRowKeys: selectedRowKeysProp,
    } = props
    this.columnManager = new ColumnManager(columns || children)
    let selectedRowKeys: Array<React.ReactText> = []
    if (selectedRowKeysProp) {
      selectedRowKeys = selectedRowKeysProp
    } else if (defaultSelectedRowKeys) {
      selectedRowKeys = defaultSelectedRowKeys
    }
    let expandedRowKeys: Array<React.ReactText> = []
    if (expandedRowKeysProp) {
      expandedRowKeys = expandedRowKeysProp
    } else if (defaultExpandedRowKeys) {
      expandedRowKeys = defaultExpandedRowKeys
    }
    this.state = {
      affixedBottom: false,
      affixedTop: false,
      children: columns || children,
      combinedCellsInfo: [],
      currentlyResizing: {}, // 正在改变宽度的列的信息
      expandedRowKeys,
      fixedColumnsInfos: [],
      isMainTableOverflowX: false,
      isMainTableOverflowY: false,
      isResizerShow: false,
      mainTableStyle: {},
      resized: [], // 改变过宽度的所有列的数据
      selectedRowKeys,
    }
    this.debouncedWindowResize = debounce(this.handleWindowResize, 100)
  }

  public shouldComponentUpdate = (
    nextProps: ITableProps<T>,
    nextState: ITableState
  ) =>
    !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)

  public componentDidMount = () => {
    const {
      columnManager,
      combinedCellsInfo,
      debouncedWindowResize,
      props,
    } = this
    const { isAnyColumnsFixed } = columnManager
    const { headerAffixed, height } = props
    // 固定表头需要监听 resize 事件
    if (headerAffixed || height || isAnyColumnsFixed) {
      this.handleWindowResize()
      this.resizeEvent = addEventListener(
        window,
        "resize",
        debouncedWindowResize
      )
    }
    if (combinedCellsInfo.length) {
      this.setState({ combinedCellsInfo })
    }
  }

  public componentDidUpdate = ({
    dataSource: dataSourceOld,
    getCellProps: getCellPropsOld,
  }: ITableProps<T>) => {
    const { dataSource, getCellProps } = this.props
    /**
     * handleWindowResize 不应该只在 didmount 时执行
     * didUpdate 时也需要
     */
    if (!shallowEqual(dataSourceOld, dataSource)) {
      setTimeout(this.handleWindowResize, 0)
    }

    /**
     * 合并单元格需拿到真实的 dom 元素计算尺寸，因此这里需要 forceUpdate
     */
    if (!shallowEqual(getCellPropsOld, getCellProps) && getCellProps) {
      this.forceUpdate()
    }
  }

  public componentWillUnmount = () => {
    if (this.resizeEvent) {
      this.resizeEvent.remove()
    }
    if (this.debouncedWindowResize) {
      this.debouncedWindowResize.clear()
    }
  }

  public resizeColumnStart = (
    e: React.MouseEvent<HTMLDivElement>,
    col: IColumnProps<T>
  ) => {
    e.stopPropagation()
    document.body.style.cursor = "col-resize"
    this.setState({
      currentlyResizing: {
        col,
        dataIndex: col.dataIndex,
        parentWidth:
          e.currentTarget.parentElement &&
          e.currentTarget.parentElement.parentElement &&
          e.currentTarget.parentElement.parentElement.getBoundingClientRect()
            .width,
        startX: e.pageX,
      },
    })
    setTimeout(() => {
      window.addEventListener("mousemove", this.resizeColumnMoving)
      window.addEventListener("mouseup", this.resizeColumnEnd)
      window.addEventListener("mouseleave", this.resizeColumnEnd)
    }, 0)
  }

  public resizeColumnMoving = (e: MouseEvent) => {
    e.stopPropagation()
    const { resized, currentlyResizing } = this.state
    const { col, dataIndex, parentWidth, startX } = currentlyResizing
    /**
     * 13 代表字号；用 em 的方式计算宽度本身不够合理，这里 + 2，不然在 Safari 下空间会不够。
     */
    const baseWidth =
      Math.ceil(
        col.title.length > 4 ? col.title.length / 2 : col.title.length
      ) *
        13 +
      2
    const newResized = resized.filter((o) => o.dataIndex !== dataIndex)
    const newWidth = Math.max(
      Math.ceil(parentWidth + e.pageX - startX),
      !!col.onSort || !!col.onFilter ? baseWidth + 36 : baseWidth + 16
    )
    newResized.push({
      dataIndex,
      value: newWidth,
    })
    this.setState({
      resized: newResized,
    })
    this.debouncedWindowResize()
  }

  public resizeColumnEnd = (e: MouseEvent) => {
    const { mainTable } = this
    document.body.style.cursor = ""
    e.stopPropagation()
    window.removeEventListener("mousemove", this.resizeColumnMoving)
    window.removeEventListener("mouseup", this.resizeColumnEnd)
    window.removeEventListener("mouseleave", this.resizeColumnEnd)
    this.setState({
      currentlyResizing: {},
      isMainTableOverflowX:
        mainTable && mainTable.scrollWidth > mainTable.offsetWidth,
      isMainTableOverflowY:
        mainTable && mainTable.scrollHeight > mainTable.offsetHeight,
      isResizerShow: false,
    })
  }

  public handleWindowResize = () => {
    const { columnManager, mainTable, props } = this
    const { isAnyColumnsFixed } = columnManager
    const { headerAffixed, height } = props
    if ((headerAffixed || height || isAnyColumnsFixed) && mainTable) {
      const { mainTableStyle: oldStyle } = this.state
      const rect = mainTable.getBoundingClientRect()
      const mainTableStyle: Partial<React.CSSProperties> = {}
      mainTableStyle.left = rect.left
      mainTableStyle.width = rect.width
      if (!shallowEqual(mainTableStyle, oldStyle)) {
        this.setState({ mainTableStyle })
      }
      this.setState({
        isMainTableOverflowX:
          mainTable && mainTable.scrollWidth > mainTable.offsetWidth,
        isMainTableOverflowY:
          mainTable && mainTable.scrollHeight > mainTable.offsetHeight,
      })
    }
  }

  public handleMainTableScroll = (e?: React.UIEvent<HTMLDivElement>) => {
    const { affixHeader, mainTable } = this
    const { onScroll } = this.props
    const { affixedTop } = this.state

    if (onScroll && e) {
      // e 可能是 thead
      const target = e.target as HTMLDivElement
      if (target.getAttribute("role") === "table") {
        onScroll(e)
      }
    }

    if (affixedTop && affixHeader && mainTable && affixHeader.fixedNode) {
      affixHeader.fixedNode.scrollLeft = mainTable.scrollLeft
    }

    // 固定头的情况，需要同步固定滚动条和主 Table 滚动条
    this.syncTableScrollPosition(mainTable.scrollLeft)
  }

  public syncTableScrollPosition = (value: number) => {
    const { affixScrollbar, mainTable, mainThead } = this
    const { height } = this.props

    if (mainTable && affixScrollbar && affixScrollbar.fixedNode) {
      if (mainTable.scrollLeft !== value) {
        mainTable.scrollLeft = value
      }
      if (affixScrollbar.fixedNode.scrollLeft !== value) {
        affixScrollbar.fixedNode.scrollLeft = value
      }
    }

    // 如果设定了 prop height，并且存在横向滚动条，则要同步 thead 的滚动位置
    if (height && mainThead) {
      mainThead.scrollLeft = value
    }
  }

  public handleRowClick = (
    row: T,
    i: number,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const {
      expandOnRowClick,
      getSelectProps,
      onRowClick,
      selectOnRowClick,
    } = this.props
    const { selectedRowKeys } = this.state
    const { key } = row
    if (
      selectOnRowClick &&
      typeof key !== "undefined" &&
      !(
        getSelectProps &&
        getSelectProps(row, i) &&
        getSelectProps(row, i).disabled
      )
    ) {
      this.handleSelect(key, !selectedRowKeys.includes(key))
    }
    if (expandOnRowClick) {
      this.handleExpand(key)
    }
    if (onRowClick) {
      onRowClick(row, i, e)
    }
  }

  public handleThResize = (
    width: number,
    dataIndex: string,
    index: number,
    fixedPosition?: boolean | "left" | "right"
  ) => {
    const { getColumns } = this.columnManager
    let { fixedColumnsInfos } = this.state
    const columns = getColumns() as IColumnProps<T>[]
    /**
     * columns 变化后 fixedColumnsInfos 中可能存在已经移除的 column
     */
    fixedColumnsInfos = fixedColumnsInfos.filter((o) =>
      columns.find((p) => p.dataIndex === o.dataIndex)
    )
    const i = fixedColumnsInfos.findIndex((o) => o.dataIndex === dataIndex)
    // fixed 可能是 Boolean
    const fixed = fixedPosition === "right" ? "right" : "left"
    if (i > -1) {
      if (fixedColumnsInfos[i].width === width) {
        return
      }
      fixedColumnsInfos.splice(i, 1)
    }
    fixedColumnsInfos.push({ width, dataIndex, index, fixed })
    fixedColumnsInfos.sort((a, b) => a.index - b.index)

    const fixedColumnsInfosLeft = fixedColumnsInfos.filter(
      (o) => o.fixed === "left"
    )
    const fixedColumnsInfosRight = fixedColumnsInfos
      .filter((o) => o.fixed === "right")
      .sort((a, b) => b.index - a.index)

    fixedColumnsInfos.forEach((col) => {
      let colIndex
      if (col.fixed === "left") {
        colIndex = fixedColumnsInfosLeft.findIndex(
          (o) => o.dataIndex === col.dataIndex
        )
        if (colIndex === fixedColumnsInfosLeft.length - 1) {
          col.isLastLeft = true
        } else {
          col.isLastLeft = false
        }
        // 容错，不允许 slice(0, -1) 的危险操作
        col.offset =
          colIndex === -1
            ? 0
            : fixedColumnsInfosLeft
                .slice(0, colIndex)
                .reduce((acc, cur) => acc + cur.width, 0)
      } else {
        colIndex = fixedColumnsInfosRight.findIndex(
          (o) => o.dataIndex === col.dataIndex
        )
        if (colIndex === fixedColumnsInfosRight.length - 1) {
          col.isFirstRight = true
        } else {
          col.isFirstRight = false
        }
        // 容错，不允许 slice(0, -1) 的危险操作
        col.offset =
          colIndex === -1
            ? 0
            : fixedColumnsInfosRight
                .slice(0, colIndex)
                .reduce((acc, cur) => acc + cur.width, 0)
      }
    })
    this.setState({ fixedColumnsInfos }, this.forceUpdate)
  }

  public handleTheadMouseEnter = () => {
    const { isResizerShow } = this.state
    if (!isResizerShow) {
      this.setState({
        isResizerShow: true,
      })
    }
  }

  public handleTheadMouseLeave = () => {
    const { currentlyResizing } = this.state
    if (Object.keys(currentlyResizing).length === 0) {
      this.setState({
        isResizerShow: false,
      })
    }
  }

  /**
   * 展开行
   */
  public handleExpand = (key: React.ReactText) => {
    if (typeof key === "undefined") {
      return
    }
    const { expandedRowKeys: expandedRowKeysProp, onExpandChange } = this.props
    const { expandedRowKeys } = this.state
    const keys = [...expandedRowKeys]
    const index = keys.indexOf(key)
    if (index > -1) {
      keys.splice(index, 1)
    } else {
      keys.push(key)
    }
    if (expandedRowKeysProp === null) {
      this.setState({ expandedRowKeys: keys })
    }
    if (onExpandChange) {
      onExpandChange(keys)
    }
  }

  /**
   * 选择行
   */
  public handleSelect = (key: React.ReactText, checked: boolean) => {
    if (typeof key === "undefined") {
      return
    }
    const {
      onSelectChange,
      selectedRowKeys: selectedRowKeysProp,
      selectMultiple,
    } = this.props
    const { selectedRowKeys } = this.state
    let keys = [...selectedRowKeys]
    if (selectMultiple) {
      if (checked) {
        keys.push(key)
      } else {
        keys.splice(selectedRowKeys.indexOf(key), 1)
      }
    } else {
      keys = [key]
    }
    if (selectedRowKeysProp === null) {
      this.setState({
        selectedRowKeys: keys,
      })
    }
    if (onSelectChange) {
      onSelectChange(keys)
    }
  }

  /**
   * 选择行全选操作
   */
  public handleSelectAll = (checked: boolean) => {
    const { onSelectChange, selectedRowKeys: selectedRowKeysProp } = this.props
    const { selectedRowKeys } = this.state
    const keys = [...selectedRowKeys]
    const availableKeys = this.getAvailableRowsKeys()
    if (checked) {
      availableKeys.forEach((key) => {
        if (!selectedRowKeys.includes(key)) {
          keys.push(key)
        }
      })
    } else {
      // 不能直接清空数组，因为可能传入了与当前 dataSource 无关的 keys；
      // 也不能直接 splice，因为要检查是否 getSelectProps.disabled。
      selectedRowKeys.forEach((key) => {
        if (availableKeys.includes(key)) {
          keys.splice(keys.indexOf(key), 1)
        }
      })
    }
    if (selectedRowKeysProp === null) {
      this.setState({
        selectedRowKeys: keys,
      })
    }
    if (onSelectChange) {
      onSelectChange(keys)
    }
  }

  /**
   * 判断是否已全部选择
   */
  public hasSelectedAll = () => {
    const keys = this.getAvailableRowsKeys()
    const { dataSource } = this.props
    const { selectedRowKeys } = this.state
    if (
      dataSource &&
      dataSource.length &&
      keys.length &&
      keys.every((key) => selectedRowKeys.includes(key))
    ) {
      return true
    }
    return false
  }

  public getAvailableRowsKeys = () => {
    const { dataSource, getSelectProps } = this.props
    const keys: Array<React.ReactText> = []
    if (!dataSource) {
      return []
    }
    dataSource.forEach((row, i) => {
      const { key } = row
      if (
        typeof key !== "undefined" &&
        !(
          getSelectProps &&
          getSelectProps(row, i) &&
          getSelectProps(row, i).disabled
        )
      ) {
        keys.push(key)
      }
    })
    return keys
  }

  public generateTable = () => {
    const {
      dataSource,
      expandIconVisible,
      expandedRowRender,
      expandOnRowClick,
      getHeadClassName,
      getHeadStyle,
      getRowClassName,
      getRowStyle,
      getSelectProps,
      headerAffixed,
      headerAffixedOffsetTop,
      headerAffixGetTarget,
      height,
      onExpandChange,
      onRowMouseEnter,
      onRowMouseLeave,
      onSelectChange,
      selectMultiple,
      selectOnRowClick,
      size,
      verticalAlign,
      virtualListProps,
      virtualListStyle,
      virtualScroll,
    } = this.props

    const {
      affixedTop,
      affixedBottom,
      expandedRowKeys,
      fixedColumnsInfos,
      isMainTableOverflowX,
      isMainTableOverflowY,
      mainTableStyle,
      resized,
      selectedRowKeys,
    } = this.state

    const {
      getColumns,
      // getLeftColumnsWidth,
      getGroupColumnsDepth,
      isAnyColumnsLeftFixed,
    } = this.columnManager

    const columns = getColumns() as IColumnProps<T>[]

    const theadStyle: React.CSSProperties = {
      height: `${TD_HEIGHT[size || "small"] * getGroupColumnsDepth()}px`,
      ...((getHeadStyle && getHeadStyle()) || {}),
    }

    /**
     * 展开行和选择行时，thead和每行的第一列前都要加入一列
     * 此列也会影响 sticky 的偏移位置
     */
    const selectAndExpand = !!onSelectChange && !!onExpandChange
    const theadPlaceholderVisible =
      expandIconVisible && (!!onSelectChange || !!onExpandChange)

    const thead = (
      <div
        key={0}
        className={classNames(
          `${prefix}-thead`,
          getHeadClassName && getHeadClassName()
        )}
        onMouseEnter={this.handleTheadMouseEnter}
        onMouseLeave={this.handleTheadMouseLeave}
        ref={this.saveRef("mainThead")}
        style={theadStyle}
      >
        {theadPlaceholderVisible && (
          <div
            className={classNames(`${prefix}-th`, `${prefix}-th_functional`, {
              [`${prefix}-th_left`]: isAnyColumnsLeftFixed(),
              [`${prefix}-th_functional_both`]: selectAndExpand,
            })}
            key="functional-all"
          >
            {selectMultiple && !!onSelectChange && (
              <div className={`${prefix}-cell`}>
                <Checkbox
                  disabled={!this.getAvailableRowsKeys().length}
                  onChange={this.handleSelectAll}
                  checked={this.hasSelectedAll()}
                  className={`${prefix}-selectComponent`}
                />
              </div>
            )}
          </div>
        )}
        {columns.map((col, index) => {
          const {
            align,
            dataIndex,
            filters,
            fixed,
            onFilter,
            onSort,
            sortOrder,
            title,
            width,
          } = col

          const resizedCol = resized.find((o) => o.dataIndex === dataIndex)
          const clickable =
            !!onSort ||
            (sortOrder !== null && sortOrder !== undefined) ||
            !!onFilter ||
            !!filters
          let minWidth = 0
          if (typeof title === "string") {
            minWidth =
              Math.ceil(title.length > 4 ? title.length / 2 : title.length) *
                13 +
              16
            if (clickable) {
              minWidth += 20
            }
          }
          let flexValue
          if (typeof width === "number") {
            flexValue = `${width} 0 auto`
          } else if (typeof width === "string") {
            if (width.length - width.lastIndexOf("px") === 2) {
              flexValue = `${width.slice(0, -2)} 0 auto`
            } else {
              flexValue = `0 0 ${width}`
            }
          } else {
            flexValue = `${Math.max(TD_MIN_WIDTH, minWidth)} 0 auto`
          }
          /**
           * th left 值：取得 resize-observer 存储的该列的偏移量，加上如果有选择行、展开行时的 SELECT_TD_WIDTH —— 仅对 left 有效
           * th right 值：取得 resize-observer 存储的该列的偏移量，加上如果内滚动时的滚动条宽度（14） —— 仅对 right 有效
           */
          return (
            <ResizeObserver
              onResize={({ width: widthResize }) => {
                this.handleThResize(widthResize, dataIndex, index, fixed)
              }}
              disabled={!fixed}
              key={dataIndex || index}
            >
              <div
                className={classNames(`${prefix}-th`, {
                  [`${prefix}-th_clickable`]: clickable,
                  [`${prefix}-th_left`]: isFixedLeft(col),
                  [`${prefix}-th_right`]: isFixedRight(col),
                  [`${prefix}-th_leftLast`]: fixedColumnsInfos.find(
                    (o) => o.dataIndex === dataIndex
                  )?.isLastLeft,
                  [`${prefix}-th_rightFirst`]: fixedColumnsInfos.find(
                    (o) => o.dataIndex === dataIndex
                  )?.isFirstRight,
                })}
                key={dataIndex || index}
                style={{
                  left: isFixedLeft(col)
                    ? (fixedColumnsInfos.find((o) => o.dataIndex === dataIndex)
                        ?.offset || 0) +
                      (theadPlaceholderVisible
                        ? selectAndExpand
                          ? SELECT_AND_EXPAND_TD_WIDTH
                          : SELECT_TD_WIDTH
                        : 0)
                    : undefined,
                  right: isFixedRight(col)
                    ? (fixedColumnsInfos.find((o) => o.dataIndex === dataIndex)
                        ?.offset || 0) +
                      (isMainTableOverflowY && height ? 14 : 0)
                    : undefined,
                  flex: resizedCol ? `${resizedCol.value} 0 auto` : flexValue,
                  maxWidth: resizedCol ? resizedCol.value : width || "",
                  textAlign: align || undefined,
                  width: resizedCol
                    ? resizedCol.value
                    : width || Math.max(TD_MIN_WIDTH, minWidth),
                }}
                data-column={index}
              >
                {this.generateThCell(col, { index, columns })}
                {col.children && (
                  <div className={`${prefix}-thGroup`}>
                    {col.children.map(
                      (childCol: IColumnProps<T>, childColIndex: number) => (
                        <div
                          className={classNames(`${prefix}-th`, {
                            [`${prefix}-th_clickable`]:
                              !!childCol.onSort ||
                              (childCol.sortOrder !== null &&
                                childCol.sortOrder !== undefined) ||
                              !!childCol.onFilter ||
                              !!childCol.filters,
                          })}
                          key={childCol.dataIndex || childColIndex}
                          style={{
                            flex: "100 0 auto",
                            width: "100px",
                            textAlign: childCol.align || undefined,
                          }}
                        >
                          {this.generateThCell(childCol)}
                          {childCol.children && (
                            <div className={`${prefix}-thGroup`}>
                              {childCol.children.map(
                                (
                                  grandCol: IColumnProps<T>,
                                  grandColIndex: number
                                ) => (
                                  <div
                                    className={classNames(`${prefix}-th`, {
                                      [`${prefix}-th_clickable`]:
                                        !!grandCol.onSort ||
                                        (grandCol.sortOrder !== null &&
                                          grandCol.sortOrder !== undefined) ||
                                        !!grandCol.onFilter ||
                                        !!grandCol.filters,
                                    })}
                                    key={grandCol.dataIndex || grandColIndex}
                                    style={{
                                      flex: "100 0 auto",
                                      width: "100px",
                                      textAlign: grandCol.align || undefined,
                                    }}
                                  >
                                    {this.generateThCell(grandCol)}
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </ResizeObserver>
          )
        })}
      </div>
    )

    const generateTrs = (row: T, rowIndex: number) => {
      const { key } = row
      const colArray: any = []
      const selectPropsGetted = getSelectProps && getSelectProps(row, rowIndex)
      const allSelectProps = {
        checked: selectedRowKeys.includes(key),
        className: `${prefix}-selectComponent`,
        onChange: (checked: boolean) => this.handleSelect(key, checked),
        onClick: (e: React.MouseEvent) => e.stopPropagation(),
        ...(selectPropsGetted || {}),
      }
      const selectProps = omit(allSelectProps, ["popoverProps"])
      const selectContent = selectMultiple ? (
        <Checkbox {...selectProps} />
      ) : (
        <Radio {...selectProps} />
      )
      const expandContent = (
        <div
          className={`${prefix}-selectComponent`}
          style={{ cursor: "pointer" }}
          onClick={() => this.handleExpand(key)}
          role="none"
        >
          <Icon className={`${prefix}-expandIcon`} icon="arrow-down" />
        </div>
      )
      let selectCell = onExpandChange ? expandContent : selectContent
      if (selectAndExpand) {
        selectCell = (
          <div className={`${prefix}-selectComponent-wrapper`}>
            {selectContent}
            {expandContent}
          </div>
        )
      }
      const generateTr = (columnsParam: any[], parentIndex?: number) => {
        columnsParam.forEach((col, colIndexParam) => {
          /**
           * 如果前面 的 col 有 children，则要把 children.length 额外加到 colIndex
           */
          let colIndex = colIndexParam
          if (parentIndex) {
            for (let i = 0; i < parentIndex; i += 1) {
              const childrenCount = columns[i].children?.length || 1
              if (childrenCount) {
                colIndex += childrenCount
              }
            }
          }
          if (!col.children) {
            colArray.push(this.generateTbodyCell(row, col, rowIndex, colIndex))
          } else {
            generateTr(col.children, colIndexParam)
          }
        })
      }
      generateTr(columns)
      const tr = (
        <div
          className={classNames(
            `${prefix}-tr`,
            getRowClassName && getRowClassName(row, rowIndex),
            {
              [`${prefix}-tr_clickable`]: expandOnRowClick || selectOnRowClick,
              [`${prefix}-tr_expanded`]: expandedRowKeys.includes(key),
              [`${prefix}-tr_selected`]: selectedRowKeys.includes(key),
            }
          )}
          key={key || rowIndex}
          role="row"
          data-row={rowIndex}
          onMouseEnter={
            onRowMouseEnter
              ? (e) => onRowMouseEnter(row, rowIndex, e)
              : undefined
          }
          onMouseLeave={
            onRowMouseLeave
              ? (e) => onRowMouseLeave(row, rowIndex, e)
              : undefined
          }
          onClick={(e) => this.handleRowClick(row, rowIndex, e)}
          onKeyDown={noop}
          style={{
            ...((getRowStyle && getRowStyle(row, rowIndex)) || {}),
          }}
        >
          {theadPlaceholderVisible && (
            <div
              className={classNames(`${prefix}-td`, `${prefix}-td_functional`, {
                [`${prefix}-td_left`]: isAnyColumnsLeftFixed(),
                [`${prefix}-td_functional_both`]: selectAndExpand,
              })}
              key="functional"
              role="cell"
            >
              <div
                className={`${prefix}-cell`}
                style={{
                  alignItems: verticalAlign && VERTICAL_ALIGN[verticalAlign],
                }}
              >
                {selectPropsGetted?.popoverProps?.popup ? (
                  <Popover
                    mouseEnterDelay={0.1}
                    alignEdge={false}
                    placement="right"
                    {...(
                      (getSelectProps && getSelectProps(row, rowIndex)) ||
                      {}
                    ).popoverProps}
                  >
                    {selectCell}
                  </Popover>
                ) : (
                  selectCell
                )}
              </div>
            </div>
          )}
          {colArray}
        </div>
      )
      if (onExpandChange) {
        return [
          tr,
          expandedRowKeys.includes(key) ? (
            <div className={`${prefix}-expandRow`} key="tr-expand">
              <div
                className={`${prefix}-expandRow-inner`}
                style={
                  isMainTableOverflowX
                    ? { width: mainTableStyle.width }
                    : undefined
                }
              >
                {!!expandedRowRender && expandedRowRender(row, rowIndex)}
              </div>
            </div>
          ) : null,
        ]
      }
      return tr
    }

    return [
      headerAffixed ? (
        <Affix
          key={0}
          offsetTop={headerAffixedOffsetTop}
          getContainer={() => this.wrapper}
          getTarget={headerAffixGetTarget}
          onChange={(bool) => {
            this.setState({ affixedTop: bool }, () => {
              // 固定的那一刻也需要立即重新定位。
              // 重新定位、包括下面的 className, style 只在主表格上发生，因为固定列的 Affix 行为很单纯。
              if (bool) {
                this.handleWindowResize()
                this.handleMainTableScroll()
              }
            })
          }}
          className={affixedTop ? `${prefix}-affix` : ""}
          style={{
            display: "flex",
            zIndex: 2,
            alignItems: "baseline",
            flexDirection: "column",
            ...(affixedTop ? mainTableStyle : {}),
          }}
          ref={this.saveRef("affixHeader")}
        >
          {thead}
        </Affix>
      ) : (
        thead
      ),
      <div
        key={1}
        className={`${prefix}-tbody`}
        ref={this.saveRef("mainTableBody")}
      >
        {!virtualScroll &&
          dataSource &&
          !!dataSource.length &&
          dataSource.map((row, rowIndex) => {
            return generateTrs(row, rowIndex)
          })}
        {virtualScroll && dataSource && !!dataSource.length && (
          <List
            data={dataSource}
            itemKey="key"
            height={(height || 400) - 40}
            itemHeight={42}
            className={`${prefix}-virtual-wrapper`}
            style={{
              ...virtualListStyle,
            }}
            {...virtualListProps}
          >
            {(row: T, rowIndex: number) => {
              return generateTrs(row, rowIndex)
            }}
          </List>
        )}
      </div>,
      isMainTableOverflowX && headerAffixed && (
        <Affix
          key={2}
          offsetBottom={0}
          getContainer={() => this.mainTableBody}
          ref={this.saveRef("affixScrollbar")}
          className={classNames(`${prefix}-affixScrollbar`, {
            [`${prefix}-affixScrollbar_show`]: affixedBottom,
          })}
          style={{
            zIndex: 2,
            ...mainTableStyle,
          }}
          onScroll={(e: React.SyntheticEvent<HTMLElement>) =>
            this.syncTableScrollPosition(e.currentTarget.scrollLeft)
          }
          onChange={(bool) => this.setState({ affixedBottom: bool })}
        >
          <div style={{ width: this.mainTable?.scrollWidth }} />
        </Affix>
      ),
    ]
  }

  public generateThCell = (col: IColumnProps<T>, options?: IBaseObject) => {
    const {
      align,
      columnsResizable,
      getHeadCellClassName,
      getHeadCellStyle,
    } = this.props
    const { resizable: colResizable } = col
    let resizable = true
    if (typeof colResizable === "boolean") {
      resizable = colResizable
    } else if (typeof columnsResizable === "boolean") {
      resizable = columnsResizable
    }

    const { currentlyResizing, isResizerShow } = this.state

    const isLastTh = options && options.index === options.columns.length - 1

    const thCell = (
      <div
        className={classNames(
          `${prefix}-cell`,
          getHeadCellClassName &&
            getHeadCellClassName(col, options ? options.index : undefined)
        )}
        style={{
          justifyContent:
            (col.align && HORIZONTAL_ALIGN[col.align]) ||
            (align && HORIZONTAL_ALIGN[align]) ||
            undefined,
          ...((getHeadCellStyle &&
            getHeadCellStyle(col, options ? options.index : undefined)) ||
            {}),
        }}
      >
        {!col.onSort &&
          (col.sortOrder === null || col.sortOrder === undefined) &&
          !col.onFilter &&
          !col.filters &&
          col.title}
        {(!!col.onSort ||
          (col.sortOrder !== null && col.sortOrder !== undefined)) && (
          <TableSort
            onSort={(order) => (col.onSort ? col.onSort(order) : {})}
            sortOrder={col.sortOrder}
            title={col.title}
          />
        )}
        {(!!col.onFilter || !!col.filters) && (
          <TableFilter
            filteredValue={col.filteredValue}
            filterVisible={col.filterVisible}
            filterMultiple={col.filterMultiple}
            filterPopoverProps={col.filterPopoverProps}
            filters={col.filters}
            onFilter={(filter) => {
              if (col.onFilter) {
                col.onFilter(filter)
              }
            }}
            onFilterVisibleChange={(visible) => {
              if (col.onFilterVisibleChange) {
                col.onFilterVisibleChange(visible)
              }
            }}
            title={col.title}
          />
        )}
        {!col.fixed && resizable && !isLastTh && (
          <div
            className={classNames(`${prefix}-resizer`, {
              [`${prefix}-resizer_show`]: isResizerShow,
              [`${prefix}-resizer_current`]:
                currentlyResizing.dataIndex === col.dataIndex,
            })}
            onMouseDown={(e) => this.resizeColumnStart(e, col)}
            role="none"
          />
        )}
      </div>
    )

    if (col.popover) {
      return (
        <Popover
          mouseEnterDelay={0.3}
          placement={
            col.align === "center"
              ? "top"
              : col.align === "right"
              ? "topRight"
              : "topLeft"
          }
          alignEdge
          arrowed
          popup={col.popover}
        >
          {thCell}
        </Popover>
      )
    }
    return thCell
  }

  public generateTbodyCell = (
    row: T,
    cell: IColumnProps<T>,
    rowIndex: number,
    cellIndex: number
  ) => {
    const {
      align: alignProp,
      expandIconVisible,
      getCellClassName,
      getCellProps,
      getCellStyle,
      onExpandChange,
      onSelectChange,
      verticalAlign: verticalAlignProp,
    } = this.props
    const selectAndExpand = !!onSelectChange && !!onExpandChange
    const theadPlaceholderVisible =
      expandIconVisible && (!!onSelectChange || !!onExpandChange)
    const { currentlyResizing, fixedColumnsInfos, resized } = this.state
    const {
      align,
      dataIndex,
      filters,
      onFilter,
      onSort,
      render,
      sortOrder,
      title,
      verticalAlign,
      width,
    } = cell
    const clickable =
      !!onSort ||
      (sortOrder !== null && sortOrder !== undefined) ||
      !!onFilter ||
      !!filters
    let minWidth = 0
    if (typeof title === "string") {
      minWidth =
        Math.ceil(title.length > 4 ? title.length / 2 : title.length) * 13 + 16
      if (clickable) {
        minWidth += 20
      }
    }
    let flexValue
    if (typeof width === "number") {
      flexValue = `${width} 0 auto`
    } else if (typeof width === "string") {
      if (width.length - width.lastIndexOf("px") === 2) {
        flexValue = `${width.slice(0, -2)} 0 auto`
      } else {
        flexValue = `0 0 ${width}`
      }
    } else {
      flexValue = `${Math.max(TD_MIN_WIDTH, minWidth)} 0 auto`
    }
    const resizedCol = resized.find((o) => o.dataIndex === dataIndex)
    const cellClassName =
      getCellClassName && getCellClassName(row, cell, rowIndex, cellIndex)
    const cellProps =
      (getCellProps && getCellProps(row, cell, rowIndex, cellIndex)) || {}
    const cellStyle =
      (getCellStyle && getCellStyle(row, cell, rowIndex, cellIndex)) || {}
    const { rowSpan, colSpan, ...otherCellProps } = cellProps
    if (rowSpan || colSpan) {
      this.combinedCellsInfo.push({
        cell,
        cellIndex,
        colSpan,
        row,
        rowIndex,
        rowSpan,
      })
    }
    return (
      <div
        className={classNames(`${prefix}-td`, {
          [`${prefix}-td_resizing`]:
            dataIndex !== undefined &&
            currentlyResizing.dataIndex === dataIndex,
          [`${prefix}-td_left`]: isFixedLeft(cell),
          [`${prefix}-td_right`]: isFixedRight(cell),
          [`${prefix}-td_leftLast`]: fixedColumnsInfos.find(
            (o) => o.dataIndex === dataIndex
          )?.isLastLeft,
          [`${prefix}-td_rightFirst`]: fixedColumnsInfos.find(
            (o) => o.dataIndex === dataIndex
          )?.isFirstRight,
          [`${prefix}-td_combined`]: rowSpan || colSpan,
        })}
        key={dataIndex || cellIndex}
        style={{
          left: isFixedLeft(cell)
            ? (fixedColumnsInfos.find((o) => o.dataIndex === dataIndex)
                ?.offset || 0) +
              (theadPlaceholderVisible
                ? selectAndExpand
                  ? SELECT_AND_EXPAND_TD_WIDTH
                  : SELECT_TD_WIDTH
                : 0)
            : undefined,
          right: isFixedRight(cell)
            ? fixedColumnsInfos.find((o) => o.dataIndex === dataIndex)?.offset
            : undefined,
          flex: resizedCol ? `${resizedCol.value} 0 auto` : flexValue,
          width: resizedCol
            ? resizedCol.value
            : width || Math.max(TD_MIN_WIDTH, minWidth),
          maxWidth: resizedCol ? resizedCol.value : width || "",
        }}
        role="cell"
        data-row={rowIndex}
        data-column={cellIndex}
        {...otherCellProps}
      >
        <div
          className={classNames(`${prefix}-cell`, cellClassName)}
          style={{
            alignItems:
              (verticalAlign && VERTICAL_ALIGN[verticalAlign]) ||
              (verticalAlignProp && VERTICAL_ALIGN[verticalAlignProp]) ||
              undefined,
            justifyContent:
              (align && HORIZONTAL_ALIGN[align]) ||
              (alignProp && HORIZONTAL_ALIGN[alignProp]) ||
              undefined,
            ...cellStyle,
          }}
        >
          <div className={`${prefix}-cellInner`}>
            {render ? render(row, cell, rowIndex, cellIndex) : row[dataIndex]}
            {(rowSpan || colSpan) && (
              <div
                className={`${prefix}-cell_combined`}
                style={{
                  ...this.getCombinedCellStyle(
                    row,
                    cell,
                    rowIndex,
                    cellIndex,
                    rowSpan,
                    colSpan
                  ),
                  textAlign: align || undefined,
                }}
              >
                {render
                  ? render(row, cell, rowIndex, cellIndex)
                  : row[dataIndex]}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  public getCombinedCellStyle = (
    _: IBaseObject,
    __: IColumnProps<T>,
    rowIndex: number,
    colIndex: number,
    rowSpan: number,
    colSpan: number
  ) => {
    const getTableCell = (rowIndexParam: number, colIndexParam: number) => {
      if (this.mainTable) {
        const row = this.mainTable.querySelectorAll('[role="row"]')[
          rowIndexParam
        ]
        if (row) {
          return row.children[colIndexParam]
        }
      }
      return null
    }
    const cell = getTableCell(rowIndex, colIndex)
    const style: React.CSSProperties = {}
    if (rowSpan < 2 || typeof rowSpan === "undefined") {
      // 最后 - 1 是为了不挡住 cell 的 box-shadow
      style.height = "calc(100% - 1px)"
    } else {
      const endCell = getTableCell(rowIndex + rowSpan - 1, colIndex)
      if (cell && endCell) {
        const cellRect = cell.getBoundingClientRect()
        const endCellRect = endCell.getBoundingClientRect()
        // 最后 - 1 是为了不挡住 cell 的 box-shadow
        style.height = `${
          endCellRect.height + endCellRect.top - cellRect.top - 1
        }px`
      }
    }

    if (colSpan < 2 || typeof colSpan === "undefined") {
      // 最后 - 1 是为了不挡住 cell 的 box-shadow
      style.width = "calc(100% - 1px)"
    } else {
      const endCell = getTableCell(rowIndex, colIndex + colSpan - 1)
      if (cell && endCell) {
        const cellRect = cell.getBoundingClientRect()
        const endCellRect = endCell.getBoundingClientRect()
        // 最后 - 1 是为了不挡住 cell 的 box-shadow
        style.width = `${
          endCellRect.width + endCellRect.left - cellRect.left - 1
        }px`
      }
    }

    return style
  }

  public saveRef = (
    name?:
      | "affixHeader"
      | "affixScrollbar"
      | "mainTable"
      | "mainTableBody"
      | "mainThead"
      | "wrapper"
  ) => (node: any) => {
    if (name) {
      this[name] = node
    }
  }

  public render() {
    const {
      className,
      dataSource,
      emptyText,
      headerAffixed,
      headerAffixedOffsetTop,
      headerAffixGetTarget,
      headerEmphasized,
      height,
      loading,
      size,
      virtualScroll,
      ...otherProps
    } = this.props

    const restProps = omit(otherProps, [
      "align",
      "children",
      "columns",
      "columnsResizable",
      "defaultExpandedRowKeys",
      "defaultSelectedRowKeys",
      "expandIconVisible",
      "expandOnRowClick",
      "expandedRowKeys",
      "expandedRowRender",
      "getCellClassName",
      "getCellProps",
      "getCellStyle",
      "getHeadClassName",
      "getHeadStyle",
      "getHeadCellClassName",
      "getHeadCellStyle",
      "getRowClassName",
      "getRowStyle",
      "getSelectProps",
      "onExpandChange",
      "onSelectChange",
      "onScroll",
      "onRowClick",
      "onRowMouseEnter",
      "onRowMouseLeave",
      "selectMultiple",
      "selectedRowKeys",
      "selectOnRowClick",
      "verticalAlign",
      "virtualListProps",
      "virtualListStyle",
    ])

    const { children, isMainTableOverflowX, isMainTableOverflowY } = this.state

    if (children) {
      this.columnManager.reset(children)
    }

    const { getGroupColumnsDepth } = this.columnManager

    const empty = !(dataSource && dataSource.length)

    const classSet = classNames(
      className,
      `${prefix}-wrapper`,
      `${prefix}-${size}`,
      {
        [`${prefix}-headerEmphasized`]: headerEmphasized,
        [`${prefix}-empty`]: empty,
        [`${prefix}-loading`]: loading,
        [`${prefix}-overflow-x`]: isMainTableOverflowX,
        [`${prefix}-overflow-y`]: isMainTableOverflowY,
        [`${prefix}-virtualScroll`]: virtualScroll,
      }
    )

    return (
      <div className={classSet} ref={this.saveRef("wrapper")} {...restProps}>
        <Animate
          component="div"
          transitionName="fade"
          style={{
            position: "relative",
            top: `${TD_HEIGHT[size || "small"]}px`,
            zIndex: "calc(var(--z-index-affix) + 2)",
          }}
        >
          {loading &&
            (headerAffixed ? (
              <Affix
                offsetTop={
                  (headerAffixedOffsetTop || 0) + TD_HEIGHT[size || "small"]
                }
                getContainer={() => this.wrapper}
                getTarget={headerAffixGetTarget}
                className={`${prefix}-progress`}
              >
                <i />
                <i />
              </Affix>
            ) : (
              <div className={`${prefix}-progress`}>
                <i />
                <i />
              </div>
            ))}
        </Animate>
        <div
          className={classNames(`${prefix}-tables`, {
            [`${prefix}-innerScroll`]: !!height,
            [`${prefix}-overflowed`]: isMainTableOverflowY,
            [`${prefix}-hasFixedRightColumns`]: this.columnManager.isAnyColumnsRightFixed(),
          })}
          style={{
            maxHeight: height || undefined,
            paddingTop: height
              ? `${TD_HEIGHT[size || "small"] * getGroupColumnsDepth()}px`
              : "",
          }}
        >
          <div
            className={`${prefix}-mainTable`}
            ref={this.saveRef("mainTable")}
            role="table"
            onScroll={this.handleMainTableScroll}
          >
            {this.generateTable()}
          </div>
        </div>
        {empty && <div className={`${prefix}-placeholder`}>{emptyText}</div>}
      </div>
    )
  }
}

export default Table
