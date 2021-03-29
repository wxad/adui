import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import "./style"

const prefix = "adui-channels-form"

export interface ITipProps {
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
   * 设置类型
   */
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
}

/**
 * 表单 tip
 */
const Tip = (props: ITipProps) => {
  const { children, className, intent, ...otherProps } = props

  const classSet = classNames(
    className,
    `${prefix}-tip`,
    `${prefix}-tip_${intent}`
  )

  return (
    <div className={classSet} {...otherProps}>
      {children}
    </div>
  )
}

Tip.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 设置类型
   */
  intent: PropTypes.oneOf([
    "normal",
    "primary",
    "success",
    "warning",
    "danger",
  ]),
}

Tip.defaultProps = {
  children: null,
  className: null,
  intent: "normal",
}

export default Tip
