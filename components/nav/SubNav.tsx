import React, { useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon, { IconNames } from "../icon"
import { NavContext } from "./Context"
import "./style"

const prefix = "adui-nav"

export interface ISubNavProps {
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
   * 设置图标
   */
  icon?: IconNames
  /**
   * 独立的 index required
   */
  index: React.ReactText
  /**
   * subnav 标题
   */
  title?: React.ReactNode
}

/**
 * 导航栏 - 子导航
 */
const SubNav: React.FC<ISubNavProps> = ({
  children,
  className,
  icon,
  index,
  title,
  ...otherProps
}: ISubNavProps) => {
  const { openIndexes, onOpenChange } = useContext(NavContext)

  const open = (openIndexes || []).includes(index)

  const classSet = classNames(className, `${prefix}-sub`, {
    [`${prefix}-open`]: open,
  })

  return (
    <div className={classSet} {...otherProps}>
      <div
        className={`${prefix}-subTitle`}
        onClick={() => {
          if (onOpenChange) {
            onOpenChange(index)
          }
        }}
        role="none"
      >
        {icon && <Icon icon={icon} className={`${prefix}-icon`} />}
        <div className={`${prefix}-subTitleContent`}>{title}</div>
        <Icon icon="arrow-up" className={`${prefix}-arrow`} />
      </div>
      {open && <div>{children}</div>}
    </div>
  )
}

SubNav.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 设置图标
   */
  icon: PropTypes.any,
  /**
   * 独立的 index required
   */
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * subnav 标题
   */
  title: PropTypes.node,
}

SubNav.defaultProps = {
  children: null,
  className: undefined,
  icon: undefined,
  title: null,
}

export default SubNav
