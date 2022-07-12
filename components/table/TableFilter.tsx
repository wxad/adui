import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon from "../icon"
import Popover, { IPopoverProps } from "../popover"
import Checkbox from "../checkbox"
import Radio from "../radio"
import "./style"

const prefix = "adui-table"
const getFilteredValue = (val?: (string | number)[] | null) => {
  if (val === null || val === undefined || val.length === 0) {
    return ["all"]
  }
  return val
}

export interface ITableFilterProps {
  filteredValue?: (string | number)[] | null
  filterMultiple?: boolean
  filterSearchable?: boolean
  filterSearchCaseSensitive?: boolean
  filterSearchPlaceholder?: string
  filterSearchFunc?: (
    input: string,
    item: { text: string; value: string | number }
  ) => boolean
  filterPopoverProps?: IPopoverProps
  filters?: Array<{ text: string; value: string | number }> | null
  filterVisible?: boolean | null
  onFilter?: ((value: (string | number)[]) => void) | null
  onFilterVisibleChange?: ((visible: boolean) => void) | null
  title?: React.ReactNode
  sortableAndFilterable?: boolean
}

/**
 * 表格筛选
 */
const TableFilter: React.FC<ITableFilterProps> = ({
  filterSearchable,
  filterSearchPlaceholder,
  filterSearchCaseSensitive,
  filterSearchFunc,
  filteredValue: filteredValueProp,
  filterMultiple,
  filterPopoverProps,
  filterVisible,
  filters: filtersProp,
  onFilter,
  onFilterVisibleChange,
  title,
  sortableAndFilterable,
}: ITableFilterProps) => {
  if (!filtersProp) {
    return null
  }
  const [filteredValue, setFilteredValue] = useState(
    getFilteredValue(filteredValueProp)
  )
  const [visible, setVisible] = useState(filterVisible || false)
  const [searchValue, setSearchValue] = useState("")

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
    filteredValueParam: (string | number) | (string | number)[]
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

  if (filterSearchable) {
    popup = (
      <div>
        <div className={`${prefix}-filter-search`}>
          <input
            value={searchValue}
            placeholder={filterSearchPlaceholder}
            onChange={(e) => {
              const { value } = e.target
              setSearchValue(value)
            }}
          />
          <Icon icon="search" className={`${prefix}-filter-icon`} />
        </div>
      </div>
    )
  }

  const filters = searchValue
    ? filtersProp.filter((o) => {
        const { text } = o
        if (filterSearchFunc) {
          return filterSearchFunc(searchValue, o)
        }
        if (!filterSearchCaseSensitive) {
          return String(text)
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        }
        return String(text).includes(searchValue)
      })
    : filtersProp

  if (filterMultiple) {
    popup = (
      <>
        {popup}
        {!filters.length ? (
          <div className={`${prefix}-filter-no`}>无匹配结果</div>
        ) : (
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
        )}
      </>
    )
  } else {
    popup = (
      <>
        {popup}
        {!filters.length ? (
          <div className={`${prefix}-filter-no`}>无匹配结果</div>
        ) : (
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
        )}
      </>
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
            filteredValue &&
            (filteredValue.length > 1 || filteredValue[0] !== "all"),
        })}
      >
        {!sortableAndFilterable ? title : null}
        <Icon icon="filter-outlined" />
        {!sortableAndFilterable && <div className={`${prefix}-clickholder`} />}
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
   * 筛选是否支持搜索
   */
  filterSearchable: PropTypes.bool,
  /**
   * 筛选搜索开启大小写敏感搜索，默认为 false
   */
  filterSearchCaseSensitive: PropTypes.bool,
  /**
   * 筛选搜索 placeholder
   */
  filterSearchPlaceholder: PropTypes.string,
  /**
   * 筛选搜索的自定义 function
   */
  filterSearchFunc: PropTypes.func,
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
  /**
   * sortableAndFilterable?: boolean
   */
  sortableAndFilterable: PropTypes.bool,
}

TableFilter.defaultProps = {
  filterMultiple: false,
  filterSearchable: false,
  filterSearchCaseSensitive: false,
  filterSearchPlaceholder: "在筛选项中搜索",
  filterSearchFunc: undefined,
  filterPopoverProps: {},
  filteredValue: null,
  filterVisible: null,
  filters: null,
  onFilter: null,
  onFilterVisibleChange: null,
  title: null,
  sortableAndFilterable: false,
}

export default TableFilter
