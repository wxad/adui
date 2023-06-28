import React, { useMemo } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { color2hsl } from "../_util/color"
import IconSvgPaths from "./IconSvgPaths"
import { IIconNames } from "./IconNames"
import "./style"

const prefix = "adui-icon"

export type IconNames = keyof IIconNames

export interface IIconProps {
  [key: string]: any
  /**
   * 附加类名
   */
  className?: string
  /**
   * 颜色值，支持 rgb(a?), hex 以及 css variable
   */
  color?: string
  /**
   * 图标名称
   */
  icon: IconNames
  /**
   * 是否可交互，组件内部将会根据当前颜色，为其加上 hover active 样式
   */
  interactive?: boolean
  /**
   * 点击事件的 handler
   */
  onClick?: ((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | null
  /**
   * onMouseDown 的 handler
   */
  onMouseDown?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
  /**
   * 自定义图标 path 路径
   */
  paths?: string[]
  /**
   * 尺寸
   */
  size?: number
}

/**
 * 语义化的矢量图形，分为导航、反馈、编辑、工具、图表和生活五种类型。
 */
const Icon: React.FC<IIconProps> & {
  type: string
} = ({
  className,
  color,
  icon,
  interactive: interactiveProp,
  onClick,
  paths,
  size,
  ...otherProps
}: IIconProps) => {
  if (!icon && !paths?.length) {
    return null
  }

  const lightness = useMemo(() => {
    let colorProp = color
    if (colorProp && colorProp.includes("var")) {
      const documentStyle = getComputedStyle(document.documentElement)
      if (documentStyle) {
        colorProp = documentStyle.getPropertyValue(
          colorProp.slice(4, colorProp.length - 1)
        )
      }
      colorProp = "#a3a3a3"
    }
    return color2hsl(colorProp).l
  }, [color])

  const data = IconSvgPaths[icon] || []
  const finalPaths = (paths || data).map((d: string) => (
    <path d={d} key={d} fillRule="evenodd" />
  ))
  const interactive = interactiveProp || !!onClick
  const classSet = classNames(className, `${prefix}-base`, {
    [`${prefix}-interactive`]: interactive,
    [`${prefix}-interactive_level_0`]: interactive && lightness < 0.35,
    [`${prefix}-interactive_level_1`]:
      interactive && lightness < 0.45 && lightness >= 0.35,
    [`${prefix}-interactive_level_2`]:
      interactive && lightness < 0.65 && lightness >= 0.45,
    [`${prefix}-interactive_level_3`]:
      interactive && lightness < 1 && lightness >= 0.65,
    [`${prefix}-interactive_level_white`]: interactive && lightness === 1,
  })

  return (
    <svg
      className={classSet}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill={color}
      data-interactive={interactive}
      data-icon={icon}
      onClick={(e) => {
        if (onClick) {
          onClick(e)
        }
      }}
      {...otherProps}
    >
      {finalPaths}
      {interactive && lightness !== 1 && (
        <g className={`${prefix}-interactive-cover`} fill="#000">
          {finalPaths}
        </g>
      )}
    </svg>
  )
}

Icon.propTypes = {
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 颜色值，支持 rgb(a?), hex 以及 css variable
   */
  color: PropTypes.string,
  /**
   * 图标名称
   */
  icon: PropTypes.any,
  /**
   * 是否可交互，组件内部将会根据当前颜色，为其加上 hover active 样式
   */
  interactive: PropTypes.bool,
  /**
   * 点击事件的 handler
   */
  onClick: PropTypes.func,
  /**
   * onMouseDown 的 handler
   */
  onMouseDown: PropTypes.func,
  /**
   * 自定义图标 path 路径
   */
  paths: PropTypes.array,
  /**
   * 尺寸
   */
  size: PropTypes.number,
}

Icon.defaultProps = {
  className: undefined,
  color: "var(--gray-700)",
  icon: undefined,
  interactive: false,
  onClick: null,
  onMouseDown: undefined,
  paths: undefined,
  size: 18,
}

Icon.type = "Icon"

export default Icon
