import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { RowContext } from "./Context"
import "./style"

const prefix = "adui-grid"

export interface IRowProps {
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
   * 每列之间的间距
   */
  gutter?: number
  /**
   * 附加样式，可以在这里设置 flex 相关样式，如 align-items
   */
  style?: React.CSSProperties
}

/**
 * 栅格行
 */
const Row: React.FC<IRowProps> = ({
  children,
  className,
  gutter,
  style,
  ...otherProps
}: IRowProps) => {
  const classSet = classNames(className, `${prefix}-row`)
  const margin = gutter ? `-${gutter / 2}px` : 0
  const additionStyle = margin
    ? {
        marginLeft: margin,
        marginRight: margin,
      }
    : {}

  return (
    <RowContext.Provider value={{ gutter }}>
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
    </RowContext.Provider>
  )
}

Row.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 每列之间的间距
   */
  gutter: PropTypes.number,
  /**
   * 附加样式，可以在这里设置 flex 相关样式，如 align-items
   */
  style: PropTypes.object,
}

Row.defaultProps = {
  children: "",
  className: undefined,
  gutter: 0,
  style: {},
}

export default Row
