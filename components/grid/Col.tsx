import React, { useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { RowContext } from "./Context"
import "./style"

const prefix = "adui-grid"

export interface IColProps {
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
   * 栅格占位格数
   */
  span?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12
  /**
   * 附加样式
   */
  style?: React.CSSProperties
}

/**
 * 栅格列
 */
const Col: React.FC<IColProps> = ({
  children,
  className,
  span,
  style,
  ...otherProps
}: IColProps) => {
  const { gutter } = useContext(RowContext)

  const classSet = classNames(
    className,
    `${prefix}-col`,
    `${prefix}-col_${span}`
  )

  const padding = `${(gutter || 0) / 2}px`
  const additionStyle = padding
    ? {
        paddingLeft: padding,
        paddingRight: padding,
      }
    : {}

  return (
    <div
      className={classSet}
      style={{
        ...additionStyle,
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </div>
  )
}

Col.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 栅格占位格数
   */
  span: PropTypes.oneOf([0, 1, 2, 3, 4, 6, 8, 12]),
  /**
   * 附加样式
   */
  style: PropTypes.object,
}

Col.defaultProps = {
  children: "",
  className: undefined,
  span: 12,
  style: {},
}

export default Col
