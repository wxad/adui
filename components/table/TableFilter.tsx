import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon from "../icon"
import Popover, { IPopoverProps } from "../popover"
import Checkbox from "../checkbox"
import Radio from "../radio"
import "./style"

const prefix = "adui-table"
const getFilteredValue = (val?: Array<React.ReactText> | null) => {
  if (val === null || val === undefined || val.length === 0) {
    return ["all"]
  }
  return val
}

export interface ITableFilterProps {
  [key: string]: any
  filteredValue?: Array<React.ReactText> | null
  filterMultiple?: boolean
  filterPopoverProps?: IPopoverProps
  filters?: Array<{ text: string; value: React.ReactText }> | null
  filterVisible?: boolean | null
  onFilter?: ((value: Array<React.ReactText>) => void) | null
  onFilterVisibleChange?: ((visible: boolean) => void) | null
  title?: React.ReactNode
}

/**
 * 表格筛选
 */
const TableFilter: React.FC<ITableFilterProps> = ({
  filteredValue: filteredValueProp,
  filterMultiple,
  filterPopoverProps,
  filterVisible,
  filters,
  onFilter,
  onFilterVisibleChange,
  title,
}: ITableFilterProps) => {
  if (!filters) {
    return null
  }
  const [filteredValue, setFilteredValue] = useState(
    getFilteredValue(filteredValueProp)
  )
  const [visible, setVisible] = useState(filterVisible || false)

  // 相当于生命周期 getDerivedStateFromProps
  if (
    filteredValueProp !== null &&
    filteredValueProp !== undefined &&
    JSON.stringify(filteredValue) !==
      JSON.stringify(getFilteredValue(filteredValueProp))
  ) {
    setFilteredValue(getFilteredValue(filteredValueProp))
  }

  if (typeof filterVisible === "boolean" && visible !== filterVisible) {
    setVisible(filterVisible)
  }

  const handleChange = (
    filteredValueParam: React.ReactText | Array<React.ReactText>
  ) => {
    const newValue: any =
      filterMultiple && filteredValueParam
        ? filteredValueParam
        : [filteredValueParam]
    if (filteredValueProp === null) {
      setFilteredValue(newValue)
    }
    if (onFilter) {
      if (filteredValueParam === "all") {
        onFilter([])
      } else {
        onFilter(newValue)
      }
    }
    if (!filterMultiple) {
      // 延迟是为了让状态的变化在视觉上先被接受
      setTimeout(() => {
        if (onFilterVisibleChange) {
          onFilterVisibleChange(false)
        }
        setVisible(false)
      }, 100)
    }
  }

  let popup

  if (filterMultiple) {
    popup = (
      <Checkbox.Group
        className={`${prefix}-filterList`}
        defaultValue={["all"]}
        value={filteredValue}
        onChange={handleChange}
      >
        {filters.map((item) => (
          <Checkbox key={item.value} value={item.value}>
            {item.text}
          </Checkbox>
        ))}
      </Checkbox.Group>
    )
  } else {
    popup = (
      <Radio.Group
        className={`${prefix}-filterList`}
        defaultValue="all"
        value={filteredValue ? filteredValue[0] : null}
        onChange={handleChange}
      >
        <Radio value="all">全部</Radio>
        {filters.map((item) => (
          <Radio key={item.value} value={item.value}>
            {item.text}
          </Radio>
        ))}
      </Radio.Group>
    )
  }

  return (
    <Popover
      arrowed={false}
      visible={visible}
      onVisibleChange={(bool) => {
        if (typeof filterVisible !== "boolean") {
          setVisible(bool)
        }
        if (onFilterVisibleChange) {
          onFilterVisibleChange(bool)
        }
      }}
      popup={popup}
      trigger="click"
      placement="bottomLeft"
      {...filterPopoverProps}
    >
      <div
        data-value={filteredValue}
        role="columnheader"
        className={classNames(`${prefix}-filter`, {
          [`${prefix}-filtered`]:
            filteredValue && filteredValue.length && filteredValue[0] !== "all",
        })}
      >
        {title}
        <Icon icon="filter-outlined" />
      </div>
    </Popover>
  )
}

TableFilter.propTypes = {
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
   * 筛选项，格式：[{ text: "朋友圈广告", value: '2' }]
   */
  filters: PropTypes.any,
  /**
   * 从外部控制 filter Popover 的显示
   */
  filterVisible: PropTypes.bool,
  /**
   * 筛选时的 handler
   */
  onFilter: PropTypes.func,
  /**
   * 筛选 popup visible 变化时的 handler，参数 (bool, col)
   */
  onFilterVisibleChange: PropTypes.func,
  /**
   * title
   */
  title: PropTypes.node,
}

TableFilter.defaultProps = {
  filterMultiple: false,
  filterPopoverProps: {},
  filteredValue: null,
  filterVisible: null,
  filters: null,
  onFilter: null,
  onFilterVisibleChange: null,
  title: null,
}

export default TableFilter
