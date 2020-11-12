import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon from "../icon"
import { MenuContext } from "./Context"
import "./style"

const prefix = "adui-menu"

export interface ISubMenuProps {
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
   * 是否禁用
   */
  disabled?: Boolean
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
 * 行动菜单 - 子菜单
 */
const SubMenu: React.FunctionComponent<ISubMenuProps> = ({
  className,
  children,
  disabled,
  index,
  title,
  ...otherProps
}: ISubMenuProps) => {
  const [open, setOpen] = useState(false)

  const { onExpandChange } = useContext(MenuContext)

  const classSet = classNames(className, `${prefix}-sub`, {
    [`${prefix}-sub_open`]: open,
    [`${prefix}-sub_disabled`]: disabled,
  })

  const handleExpandChange = (bool: boolean) => {
    if (onExpandChange) {
      onExpandChange(index, bool)
    }
    setOpen(bool)
  }

  let mouseEvents = {}

  if (!disabled) {
    mouseEvents = {
      onMouseEnter: () => handleExpandChange(true),
      onMouseLeave: () => handleExpandChange(false),
    }
  }

  return (
    <div
      className={classSet}
      data-index={index}
      {...mouseEvents}
      {...otherProps}
    >
      <div className={`${prefix}-subTitle`}>
        <span>{title}</span>
        <Icon icon="triangle-right" className={`${prefix}-icon`} />
      </div>
      <div className={`${prefix}-dropdown`}>{children}</div>
    </div>
  )
}

SubMenu.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 独立的 index required
   */
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * subnav 标题
   */
  title: PropTypes.node,
}

SubMenu.defaultProps = {
  children: null,
  className: undefined,
  disabled: false,
  title: null,
}

export default SubMenu
