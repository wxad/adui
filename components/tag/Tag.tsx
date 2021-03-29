import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { ConfigContext, getComputedSize } from "../config-provider"
import Icon from "../icon"
import "./style"

const prefix = "adui-tag"

export interface ITagProps {
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
   * 自定义颜色
   */
  color?: string | null
  /**
   * 设置类型
   */
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
  /**
   * 指定 Tag 是否可交互，组件将会自动加上 hover active 样式
   */
  interactive?: boolean
  /**
   * 移除时的 handler，设置此 prop 时 Tag 将会忽略 removable prop
   */
  onRemove?: ((e: React.MouseEvent) => void) | null
  /**
   * 是否可移除
   */
  removable?: boolean
  /**
   * 是否圆角
   */
  round?: boolean
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 附加样式
   */
  style?: React.CSSProperties
  /**
   * 主题
   */
  theme?: null | "light"
}

/**
 * 标签展现相关的独立关键词信息，方便用户快速辨别内容属性，也可进行操作。
 */
const Tag: React.FC<ITagProps> = ({
  children,
  className,
  color,
  intent,
  interactive,
  onRemove,
  removable: removableProp,
  round,
  size,
  style,
  theme,
  ...otherProps
}: ITagProps) => {
  const [removed, setRemoved] = useState(false)

  const { size: sizeContext } = useContext(ConfigContext)

  const handleRemove = (e: React.MouseEvent) => {
    setRemoved(true)
    if (onRemove) {
      onRemove(e)
    }
  }

  const removable = !!onRemove || removableProp

  const classSet = classNames(
    className,
    `${prefix}-base`,
    color ? "" : `${prefix}-${intent}`,
    `${prefix}-${getComputedSize(size, sizeContext)}`,
    {
      [`${prefix}-colored`]: !!color,
      [`${prefix}-interactive`]: interactive,
      [`${prefix}-removable`]: removable,
      [`${prefix}-round`]: round,
      [`${prefix}-${theme}`]: theme,
    }
  )

  if (removed) {
    return null
  }

  const colorStyle: React.CSSProperties = {}

  if (color) {
    colorStyle.color = color
  }

  return (
    <div
      className={classSet}
      style={{
        ...colorStyle,
        ...style,
      }}
      {...otherProps}
    >
      <div className={`${prefix}-content`}>
        {children}
        {removable && (
          <Icon
            icon="cancel-circle"
            className={`${prefix}-remove`}
            onClick={handleRemove}
            size={16}
          />
        )}
      </div>
      <div className={`${prefix}-background`} />
      {!theme && <div className={`${prefix}-shadow`} />}
    </div>
  )
}

Tag.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node.isRequired,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 自定义颜色
   */
  color: PropTypes.string,
  /**
   * 设置类型
   */
  intent: PropTypes.oneOf([
    "normal",
    "primary",
    "success",
    "warning",
    "danger",
  ]),
  /**
   * 指定 Tag 是否可交互，组件将会自动加上 hover active 样式
   */
  interactive: PropTypes.bool,
  /**
   * 移除时的 handler，设置此 prop 时 Tag 将会忽略 removable prop
   */
  onRemove: PropTypes.func,
  /**
   * 是否可移除
   */
  removable: PropTypes.bool,
  /**
   * 是否圆角
   */
  round: PropTypes.bool,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 附加样式
   */
  style: PropTypes.object,
  /**
   * 主题
   */
  theme: PropTypes.oneOf([null, "light"]),
}

Tag.defaultProps = {
  className: undefined,
  color: null,
  intent: "normal",
  interactive: false,
  onRemove: null,
  removable: false,
  round: false,
  size: "small",
  style: {},
  theme: null,
}

export default Tag
