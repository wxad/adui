import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon from "../icon"
import Motion from "../motion"
import "./style"

const prefix = "adui-cp"

export interface ICollapseProps {
  className?: string
  collapsed?: boolean
  content: React.ReactNode
  defaultCollapsed?: boolean
  header: React.ReactNode
  onCollapseChange?: (collapsed: boolean) => void
}

/**
 * 颜色选择器
 */
const ColorPickerCollapse: React.FC<ICollapseProps> = ({
  className,
  collapsed: collapsedProp,
  content,
  defaultCollapsed,
  header,
  onCollapseChange,
}: ICollapseProps) => {
  const [collapsed, setCollapsed] = useState(() => {
    let collapsedState = false

    if (collapsedProp !== undefined) {
      collapsedState = collapsedProp
    } else if (defaultCollapsed !== undefined) {
      collapsedState = defaultCollapsed
    }
    return collapsedState
  })

  // 相当于生命周期 getDerivedStateFromProps
  if (collapsedProp !== undefined && collapsed !== collapsedProp) {
    setCollapsed(!!collapsedProp)
  }

  const handleCollapseChange = () => {
    if (collapsedProp === undefined) {
      setCollapsed(!collapsed)
    }
    if (onCollapseChange) {
      onCollapseChange(!collapsed)
    }
  }

  return (
    <div
      className={classNames(className, `${prefix}-collapse`, {
        [`${prefix}-collapse_collapsed`]: collapsed,
      })}
    >
      <div
        className={`${prefix}-collapse-header`}
        onClick={handleCollapseChange}
        role="none"
      >
        {header}
        <Icon icon="arrow-down" className={`${prefix}-collapse-header-icon`} />
      </div>
      <Motion transition="slide">
        {!collapsed && (
          <div className={`${prefix}-collapse-content`}>{content}</div>
        )}
      </Motion>
    </div>
  )
}

ColorPickerCollapse.propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  content: PropTypes.node,
  defaultCollapsed: PropTypes.bool,
  header: PropTypes.node,
  onCollapseChange: PropTypes.func,
}

ColorPickerCollapse.defaultProps = {
  className: undefined,
  collapsed: undefined,
  defaultCollapsed: undefined,
  header: null,
  content: null,
  onCollapseChange: () => {},
}

export default ColorPickerCollapse
