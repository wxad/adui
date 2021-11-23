import * as React from "react"
import PropTypes from "prop-types"
import omit from "../_util/omit"
import { IPopoverProps } from "../popover"

interface IBaseObject {
  [key: string]: any
}

export interface IColumnProps<T extends IBaseObject = IBaseObject> {
  /**
   * 水平靠齐方向
   */
  align?: null | "left" | "center" | "right"
  /**
   * 子节点
   */
  children?: React.ReactNode[]
  /**
   * 索引
   */
  dataIndex: string
  /**
   * 是否多选
   */
  filterMultiple?: boolean
  /**
   * 筛选 Popover props，会将此对象透传给 <Popover />
   */
  filterPopoverProps?: IPopoverProps
  /**
   * 可以从外部传入筛选的值，null, [], 都会识别为未筛选状态
   */
  filteredValue?: Array<React.ReactText> | null
  /**
   * 从外部控制 filter Popover 的显示
   */
  filterVisible?: boolean | null
  /**
   * 筛选项，格式：[{ text: "朋友圈广告", value: '2' }]
   */
  filters?: Array<{ text: string; value: React.ReactText }> | null
  /**
   * 固定设置
   */
  fixed?: true | false | "left" | "right"
  /**
   * 设置该列每个单元格的类名：(row, rowIndex) => (string)
   */
  getCellClassName?: (row: T, rowIndex: number) => string
  /**
   * 设置该列每个单元格上的由组件规定的 prop，
   * 如 rowSpan colSpan，(row, rowIndex) => ({})
   */
  getCellProps?: (row: T, rowIndex: number) => IBaseObject | void
  /**
   * 设置该列每个单元格上的 style，(row, rowIndex) => ({})
   */
  getCellStyle?: (row: T, rowIndex: number) => React.CSSProperties | void
  /**
   * adui@2.15.0 是否在整体宽度有剩余的情况下填充
   */
  grow?: boolean
  /**
   * 筛选时的 handler，筛选和排序功能不能同时使用
   */
  onFilter?: ((value: Array<React.ReactText>) => void) | null
  /**
   * 筛选 popup visible 变化时的 handler，参数 (bool, col)
   */
  onFilterVisibleChange?: ((visible: boolean) => {}) | null
  /**
   * 排序时的 handler，筛选和排序功能不能同时使用
   */
  onSort?: ((order: "asc" | "desc" | "") => void) | null
  /**
   * 在列头上增加 popover。这样的需求越来越常规，样式上内置到 Table 内做规范，作为 prop 是有必要的。
   */
  popover?: React.ReactNode
  /**
   * 如果有 render，则 render (row, col, rowIndex, colIndex)，否则取 dataIndex。
   */
  render?: (
    row: T,
    col: IBaseObject,
    rowIndex: number,
    colIndex: number
  ) => React.ReactNode
  /**
   * 是否允许调整宽度，默认 true
   */
  resizable?: boolean
  /**
   * 可以从外部控制排序方式
   */
  sortOrder?: null | "" | "asc" | "desc"
  /**
   * 列头显示的内容
   */
  title: React.ReactNode
  /**
   * 垂直靠齐方向
   */
  verticalAlign?: "top" | "center" | "bottom"
  /**
   * 列的固定宽度
   */
  width?: React.ReactText
}

/**
 * Column.js 的作用仅是约束 PropTypes。
 * 每一列的 props 在 ColumnManager.js 中得到处理。
 */
function Column<T extends IBaseObject = IBaseObject>(props: IColumnProps<T>) {
  const restProps = omit(props, [
    "align",
    "children",
    "dataIndex",
    "filterMultiple",
    "filterPopoverProps",
    "filteredValue",
    "filters",
    "fixed",
    "getCellClassName",
    "getCellProps",
    "getCellStyle",
    "grow",
    "onFilter",
    "onFilterVisibleChange",
    "onSort",
    "popover",
    "render",
    "resizable",
    "sortOrder",
    "title",
    "verticalAlign",
    "width",
  ])
  return <div {...restProps} />
}

