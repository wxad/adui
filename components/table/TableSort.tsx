/* eslint-disable max-len */
import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import "./style"

const prefix = "adui-table"

export interface ITableSortProps {
  onSort?: ((order: "asc" | "desc" | "") => void) | null
  sortOrder?: null | "" | "asc" | "desc"
  title?: React.ReactNode
}

/**
 * 表格排序
 */
const TableSort: React.FunctionComponent<ITableSortProps> = ({
  onSort,
  sortOrder: sortOrderProp,
  title,
}: ITableSortProps) => {
  const [sortOrder, setSortOrder] = useState(sortOrderProp)

  // 相当于生命周期 getDerivedStateFromProps
  if (sortOrderProp !== null && sortOrder !== sortOrderProp) {
    setSortOrder(sortOrderProp)
  }

  const handleChange = () => {
    let newOrder: "" | "asc" | "desc"
    if (sortOrder) {
      newOrder = sortOrder === "asc" ? "desc" : ""
    } else {
      newOrder = "asc"
    }
    if (sortOrderProp === null) {
      setSortOrder(newOrder)
    }
    if (onSort) {
      onSort(newOrder)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key.toUpperCase() === "ENTER") {
      handleChange()
    }
  }
  return (
    <div
      data-sort={sortOrder}
      className={classNames(`${prefix}-sort`, `${prefix}-sort_${sortOrder}`)}
      onClick={handleChange}
      onKeyPress={handleKeyPress}
      role="columnheader"
      tabIndex={0}
    >
      {title}
      <div>
        <svg className={`${prefix}-asc`} width="16" height="16">
          <path d="M12.315 5.764c.372.407.218.736-.32.736H4.01c-.548 0-.696-.325-.32-.736l3.64-3.983a.891.891 0 0 1 1.345 0l3.641 3.983z" />
        </svg>
        <svg className={`${prefix}-desc`} width="16" height="16">
          <path d="M12.315 10.236c.372-.407.218-.736-.32-.736H4.01c-.548 0-.696.325-.32.736l3.64 3.983c.372.406.97.41 1.345 0l3.641-3.983z" />
        </svg>
      </div>
    </div>
  )
}

TableSort.propTypes = {
  /**
   * 排序时的 handler
   */
  onSort: PropTypes.func,
  /**
   * 可以从外部控制排序方式
   * 没有 sortOrder，则用 "" 空字符串，不要用 null，因为 null 会被组件视为内部驱动
   */
  sortOrder: PropTypes.oneOf([null, "", "asc", "desc"]),
  /**
   * title
   */
  title: PropTypes.node,
}

TableSort.defaultProps = {
  onSort: null,
  sortOrder: null,
  title: null,
}

export default TableSort
