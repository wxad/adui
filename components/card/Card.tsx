import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Header from "./Header"
import "./style"

const prefix = "adui-card"

export interface ICardProps {
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
   * 层级
   */
  elevation?: 0 | 1 | 2 | 3 | 4
  /**
   * 可互动性
   */
  interactive?: boolean
}

export interface ICard
  extends React.ForwardRefExoticComponent<
    ICardProps & React.RefAttributes<HTMLDivElement>
  > {
  Header: typeof Header
}

/**
 * 卡片是包含一类特定数据集的有层级的模块，用以承载相关联内容。页面设计中，通常以内容决定卡片的布局方式。
 */
// @ts-ignore
const Card: ICard = forwardRef(
  (
    { children, className, elevation, interactive, ...otherProps }: ICardProps,
    ref
  ) => {
    const classSet = classNames(
      className,
      `${prefix}-base`,
      `${prefix}-elevation_${elevation}`,
      {
        [`${prefix}-interactive`]: interactive,
      }
    )
    return (
      <div ref={ref} className={classSet} {...otherProps}>
        {children}
      </div>
    )
  }
)
Card.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 层级
   */
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),
  /**
   * 可互动性
   */
  interactive: PropTypes.bool,
}

Card.defaultProps = {
  children: "",
  className: undefined,
  elevation: 1,
  interactive: false,
}

Card.Header = Header

Card.displayName = "Card"

export default Card
