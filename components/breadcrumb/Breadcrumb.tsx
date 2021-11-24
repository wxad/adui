import React, { useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { ConfigContext, getComputedSize } from "../config-provider"
import Item from "./Item"
import "./style"

const prefix = "adui-breadcrumb"

export type { IItemProps } from "./Item"

export interface IBreadcrumbProps {
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
   * 尺寸大小
   */
  size?: "mini" | "small" | "medium" | "large"
}

/**
 * 面包屑用于展示当前和历史的行为路径、所在位置，并能够依据线性逻辑进行返回。
 */
const Breadcrumb: React.FC<IBreadcrumbProps> & {
  Item: typeof Item
} = ({ children, className, size, ...otherProps }: IBreadcrumbProps) => {
  const { size: sizeContext } = useContext(ConfigContext)
  const computedSize = getComputedSize(size, sizeContext)

  const classSet = classNames(className, `${prefix}-${computedSize}`)
  return (
    <div className={classSet} {...otherProps}>
      {children}
    </div>
  )
}

Breadcrumb.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 尺寸大小
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
}

Breadcrumb.defaultProps = {
  children: null,
  className: undefined,
  size: "small",
}

Breadcrumb.displayName = "Breadcrumb"

Breadcrumb.Item = Item

export default Breadcrumb
