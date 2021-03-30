import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { GroupContext } from "./Context"
import "./style"

const prefix = "adui-checkbox"

type ValueType = React.ReactText

export interface ICheckboxGroupProps<T extends ValueType = ValueType> {
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
  defaultValue?: null | Array<T>
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 选中态变化时的 handler
   */
  onChange?: null | ((value: Array<T>) => void)
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 已选中的值
   */
  value?: null | Array<T>
}

/**
 * 勾选组
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
}: ICheckboxGroupProps<T>) {
  /**
   * 初始化 value state
   * 1. 优先判断 Prop value，如果存在 Prop value，则 Group 完全交由外部控制，内部状态无效；
   * 2. 再判断 Prop defaultValue，如果存在默认值，则 Group 状态为此默认值；
   * 3. 最后判断 Checkbox children 是否自身存在 Prop checked。
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
  if (Array.isArray(valueProp) && value !== valueProp) {
    setValue(valueProp)
  }

  const handleChange = (val: Array<T>) => {
    if (onChange) {
      onChange(val)
    }
  }

  const handleGroupValueChange = (checkboxValue: T) => {
    if (value) {
      /**
       * 不要直接在 value 上进行数组操作，这样会在 setState 之前就改变了 value 的值。
       * shouldComponentUpdate 将会 return false
       */
      const valueDuplicate = [...value]
      const index = valueDuplicate.indexOf(checkboxValue)
      if (index !== -1) {
        valueDuplicate.splice(index, 1)
      } else {
        valueDuplicate.push(checkboxValue)
      }
      if (valueProp === null) {
        setValue(valueDuplicate)
      }
      handleChange(valueDuplicate)
    } else {
      if (valueProp === null) {
        setValue([checkboxValue])
      }
      handleChange([checkboxValue])
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
  defaultValue: PropTypes.any,
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
  value: PropTypes.any,
}

Group.defaultProps = {
  children: "",
  className: undefined,
  defaultValue: null,
  disabled: false,
  onChange: null,
  size: "small",
  value: null,
}

export default Group
