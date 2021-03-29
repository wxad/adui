import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import "./style"

const prefix = "adui-nav"

export interface IDividerProps {
  [key: string]: any
  /**
   * 附加类名
   */
  className?: string
}

/**
 * 导航栏 - 分割线
 */
const Divider: React.FC<IDividerProps> = ({
  className,
  ...otherProps
}: IDividerProps) => {
  return (
    <div
      className={classNames(className, `${prefix}-divider`)}
      {...otherProps}
    />
  )
}

Divider.propTypes = {
  /**
   * 附加类名
   */
  className: PropTypes.string,
}

Divider.defaultProps = {
  className: undefined,
}

export default Divider
