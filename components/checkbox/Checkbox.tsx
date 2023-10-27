/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { forwardRef, useContext, useRef, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { GroupContext } from "./Context"
import Group from "./Group"
import Icon, { IconNames } from "../icon"
import Popover, { IPopoverProps } from "../popover"
import { ConfigContext, getComputedSize } from "../config-provider"
import "./style"

const prefix = "adui-checkbox"
export interface ICheckboxProps {
  [key: string]: any
  /**
   * 是否选中
   */
  checked?: null | boolean
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
  disabled?: boolean
  /**
   * 加入问号气泡提示内容
   */
  helper?: React.ReactNode
  /**
   * 自定义问号气泡的 Icon
   */
  helperIcon?: IconNames
  /**
   * 问号气泡提示的 props，会将此对象都传递给 <Popover />
   */
  helperProps?: IPopoverProps
  /**
   * 设置 indeterminate 状态，负责且仅仅负责样式控制，请在实现全选效果时使用
   */
  indeterminate?: boolean
  /**
   * 选中态发生变化时的 handler
   */
  onChange?: ((checked: boolean) => void) | null
  /**
   * 点击时的 handler
   */
  onClick?:
    | ((
        e:
          | React.MouseEvent<HTMLLabelElement>
          | React.KeyboardEvent<HTMLLabelElement>
      ) => void)
    | null
  /**
   * onMouseDown 时的 handler
   */
  onMouseDown?: (e: React.MouseEvent<HTMLLabelElement>) => void
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 值，只在使用 Checkbox.Group 时会读取使用
   */
  value?: null | React.ReactText
}

export interface ICheckbox
  extends React.ForwardRefExoticComponent<
    ICheckboxProps & React.RefAttributes<HTMLLabelElement>
  > {
  Group: typeof Group
}

/**
 * 勾选提供用户在多个选项中，对选项的内容进行单或多个选择。
 */
// @ts-ignore
const Checkbox: ICheckbox = forwardRef(
  (
    {
      checked: checkedProp,
      children,
      className,
      disabled,
      helper,
      helperIcon,
      helperProps,
      indeterminate,
      onChange,
      onClick,
      onMouseDown,
      size: sizeProp,
      value,
      ...otherProps
    }: ICheckboxProps,
    refProp
  ) => {
    const [checked, setChecked] = useState(!!checkedProp)
    const {
      disabled: disabledContext,
      handleGroupValueChange,
      size: sizeContext,
      value: valueContext,
    } = useContext(GroupContext)
    const { size: sizeConfig } = useContext(ConfigContext)
    const activeTimeOutRef = useRef(0)
    const labelRef = useRef<HTMLLabelElement>(null)
    const ref = refProp || labelRef

    // 相当于生命周期 getDerivedStateFromProps
    if (checkedProp !== null && checked !== !!checkedProp) {
      setChecked(!!checkedProp)
    }

    const size = getComputedSize(sizeProp, sizeContext, sizeConfig)

    const valueComputed = value !== null ? value : children?.toString()

    /**
     * 当有 context context 时，使用 value：
     * 如果存在 value prop，则直接使用 value；
     * 如果不存在，就 string 化 children 作为 value。
     */
    const classSet = classNames(
      className,
      `${prefix}-base`,
      `${prefix}-${size}`,
      {
        [`${prefix}-checked`]:
          indeterminate ||
          (valueContext
            ? valueComputed !== null &&
              valueComputed !== undefined &&
              valueContext.includes(valueComputed)
            : checked),
        [`${prefix}-noChildren`]: !children,
        [`${prefix}-disabled`]: disabledContext || disabled,
        [`${prefix}-indeterminate`]: indeterminate,
      }
    )

    const popover = helper ? (
      <span
        role="none"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <Popover alignEdge={false} popup={helper} {...helperProps}>
          <Icon
            icon={helperIcon || "help-circle"}
            color="var(--gray-600)"
            interactive
            className={`${prefix}-helper`}
          />
        </Popover>
      </span>
    ) : null

    const handleClick = (
      e:
        | React.MouseEvent<HTMLLabelElement>
        | React.KeyboardEvent<HTMLLabelElement>
    ) => {
      if (onClick) {
        onClick(e)
      }
      if (disabled || disabledContext) {
        return
      }
      if (
        handleGroupValueChange &&
        valueComputed !== null &&
        valueComputed !== undefined
      ) {
        handleGroupValueChange(valueComputed)
      } else {
        if (checkedProp === null) {
          setChecked(!checked)
        }
        if (onChange) {
          onChange(!checked)
        }
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
      if (e.key === "Enter") {
        handleClick(e)
      }
    }

    const handleWindowMouseUp = () => {
      window.clearTimeout(activeTimeOutRef.current)
      window.removeEventListener("mouseup", handleWindowMouseUp)
    }

    const handleMouseDown = (
      e: React.MouseEvent<HTMLLabelElement, MouseEvent>
    ) => {
      if (onMouseDown) {
        onMouseDown(e)
      }

      window.addEventListener("mouseup", handleWindowMouseUp)

      if (ref && "current" in ref && ref.current) {
        delete ref.current.dataset.actived
      }

      activeTimeOutRef.current = window.setTimeout(() => {
        if (ref && "current" in ref && ref.current) {
          ref.current.dataset.actived = "true"
        }
      }, 200)
    }

    return (
      <label
        aria-checked={checked}
        className={classSet}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={ref}
        role="checkbox"
        onMouseDown={handleMouseDown}
        {...otherProps}
      >
        <span className={`${prefix}-indicator`}>
          <i className={`${prefix}-indicator-inner`} />
        </span>
        {!!children && <span>{children}</span>}
        {popover}
      </label>
    )
  }
)

Checkbox.Group = Group

Checkbox.displayName = "Checkbox"

Checkbox.propTypes = {
  /**
   * 是否选中
   */
  checked: PropTypes.oneOf([null, true, false]),
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
   * 加入问号气泡提示内容
   */
  helper: PropTypes.node,
  /**
   * 自定义问号气泡的 Icon
   */
  helperIcon: PropTypes.any,
  /**
   * 问号气泡提示的 props，会将此对象都传递给 <Popover />
   */
  helperProps: PropTypes.object,
  /**
   * 设置 indeterminate 状态，负责且仅仅负责样式控制，请在实现全选效果时使用
   */
  indeterminate: PropTypes.bool,
  /**
   * 选中态发生变化时的 handler
   */
  onChange: PropTypes.func,
  /**
   * 点击时的 handler
   */
  onClick: PropTypes.func,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 值，只在使用 Checkbox.Group 时会读取使用
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Checkbox.defaultProps = {
  checked: null,
  children: "",
  className: undefined,
  disabled: false,
  helper: null,
  helperIcon: "help-circle",
  helperProps: {},
  indeterminate: false,
  onChange: null,
  onClick: null,
  size: "small",
  value: null,
}

export default Checkbox
