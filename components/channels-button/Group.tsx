import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { ButtonGroupContext } from "./Context"
import "./style"

const prefix = "adui-channels-button"

export interface IButtonGroupProps {
  [key: string]: any
  /**
   * 是否通栏分配宽度（flex: 1;）
   */
  banner?: boolean
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 附加类名
   */
  className?: string
  /**
   * 设置内部所有 <Button /> 是否禁用
   */
  disabled?: boolean
  /**
   * 设置内部所有 <Button /> 类型
   */
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
  /**
   * 设置内部所有 <Button /> 尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 设置内部所有 <Button /> 主题
   */
  theme?: null | "light"
}

/**
 * 按钮组
 */
const Group: React.FC<IButtonGroupProps> = ({
  banner,
  children,
  className,
  disabled,
  intent,
  size,
  theme,
  ...otherProps
}: IButtonGroupProps) => {
  const classSet = classNames(className, `${prefix}-group`, {
    [`${prefix}-group_banner`]: banner,
  })

  return (
    <ButtonGroupContext.Provider value={{ disabled, intent, size, theme }}>
      <div className={classSet} {...otherProps}>
        {children}
      </div>
    </ButtonGroupContext.Provider>
  )
}

Group.propTypes = {
  /**
   * 是否通栏分配宽度（flex: 1;）
   */
  banner: PropTypes.bool,
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 设置内部所有 <Button /> 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 设置内部所有 <Button /> 类型
   */
  intent: PropTypes.oneOf([
    "normal",
    "primary",
    "success",
    "warning",
    "danger",
  ]),
  /**
   * 设置内部所有 <Button /> 尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 设置内部所有 <Button /> 主题
   */
  theme: PropTypes.oneOf([null, "light"]),
}
Group.defaultProps = {
  banner: false,
  children: null,
  className: undefined,
  disabled: false,
  intent: "normal",
  size: "small",
  theme: null,
}

export default Group
