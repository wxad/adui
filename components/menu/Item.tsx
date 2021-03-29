import React, { useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { MenuContext } from "./Context"
import "./style"

const noop = () => {}
const prefix = "adui-menu"

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
  disabled?: Boolean
  /**
   * 独立的 index required
   */
  index: React.ReactText
  /**
   * 点击事件
   */
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
}

/**
 * 行动菜单 - 菜单项
 */
const Item: React.FC<IItemProps> = ({
  className,
  disabled,
  index,
  onClick,
  ...otherProps
}: IItemProps) => {
  const { onItemClick } = useContext(MenuContext)

  const classSet = classNames(className, `${prefix}-item`, {
    [`${prefix}-item_disabled`]: disabled,
  })
  return (
    <div
      role="none"
      onClick={() => {
        if (!disabled) {
          if (onClick) {
            onClick()
          }
          if (onItemClick) {
            onItemClick(index)
          }
        }
      }}
      className={classSet}
      {...otherProps}
    />
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
   * 独立的 index required
   */
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * 点击事件
   */
  onClick: PropTypes.func,
}

Item.defaultProps = {
  children: null,
  className: undefined,
  disabled: false,
  onClick: noop,
}

export default Item
