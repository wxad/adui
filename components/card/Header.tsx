import React, { useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { ConfigContext, getComputedSize } from "../config-provider"
import "./style"

const prefix = "adui-card"

export interface IHeaderProps {
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
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 卡片副标题
   */
  subTitle?: React.ReactNode
  /**
   * 卡片主标题（如不填整个标题模块隐藏）
   */
  title?: React.ReactNode
  /**
   * 头部右侧节点
   */
  topContent?: React.ReactNode
}

/**
 * 卡片组件头部部分
 */
const Header: React.FC<IHeaderProps> = ({
  children,
  className,
  topContent,
  size,
  subTitle,
  title,
  ...otherProps
}) => {
  const { size: sizeContext } = useContext(ConfigContext)

  const classSet = classNames(
    className,
    `${prefix}-header`,
    `${prefix}-${getComputedSize(size, sizeContext)}`
  )

  return (
    <div className={classSet} {...otherProps}>
      <div className={`${prefix}-headerBlock`}>
        {!!title && (
          <div className={`${prefix}-headerTop`}>
            <div className={`${prefix}-title`}>{title}</div>
            {!!subTitle && (
              <div className={`${prefix}-subTitle`}>{subTitle}</div>
            )}
          </div>
        )}
        {!!topContent && (
          <div className={`${prefix}-topContent`}>{topContent}</div>
        )}
      </div>
      {!!children && <div className={`${prefix}-children`}>{children}</div>}
    </div>
  )
}

Header.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 卡片副标题
   */
  subTitle: PropTypes.node,
  /**
   * 卡片主标题（如不填整个标题模块隐藏）
   */
  title: PropTypes.node,
  /**
   * 头部右侧节点
   */
  topContent: PropTypes.node,
}

Header.defaultProps = {
  children: "",
  className: undefined,
  size: "small",
  subTitle: null,
  title: null,
  topContent: null,
}

export default Header
