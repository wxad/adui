import React, { useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon, { IconNames } from "../icon"
import Popover, { IPopoverProps } from "../popover"
import { FormContext } from "./Context"
import "./style"

const prefix = "adui-form"

export interface IItemProps {
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
   * label
   */
  label?: React.ReactNode
  /**
   * label 字符对齐方式
   */
  labelAlign?: "left" | "center" | "right" | null
  /**
   * label 解释内容
   */
  labelHelper?: React.ReactNode
  /**
   * label 解释内容的 Icon
   */
  labelHelperIcon?: IconNames
  /**
   * label 解释内容所使用的 Popover 的 Props
   */
  labelHelperProps?: IPopoverProps
  /**
   * label 字符数，Form 会以 em 单位设置 label 宽度
   */
  labelSize?: number | null
  /**
   * label className
   */
  labelClassName?: string
  /**
   * label style
   */
  labelStyle?: React.CSSProperties
  /**
   * 附加 style
   */
  style?: React.CSSProperties
}

/**
 * 表单 item
 */
const Item: React.FC<IItemProps> = ({
  children,
  className,
  label,
  labelAlign,
  labelHelper,
  labelHelperIcon,
  labelHelperProps,
  labelSize,
  labelClassName,
  labelStyle,
  style,
  ...otherProps
}: IItemProps) => {
  const {
    itemClassName: itemClassNameContext,
    itemStyle,
    labelAlign: labelAlignContext,
    labelStyle: labelStyleContext,
    labelSize: labelSizeContext,
    labelClassName: labelClassNameContext,
  } = useContext(FormContext)

  const classSet = classNames(
    className || itemClassNameContext,
    `${prefix}-item`
  )

  let align: string | undefined | null = labelAlign || labelAlignContext
  switch (align) {
    case "left":
      align = "flex-start"
      break
    case "right":
      align = "flex-end"
      break
    case "center":
      align = "center"
      break
    default:
  }

  const alignStyle = align ? { justifyContent: align } : {}

  return (
    <div
      className={classSet}
      style={{
        ...itemStyle,
        ...style,
      }}
      {...otherProps}
    >
      {!!label && (
        <div
          className={classNames(`${prefix}-label`, labelClassNameContext)}
          style={{
            width: `${labelSize || labelSizeContext}em`,
            ...alignStyle,
            ...labelStyleContext,
            ...labelStyle,
          }}
        >
          {label}
          {!!labelHelper && (
            <Popover
              popup={labelHelper}
              alignEdge={false}
              placement="bottom"
              {...labelHelperProps}
            >
              <Icon
                icon={labelHelperIcon || "help-circle"}
                interactive
                color="var(--gray-600)"
                style={{ marginLeft: "4px" }}
              />
            </Popover>
          )}
        </div>
      )}
      <div className={`${prefix}-control`}>{children}</div>
    </div>
  )
}

Item.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * label
   */
  label: PropTypes.node,
  /**
   * label 字符对齐方式
   */
  labelAlign: PropTypes.oneOf([null, "left", "center", "right"]),
  /**
   * label className
   */
  labelClassName: PropTypes.string,
  /**
   * label 解释内容
   */
  labelHelper: PropTypes.node,
  /**
   * label 解释内容的 Icon
   */
  labelHelperIcon: PropTypes.any,
  /**
   * label 解释内容所使用的 Popover 的 Props
   */
  labelHelperProps: PropTypes.object,
  /**
   * label 字符数，Form 会以 em 单位设置 label 宽度
   */
  labelSize: PropTypes.number,
  /**
   * label style
   */
  labelStyle: PropTypes.object,
  /**
   * 附加 style
   */
  style: PropTypes.object,
}

Item.defaultProps = {
  children: null,
  className: undefined,
  label: null,
  labelAlign: null,
  labelHelper: null,
  labelHelperIcon: "help-circle",
  labelHelperProps: {},
  labelSize: null,
  labelClassName: undefined,
  labelStyle: {},
  style: {},
}

export default Item