Column.propTypes = {
  /**
   * 水平靠齐方向
   */
  align: PropTypes.oneOf([null, "left", "center", "right"]),
  /**
   * 索引
   */
  dataIndex: PropTypes.string,
  /**
   * 是否多选
   */
  filterMultiple: PropTypes.bool,
  /**
   * 筛选 Popover props，会将此对象透传给 <Popover />
   */
  filterPopoverProps: PropTypes.object,
  /**
   * 可以从外部传入筛选的值，null, [], 都会识别为未筛选状态
   */
  filteredValue: PropTypes.array,
  /**
   * 从外部控制 filter Popover 的显示
   */
  filterVisible: PropTypes.bool,
  /**
   * 筛选项，格式：[{ text: "朋友圈广告", value: '2' }]
   */
  filters: PropTypes.array,
  /**
   * 固定设置
   */
  fixed: PropTypes.oneOf([null, false, true, "left", "right"]),
  /**
   * 设置该列每个单元格的类名：(row, rowIndex) => (string)
   */
  getCellClassName: PropTypes.func,
  /**
   * 设置该列每个单元格上的由组件规定的 prop，
   * 如 rowSpan colSpan，(row, rowIndex) => ({})
   */
  getCellProps: PropTypes.func,
  /**
   * 设置该列每个单元格上的 style，(row, rowIndex) => ({})
   */
  getCellStyle: PropTypes.func,
  /**
   * adui@2.15.0 是否在整体宽度有剩余的情况下填充
   */
  grow: PropTypes.bool,
  /**
   * 筛选时的 handler，筛选和排序功能不能同时使用
   */
  onFilter: (props: IColumnProps) => {
    const { onFilter, onSort } = props
    if (onFilter) {
      if (typeof onFilter !== "function") {
        return new Error(
          "Invalid prop `onFilter` supplied to `Column`, expected `function`"
        )
      }
      if (!!onFilter && !!onSort) {
        return new Error("Column: 筛选和排序功能不能同时使用")
      }
    }
    return null
  },
  /**
   * 筛选 popup visible 变化时的 handler，参数 (bool, col)
   */
  onFilterVisibleChange: PropTypes.func,
  /**
   * 排序时的 handler，筛选和排序功能不能同时使用
   */
  onSort: (props: IColumnProps) => {
    const { onFilter, onSort } = props
    if (onSort) {
      if (typeof onSort !== "function") {
        return new Error(
          "Invalid prop `onSort` supplied to `Column`, expected `function`"
        )
      }
      if (!!onFilter && !!onSort) {
        return new Error("Column: 筛选和排序功能不能同时使用")
      }
    }
    return null
  },
  /**
   * 在列头上增加 popover。这样的需求越来越常规，样式上内置到 Table 内做规范，作为 prop 是有必要的。
   */
  popover: PropTypes.node,
  /**
   * 如果有 render，则 render (row, col, rowIndex, colIndex)，否则取 dataIndex。
   */
  render: PropTypes.func,
  /**
   * 是否允许调整宽度，默认 true
   */
  resizable: PropTypes.bool,
  /**
   * 可以从外部控制排序方式
   */
  sortOrder: PropTypes.oneOf([null, "", "asc", "desc"]),
  /**
   * 列头显示的内容
   */
  title: PropTypes.node.isRequired,
  /**
   * 垂直靠齐方向
   */
  verticalAlign: PropTypes.oneOf([null, "top", "center", "bottom"]),
  /**
   * 列的固定宽度
   */
  width: (props: IColumnProps) => {
    /**
     * 1. width 目前只支持 {50}，"50px"，"50%" 三种格式，请不要使用其他单位；
     * 2. 固定列必须设置宽度，Table 做这样的约束，是为了避免太多的计算成本。
     */
    const { fixed, width } = props
    if (width) {
      if (typeof width !== "string" && typeof width !== "number") {
        return new Error(
          "Invalid `width` supplied to `Column`, expected `string`|`number`."
        )
      }
    } else if (fixed) {
      return new Error("Column: fixed 列必须传入 width prop.")
    }
    return null
  },
}

Column.defaultProps = {
  align: null,
  dataIndex: null,
  filterMultiple: false,
  filterPopoverProps: {},
  filteredValue: null,
  filterVisible: null,
  filters: null,
  fixed: null,
  getCellClassName: undefined,
  getCellProps: undefined,
  getCellStyle: undefined,
  grow: undefined,
  onFilter: null,
  onFilterVisibleChange: () => {},
  onSort: null,
  popover: null,
  render: null,
  resizable: null,
  sortOrder: null,
  verticalAlign: null,
  width: null,
}

export default Column
