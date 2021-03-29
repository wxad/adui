import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { ConfigContext, getComputedSize } from "../config-provider"
import Divider from "./Divider"
import Group from "./Group"
import Item from "./Item"
import SubNav from "./SubNav"
import { NavContext } from "./Context"
import "./style"

const noop = () => {}
const prefix = "adui-nav"

export interface INavProps {
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
   * 默认展开的 SubNav indexes，请确保数组项合法，Nav 不会做过多验证
   */
  defaultOpenIndexes?: Array<React.ReactText> | null
  /**
   * 默认选中的 Nav.Item index
   */
  defaultSelectedIndex?: React.ReactText | null
  /**
   * 点击 Nav.Item 时的 handler，参数：index
   */
  onChange?: (index: React.ReactText) => void
  /**
   * Sub 收起 / 展开 时的 handler，参数：index
   */
  onOpenChange?: (indexes: Array<React.ReactText>) => void
  /**
   * 外部控制：展开的 SubNav indexes，请确保数组项合法，Nav 不会做过多验证
   */
  openIndexes?: Array<React.ReactText> | null
  /**
   * 外部控制：选中的 Nav.Item index
   */
  selectedIndex?: React.ReactText | null
  /**
   * 设置尺寸大小
   */
  size?: "mini" | "small" | "medium" | "large"
}

/**
 * 导航栏引导用户确认位置、方向，完成内容之间移动。依据内容选择适当配合的导航形式，为页面和功能提供引导性结构菜单。
 */
const Nav: React.FC<INavProps> & {
  Divider: typeof Divider
  Group: typeof Group
  Item: typeof Item
  SubNav: typeof SubNav
} = ({
  children,
  className,
  defaultOpenIndexes,
  defaultSelectedIndex,
  onChange,
  onOpenChange,
  openIndexes: openIndexesProp,
  selectedIndex: selectedIndexProp,
  size: sizeProp,
  ...otherProps
}: INavProps) => {
  const [selectedIndex, setSelectedIndex] = useState(
    selectedIndexProp !== null ? selectedIndexProp : defaultSelectedIndex
  )
  const [openIndexes, setOpenIndexes] = useState(
    openIndexesProp !== null ? openIndexesProp : defaultOpenIndexes
  )

  // 相当于生命周期 getDerivedStateFromProps
  if (selectedIndexProp !== null && selectedIndex !== selectedIndexProp) {
    setSelectedIndex(selectedIndexProp)
  }
  if (openIndexesProp !== null && openIndexes !== openIndexesProp) {
    setOpenIndexes(openIndexesProp)
  }

  const { size: sizeContext } = useContext(ConfigContext)
  const size = getComputedSize(sizeProp, sizeContext)

  const classSet = classNames(
    className,
    `${prefix}-wrapper`,
    `${prefix}-${size}`
  )

  const handleChange = (index: React.ReactText) => {
    if (selectedIndexProp === null) {
      setSelectedIndex(index)
    }
    if (onChange) {
      onChange(index)
    }
  }

  const handleOpenChange = (index: React.ReactText) => {
    const openIndexesDuplicate = openIndexes ? [...openIndexes] : []
    const i = openIndexesDuplicate.indexOf(index)
    if (i !== -1) {
      openIndexesDuplicate.splice(i, 1)
    } else {
      openIndexesDuplicate.push(index)
    }

    if (openIndexesProp === null) {
      setOpenIndexes(openIndexesDuplicate)
    }
    if (onOpenChange) {
      onOpenChange(openIndexesDuplicate)
    }
  }

  return (
    <NavContext.Provider
      value={{
        onChange: handleChange,
        onOpenChange: handleOpenChange,
        openIndexes,
        selectedIndex,
      }}
    >
      <nav className={classSet} {...otherProps}>
        {children}
      </nav>
    </NavContext.Provider>
  )
}

Nav.Divider = Divider
Nav.Group = Group
Nav.Item = Item
Nav.SubNav = SubNav

Nav.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 默认展开的 SubNav indexes，请确保数组项合法，Nav 不会做过多验证
   */
  defaultOpenIndexes: PropTypes.array,
  /**
   * 默认选中的 Nav.Item index
   */
  defaultSelectedIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * 点击 Nav.Item 时的 handler，参数：index
   */
  onChange: PropTypes.func,
  /**
   * Sub 收起 / 展开 时的 handler，参数：index
   */
  onOpenChange: PropTypes.func,
  /**
   * 外部控制：展开的 SubNav indexes，请确保数组项合法，Nav 不会做过多验证
   */
  openIndexes: PropTypes.array,
  /**
   * 外部控制：选中的 Nav.Item index
   */
  selectedIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 设置尺寸大小
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
}

Nav.defaultProps = {
  children: null,
  className: undefined,
  defaultOpenIndexes: [],
  defaultSelectedIndex: null,
  onChange: noop,
  onOpenChange: noop,
  openIndexes: null,
  selectedIndex: null,
  size: "small",
}

export default Nav
