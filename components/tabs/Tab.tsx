import React, { useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { TabsContext } from "./Context"
import "./style"

const prefix = "adui-tabs"

export interface ITabProps {
  [key: string]: any
  /**
   * 附加类名
   */
  className?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 点击事件的 handler
   */
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
  /**
   * 附加样式
   */
  style?: React.CSSProperties
  /**
   * 标签文字
   */
  title: React.ReactNode
  /**
   * value
   */
  value?: React.ReactText
}

/**
 * 导航页签 - Tab
 */
const Tab: React.FC<ITabProps> = ({
  className,
  disabled: disabledProp,
  onClick,
  style,
  title,
  value,
  ...otherProps
}: ITabProps) => {
  const {
    disabled: disabledContext,
    gutter: gutterContext,
    handleTabsValueChange,
    value: valueContext,
  } = useContext(TabsContext)

  const disabled = disabledProp || disabledContext

  const classSet = classNames(className, `${prefix}-tab`, {
    [`${prefix}-active`]: value === valueContext,
    [`${prefix}-disabled`]: disabled,
  })

  const additionStyle: React.CSSProperties = {}
  if (gutterContext !== undefined) {
    additionStyle.marginRight = `${gutterContext}px`
  }

  const handleClick = () => {
    if (
      value !== undefined &&
      !(disabled || disabledContext) &&
      handleTabsValueChange
    ) {
      handleTabsValueChange(value)
    }
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      aria-disabled={disabled}
      aria-selected={value === valueContext}
      className={classSet}
      key={value}
      onClick={handleClick}
      onKeyDown={({ keyCode }: React.KeyboardEvent<HTMLDivElement>) => {
        if (keyCode === 13) {
          handleClick()
        }
      }}
      role="tab"
      tabIndex={-1}
      style={{
        ...additionStyle,
        ...style,
      }}
      {...otherProps}
    >
      {title}
    </div>
  )
}

Tab.propTypes = {
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 点击事件的 handler
   */
  onClick: PropTypes.func,
  /**
   * 附加样式
   */
  style: PropTypes.object,
  /**
   * 标签文字
   */
  title: PropTypes.node.isRequired,
  /**
   * value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

Tab.defaultProps = {
  className: undefined,
  disabled: false,
  onClick: () => {},
  style: {},
}

export default Tab
