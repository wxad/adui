/* eslint-disable no-loop-func  */
/* eslint-disable react/no-array-index-key */
import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Animate from "rc-animate"
import Button from "../button"
import Icon from "../icon"
import Popover, { IPopoverProps } from "../popover"
import isEqualArrays from "../_util/isEqualArrays"
import "./style"

const prefix = "adui-cascader"

export type CascaderValueType = React.ReactText[]

export interface CascaderOption {
  [key: string]: any
  value?: string | number
  title: React.ReactNode
  disabled?: boolean
  children?: CascaderOption[]
}

export interface ICascaderProps {
  [key: string]: any
  /**
   * 是否支持清除
   */
  allowClear?: boolean
  /**
   * 当此项为 true 时，点选每级菜单选项值都会发生变化
   */
  changeOnSelect?: boolean
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 附加类名，注意 Cascader 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
   */
  className?: string
  /**
   * 默认值，内部驱动
   */
  defaultValue?: CascaderValueType | null
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 选择后展示的渲染函数
   */
  displayRender?: (
    title: string[],
    selectedOptions?: CascaderOption[]
  ) => React.ReactNode
  /**
   * 次级菜单的展开方式，可选 'click' 和 'hover'
   */
  expandTrigger?: "click" | "hover"
  /**
   * 值变化时的 handler
   */
  onChange?: (value: CascaderValueType, selectOptions: CascaderOption[]) => void
  /**
   * 下拉框 visible 状态改变时的回调
   */
  onVisibleChange?: (visible: boolean) => void
  /**
   * 可选项数据源
   */
  options?: CascaderOption[]
  /**
   * 占位文本
   */
  placeholder?: React.ReactNode
  /**
   * 属性将会透传给 Popover 组件
   */
  popoverProps?: IPopoverProps
  /**
   * 尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 值，外部控制
   */
  value?: CascaderValueType | null
  /**
   * 外部控制下拉框 visible 状态
   */
  visible?: boolean | null
}

/**
 * 级联选择器直观展示已有的层级关系。
 */
