import React, { useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon, { IconNames } from "../icon"
import { NavContext } from "./Context"
import "./style"

const prefix = "adui-nav"

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
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 设置图标
   */
  icon?: IconNames
  /**
   * 独立的 index required
   */
  index: React.ReactText
}

/**
 * 导航栏 - item
 */
const Item: React.FC<IItemProps> = ({
  children,
  className,
  disabled,
  icon,
  index,
  ...otherProps
}: IItemProps) => {
  const { selectedIndex, onChange } = useContext(NavContext)

  const classSet = classNames(className, `${prefix}-item`, {
    [`${prefix}-item_selected`]: index === selectedIndex,
    [`${prefix}-item_disabled`]: disabled,
  })

  return (
    <div
      className={classSet}
      onClick={() => {
        if (!disabled && onChange) {
          onChange(index)
        }
      }}
      role="none"
      {...otherProps}
    >
      {icon && <Icon icon={icon} className={`${prefix}-icon`} />}
      {children}
    </div>
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
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 设置图标
   */
  icon: PropTypes.any,
  /**
   * 独立的 index required
   */
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

Item.defaultProps = {
  children: null,
  className: undefined,
  disabled: false,
  icon: undefined,
}

export default Item
