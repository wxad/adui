import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { GroupContext } from "./Context"
import "./style"

const prefix = "adui-radio"

type ValueType = React.ReactText

export interface IRadioGroupProps<T extends ValueType = ValueType> {
  [key: string]: any
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 附加类名
   */
  className?: string
  /**
   * 默认已选中的值
   */
  defaultValue?: null | T
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 选中态变化时的 handler
   */
  onChange?: null | ((value: T) => void)
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 已选中的值
   */
  value?: null | T
}

/**
 * 单选组，用以统一地管理内部单选状态。
 */
function Group<T extends ValueType = ValueType>({
  children,
  className,
  defaultValue,
  disabled,
  onChange,
  size,
  value: valueProp,
  ...otherProps
}: IRadioGroupProps<T>) {
  /**
   * 初始化 value state
   * 1. 优先判断 Prop value，如果存在 Prop value，则 Group 完全交由外部控制，内部状态无效；
   * 2. 再判断 Prop defaultValue，如果存在默认值，则 Group 状态为此默认值；
   * 3. 最后判断 Radio children 是否自身存在 Prop checked。
   *
   * 以上三个判断可能存在冲突，所以在此说明条件判断的优先级。
   */
  const [value, setValue] = useState(() => {
    let checkedValue
    if (valueProp !== null) {
      checkedValue = valueProp
    } else if (defaultValue !== null) {
      checkedValue = defaultValue
    }
    return checkedValue
  })

  // 相当于生命周期 getDerivedStateFromProps
  if (valueProp !== null && value !== valueProp) {
    setValue(valueProp)
  }

  const handleGroupValueChange = (radioValue: T) => {
    if (valueProp === null) {
      setValue(radioValue)
    }
    if (onChange) {
      onChange(radioValue)
    }
  }

  const classSet = classNames(className, `${prefix}-group`, {
    [`${prefix}-disabled`]: disabled,
  })

  return (
    <GroupContext.Provider
      value={{ disabled, handleGroupValueChange, size, value }}
    >
      <div className={classSet} data-value={value} {...otherProps}>
        {children}
      </div>
    </GroupContext.Provider>
  )
}

Group.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 默认已选中的值
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 选中态变化时的 handler
   */
  onChange: PropTypes.func,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 已选中的值
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Group.defaultProps = {
  children: null,
  className: undefined,
  defaultValue: null,
  disabled: false,
  onChange: null,
  size: "small",
  value: null,
}

export default Group
