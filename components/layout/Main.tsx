import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import "./style"

const prefix = "adui-layout"

export interface IMainProps {
  [key: string]: any
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 附加类名
   */
  className?: string
}

/**
 * 布局 - 主体内容 `<main />`
 */
const Main: React.FC<IMainProps> = ({
  children,
  className,
  ...otherProps
}: IMainProps) => (
  <main className={classNames(className, `${prefix}-main`)} {...otherProps}>
    {children}
  </main>
)

Main.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
}

Main.defaultProps = {
  children: "",
  className: undefined,
}

export default Main
