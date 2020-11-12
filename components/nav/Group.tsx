import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import "./style"

const prefix = "adui-nav"

export interface IGroupProps {
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
   * 组名
   */
  title?: React.ReactNode
}

/**
 * 导航栏 - 分组
 */
const Group: React.FunctionComponent<IGroupProps> = ({
  children,
  className,
  title,
  ...otherProps
}: IGroupProps) => {
  const classSet = classNames(className, `${prefix}-group`)

  return (
    <div className={classSet} {...otherProps}>
      <div className={`${prefix}-groupTitle`}>{title}</div>
      {children}
    </div>
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
   * 组名
   */
  title: PropTypes.node,
}

Group.defaultProps = {
  children: null,
  className: undefined,
  title: null,
}

export default Group
