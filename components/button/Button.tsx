import React, { forwardRef, useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon, { IconNames } from "../icon"
import Spinner from "../spinner"
import Group from "./Group"
import { ConfigContext, getComputedSize } from "../config-provider"
import { ButtonGroupContext } from "./Context"
import "./style"

const prefix = "adui-button"

export interface IButtonProps {
  [key: string]: any
  /**
   * active 状态，用于 Button.Group 中
   */
  active?: boolean
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 附加类名
   */
  className?: string
  /**
   * 是否禁用
   */
  disabled?: boolean | null
  /**
   * 使用 href，将 <button /> 转化为 <a /> 标签，这时候也可以传入 target="_blank" 等 <a /> 标签的属性
   */
  href?: string
  /**
   * icon 附加样式
   */
  iconStyle?: React.CSSProperties
  /**
   * 类型
   */
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
  /**
   * 左图标
   */
  leftIcon?: IconNames
  /**
   * 是否加载
   */
  loading?: boolean
  /**
   * 点击事件的 handler
   */
  onClick?:
    | null
    | ((e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void)
  /**
   * 右图标
   */
  rightIcon?: IconNames
  /**
   * 尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 主题
   */
  theme?: null | "light"
}

export interface IButton
  extends React.ForwardRefExoticComponent<
    IButtonProps & React.RefAttributes<any>
  > {
  Group: typeof Group
  type: string
}

/**
 * 按钮用于触发一个新任务、新流程等的即时行动。
 */
// @ts-ignore
const Button: IButton = forwardRef(
  (
    {
      active,
      children,
      className,
      disabled: disabledProp,
      href,
      leftIcon,
      rightIcon,
      iconStyle,
      intent: intentProp,
      loading,
      onClick,
      size: sizeProp,
      theme: themeProp,
      ...otherProps
    }: IButtonProps,
    ref
  ) => {
    const {
      disabled: disabledContext,
      intent: intentContext,
      size: sizeContext,
      theme: themeContext,
    } = useContext(ButtonGroupContext)
    const { size: sizeConfigContext } = useContext(ConfigContext)

    const disabled = disabledProp === null ? disabledContext : disabledProp
    const intent = intentProp === null ? intentContext : intentProp
    const size = getComputedSize(sizeProp, sizeContext, sizeConfigContext)
    const theme = themeProp === null ? themeContext : themeProp

    const classSet = classNames(
      className,
      `${prefix}-base`,
      `${prefix}-${intent}`,
      `${prefix}-${size}`,
      {
        [`${prefix}-${theme}`]: theme,
        [`${prefix}-active`]: active,
        [`${prefix}-hasLeftIcon`]: !!leftIcon || !children,
        [`${prefix}-hasRightIcon`]: !!rightIcon || !children,
        [`${prefix}-disabled`]: disabled && !loading,
        [`${prefix}-loading`]: loading,
      }
    )

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => {
      if (!disabled && !loading && onClick) {
        onClick(e)
      }
    }

    const tagProps = {
      className: classSet,
      disabled: !!disabled,
      href,
      onClick: handleClick,
      ref,
      target: href && "_blank",
      ...otherProps,
    }

    const tagChildren = (
      <>
        {!!leftIcon && (
          <Icon
            size={18}
            className={`${prefix}-leftIcon`}
            icon={leftIcon}
            style={{ ...(iconStyle || {}) }}
          />
        )}
        {!!children && <span className={`${prefix}-content`}>{children}</span>}
        {!!rightIcon && (
          <Icon
            size={18}
            className={`${prefix}-rightIcon`}
            icon={rightIcon}
            style={{ ...(iconStyle || {}) }}
          />
        )}
        {loading && (
          <div className={`${prefix}-spinner`}>
            <Spinner
              color={theme === "light" || intent === "normal" ? null : "#fff"}
              intent={theme === "light" ? intent : "normal"}
            />
          </div>
        )}
      </>
    )

    if (href) {
      return <a {...tagProps}>{tagChildren}</a>
    }
    return (
      <button type="button" {...tagProps}>
        {tagChildren}
      </button>
    )
  }
)

Button.type = "Button"

Button.Group = Group

Button.displayName = "Button"

Button.propTypes = {
  /**
   * active 状态，用于 Button.Group 中
   */
  active: PropTypes.bool,
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 使用 href，将 <button /> 转化为 <a /> 标签，这时候也可以传入 target="_blank" 等 <a /> 标签的属性
   */
  href: PropTypes.string,
  /**
   * icon 附加样式
   */
  iconStyle: PropTypes.any,
  /**
   * 类型
   */
  intent: PropTypes.oneOf([
    "normal",
    "primary",
    "success",
    "warning",
    "danger",
  ]),
  /**
   * 左图标
   */
  leftIcon: PropTypes.any,
  /**
   * 是否加载
   */
  loading: PropTypes.bool,
  /**
   * 点击事件的 handler
   */
  onClick: PropTypes.func,
  /**
   * 右图标
   */
  rightIcon: PropTypes.any,
  /**
   * 尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 主题
   */
  theme: PropTypes.oneOf([null, "light"]),
}

Button.defaultProps = {
  active: false,
  children: "",
  className: undefined,
  disabled: null,
  href: undefined,
  iconStyle: {},
  intent: "normal",
  leftIcon: undefined,
  loading: false,
  onClick: null,
  rightIcon: undefined,
  size: "small",
  theme: null,
}

export default Button
