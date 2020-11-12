import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon from "../icon"
import "./style"

const prefix = "adui-breadcrumb"

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
   * 指向链接
   */
  href?: string
}

/**
 * 面包屑 - item
 */

const Item: React.FunctionComponent<IItemProps> = ({
  className,
  href,
  children,
  ...otherProps
}: IItemProps) => {
  const classSet = classNames(className, `${prefix}-item`)
  const TagName = href ? "a" : "span"

  return (
    <TagName
      className={classSet}
      href={href}
      target={href && "_blank"}
      {...otherProps}
    >
      <div className={`${prefix}-content`}>{children}</div>
      <Icon size={18} icon="arrow-right" className={`${prefix}-icon`} />
    </TagName>
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
   * 指向链接
   */
  href: PropTypes.string,
}

Item.defaultProps = {
  children: null,
  className: undefined,
  href: undefined,
}

export default Item
