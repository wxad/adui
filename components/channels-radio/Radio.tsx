/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { forwardRef, useContext, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { GroupContext } from "./Context"
import { ConfigContext, getComputedSize } from "../config-provider"
import Group from "./Group"
import Icon, { IconNames } from "../icon"
import Popover, { IPopoverProps } from "../popover"
import "./style"

const prefix = "adui-channels-radio"

export interface IRadioProps {
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
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 值，只在使用 Radio.Group 时会读取使用
   */
  value?: null | React.ReactText
}

export interface IRadio
  extends React.ForwardRefExoticComponent<
    IRadioProps & React.RefAttributes<HTMLLabelElement>
  > {
  Group: typeof Group
}

/**
 * 单选提供给用户在互斥的多个选项中，对选项内容进行单个选择。
 */
// @ts-ignore
const Radio: IRadio = forwardRef(
  (
    {
      checked: checkedProp,
      children,
      className,
      disabled,
      helper,
      helperIcon,
      helperProps,
      onChange,
      onClick,
      size: sizeProp,
      value,
      ...otherProps
    }: IRadioProps,
    ref
  ) => {
    const [checked, setChecked] = useState(!!checkedProp)
    const {
      disabled: disabledContext,
      handleGroupValueChange,
      size: sizeContext,
      value: valueContext,
    } = useContext(GroupContext)

    // 相当于生命周期 getDerivedStateFromProps
    if (checkedProp !== null && checked !== checkedProp) {
      setChecked(!!checkedProp)
    }

    const { size: sizeConfig } = useContext(ConfigContext)

    const size = getComputedSize(sizeProp, sizeContext, sizeConfig)

    const popover = helper ? (
      <Popover alignEdge={false} popup={helper} {...helperProps}>
        <Icon
          icon={helperIcon || "help-circle"}
          color="var(--gray-600)"
          interactive
          className={`${prefix}-helper`}
        />
      </Popover>
    ) : null

    /**
     * 当有 radioGroup context 时，使用 value：
     * 如果存在 value prop，则直接使用 value；
     * 如果不存在，就 string 化 children 作为 value。
     */
    const classSet = classNames(
      className,
      `${prefix}-base`,
      `${prefix}-${size}`,
      {
        [`${prefix}-checked`]:
          valueContext !== null && valueContext !== undefined
            ? valueContext === (value === null ? children?.toString() : value)
            : checked,
        [`${prefix}-noChildren`]: !children,
        [`${prefix}-disabled`]: disabledContext || disabled,
      }
    )

    const handleClick = (
      e:
        | React.MouseEvent<HTMLLabelElement>
        | React.KeyboardEvent<HTMLLabelElement>
    ) => {
      if (onClick) {
        onClick(e)
      }
      const computedValue = value === null ? children?.toString() : value
      /**
       * 单选与多选处理点击的不同在于：
       * 单选选中状态是单项的，一旦选中不再触发事件。
       */
      if (
        (valueContext !== null ? valueContext === computedValue : checked) ||
        disabled ||
        disabledContext
      ) {
        return
      }
      if (handleGroupValueChange) {
        handleGroupValueChange(computedValue === undefined ? "" : computedValue)
      } else {
        if (checkedProp === null) {
          setChecked(true)
        }
        if (onChange) {
          onChange(true)
        }
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
      if (e.keyCode === 13) {
        handleClick(e)
      }
    }

    return (
      <label
        aria-checked={checked}
        className={classSet}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={ref}
        role="radio"
        {...otherProps}
      >
        <span className={`${prefix}-indicator`} />
        {!!children && <span>{children}</span>}
        {popover}
      </label>
    )
  }
)

Radio.Group = Group

Radio.displayName = "Radio"

Radio.propTypes = {
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
   * 值，只在使用 Radio.Group 时会读取使用
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Radio.defaultProps = {
  checked: null,
  children: "",
  className: undefined,
  disabled: false,
  helper: null,
  helperIcon: "help-circle",
  helperProps: {},
  onChange: null,
  onClick: null,
  size: "small",
  value: null,
}

export default Radio