const Cascader: React.FC<ICascaderProps> = ({
  allowClear,
  changeOnSelect,
  children,
  className,
  defaultValue,
  disabled,
  displayRender = (title: string[]) => title.join("/"),
  expandTrigger,
  onChange,
  onVisibleChange,
  options,
  placeholder,
  popoverProps,
  size,
  value: valueProps,
  visible: visibleProps,
  ...otherProps
}) => {
  const [value, setValue] = useState<CascaderValueType>(
    valueProps !== null ? valueProps || [] : defaultValue || []
  )
  const [activeValue, setActiveValue] = useState<CascaderValueType>(
    valueProps !== null ? valueProps || [] : defaultValue || []
  )
  const [visible, setVisible] = useState(
    visibleProps !== null ? visibleProps : false
  )
  const delayTimer = useRef(0)

  // 相当于生命周期 getDerivedStateFromProps
  if (valueProps !== null && !isEqualArrays(valueProps || [], value)) {
    setValue(valueProps || [])
  }
  if (visibleProps !== null && visible !== visibleProps) {
    setVisible(visibleProps)
  }

  const setPopupVisible = (popupVisible: boolean) => {
    if (visibleProps === null) {
      setVisible(popupVisible)
    }
    if (popupVisible && !visible) {
      setActiveValue(value)
    }
    if (onVisibleChange) {
      onVisibleChange(popupVisible)
    }
  }

  const handleClear = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setPopupVisible(false)
    if (!valueProps) {
      setValue([])
    }
    if (onChange) {
      onChange([], [])
    }
  }

  const handleChange = (
    opts: CascaderOption[],
    { visible: popupVisible }: { visible: boolean }
  ) => {
    setPopupVisible(popupVisible)
    if (onChange) {
      onChange(
        opts.map(({ value: v }) => v || ""),
        opts
      )
    }
  }

  const hasValue = value?.length

  const arrayTreeFilter = <T extends unknown>(
    data: T[] = [],
    filterFn: (item: T, level: number) => boolean
  ) => {
    let childs = data
    const result: T[] = []
    let level = 0
    do {
      const foundItem: T = childs.filter((item) => filterFn(item, level))[0]
      if (!foundItem) {
        break
      }
      result.push(foundItem)
      childs = (foundItem as any).children || []
      level += 1
    } while (childs.length > 0)
    return result
  }

  const getTitle = () => {
    const unwrappedValue = Array.isArray(value[0]) ? value[0] : value
    const selectedOptions = arrayTreeFilter(
      options,
      (o, level: number) => o.value === unwrappedValue[level]
    )
    const title = selectedOptions.length
      ? selectedOptions.map((o) => o.title)
      : value
    return displayRender(
      title.map((o) => (o || "").toString()),
      selectedOptions
    )
  }

  const isActiveOption = (option: CascaderOption, menuIndex: number) =>
    activeValue[menuIndex] === option.value

  const getActiveOptions = (
    activeValueParam?: CascaderValueType
  ): CascaderOption[] =>
    arrayTreeFilter(
      options,
      (o, level) => o.value === (activeValueParam || activeValue)[level]
    )

  const getShowOptions = (): (CascaderOption[] | undefined)[] => {
    const result = getActiveOptions()
      .map(({ children: childs }) => childs)
      .filter((activeOption) => activeOption?.length)
    result.unshift(options)

    return result
  }

  const delaySelect = (func?: () => void) => {
    if (delayTimer.current) {
      clearTimeout(delayTimer.current)
      delayTimer.current = 0
    }
    if (typeof func === "function") {
      delayTimer.current = window.setTimeout(() => {
        func()
        delayTimer.current = 0
      }, 150)
    }
  }

  const optss = getShowOptions()

  const menus = (
    <div className={`${prefix}-menus`}>
      <Animate
        transitionAppear
        component="div"
        style={{ display: "flex" }}
        animation={{
          appear(node: HTMLElement, done: () => void) {
            node.classList.add(`${prefix}-enter`)
            setTimeout(() => {
              node.classList.add(`${prefix}-enter-active`)
            }, 50)
            const promise = new Promise((resolve) => setTimeout(resolve, 200))
            promise.then(() => {
              node.classList.remove(`${prefix}-enter-active`)
              node.classList.remove(`${prefix}-enter`)
              return done()
            })
            return done()
          },
          enter(node: HTMLElement, done: () => void) {
            node.classList.add(`${prefix}-enter`)
            setTimeout(() => {
              node.classList.add(`${prefix}-enter-active`)
            }, 50)
            const promise = new Promise((resolve) => setTimeout(resolve, 200))
            promise.then(() => {
              node.classList.remove(`${prefix}-enter-active`)
              node.classList.remove(`${prefix}-enter`)
              return done()
            })
            return done()
          },
          leave(node: HTMLElement, done: () => void) {
            node.classList.add(`${prefix}-leave`)
            setTimeout(() => {
              node.classList.add(`${prefix}-leave-active`)
            }, 50)
            const promise = new Promise((resolve) => setTimeout(resolve, 200))
            promise.then(() => {
              return done()
            })
          },
        }}
      >
        {optss.map((opts, menuIndex) => (
          <div
            className={classNames(`${prefix}-menu`, {
              [`${prefix}-menu-${size}`]: size,
            })}
            key={menuIndex}
          >
            {(opts || []).map((o, j) => {
              const { value: v, title, children: c, disabled: d } = o
              const handleSelect = () => {
                if (d) {
                  return
                }
                let activeValueDuplicated = [...activeValue]
                activeValueDuplicated = activeValueDuplicated.slice(
                  0,
                  menuIndex + 1
                )
                activeValueDuplicated[menuIndex] = v || ""
                const activeOptions = getActiveOptions(activeValueDuplicated)
                setActiveValue(activeValueDuplicated)
                if (!c?.length) {
                  handleChange(activeOptions, { visible: false })
                  if (valueProps === null) {
                    setValue(activeValueDuplicated)
                  }
                } else if (changeOnSelect) {
                  handleChange(activeOptions, { visible: true })
                  if (valueProps === null) {
                    setValue(activeValueDuplicated)
                  }
                }
              }
              return (
                <div
                  role="none"
                  key={v || j}
                  className={classNames(`${prefix}-menu-item`, {
                    [`${prefix}-menu-item-active`]: isActiveOption(
                      o,
                      menuIndex
                    ),
                  })}
                  title={title?.toString()}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleSelect}
                  onMouseEnter={() => {
                    if (expandTrigger === "hover" && c?.length) {
                      delaySelect(handleSelect)
                    }
                  }}
                  onMouseLeave={() => {
                    if (expandTrigger === "hover" && c?.length) {
                      delaySelect()
                    }
                  }}
                >
                  <div className={`${prefix}-menu-item-content`}>{title}</div>
                  {!!c?.length && (
                    <Icon
                      icon="triangle-right"
                      className={`${prefix}-menu-item-icon`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </Animate>
    </div>
  )

  return (
    <Popover
      arrowed={false}
      popupClassName={`${prefix}-popup`}
      visible={disabled ? false : visible}
      onVisibleChange={setPopupVisible}
      trigger="click"
      popup={menus}
      {...popoverProps}
    >
      <Button
        disabled={disabled}
        className={classNames(`${prefix}-button`, {
          [`${prefix}-button-valued`]: hasValue,
          [`${prefix}-button-clearable`]: allowClear,
        })}
        size={size}
        {...otherProps}
      >
        {hasValue ? (
          <span className={`${prefix}-label`}>{getTitle()}</span>
        ) : (
          <span className={`${prefix}-placeholder`}>{placeholder}</span>
        )}
        <div className={`${prefix}-icons`}>
          <Icon
            icon="triangle-down"
            className={`${prefix}-suffix`}
            color={
              disabled
                ? "var(--transparent-gray-600)"
                : "var(--transparent-gray-700)"
            }
          />
          {allowClear && !disabled && (
            <Icon
              icon="cancel-circle"
              className={`${prefix}-remove`}
              color="var(--transparent-gray-700)"
              onClick={handleClear}
            />
          )}
        </div>
      </Button>
    </Popover>
  )
}

Cascader.propTypes = {
  /**
   * 是否支持清除
   */
  allowClear: PropTypes.bool,
  /**
   * 当此项为 true 时，点选每级菜单选项值都会发生变化
   */
  changeOnSelect: PropTypes.bool,
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名，注意 Dialog 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
   */
  className: PropTypes.string,
  /**
   * 默认值，内部驱动
   */
  defaultValue: PropTypes.any,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 选择后展示的渲染函数
   */
  displayRender: PropTypes.any,
  /**
   * 次级菜单的展开方式，可选 'click' 和 'hover'
   */
  expandTrigger: PropTypes.oneOf(["click", "hover"]),
  /**
   * 可选项数据源
   */
  options: PropTypes.any,
  /**
   * 值变化时的 handler
   */
  onChange: PropTypes.any,
  /**
   * 下拉框 visible 状态改变时的回调
   */
  onVisibleChange: PropTypes.any,
  /**
   * 占位文本
   */
  placeholder: PropTypes.any,
  /**
   * 属性将会透传给 Popover 组件
   */
  popoverProps: PropTypes.any,
  /**
   * 尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 值，外部控制
   */
  value: PropTypes.any,
  /**
   * 外部控制下拉框 visible 状态
   */
  visible: PropTypes.any,
}

Cascader.defaultProps = {
  allowClear: true,
  changeOnSelect: false,
  children: null,
  className: undefined,
  defaultValue: null,
  disabled: false,
  displayRender: undefined,
  expandTrigger: "click",
  onChange: undefined,
  onVisibleChange: undefined,
  options: [],
  placeholder: "请选择",
  popoverProps: {},
  size: "small",
  value: null,
  visible: null,
}

export default Cascader
