import React, { useContext } from "react"
import PropTypes from "prop-types"
import CSSMotion from "rc-motion"
import classNames from "classnames"
import warning from "../_util/warning"
import { ConfigContext, getComputedSize } from "../config-provider"
import "./style"

const prefix = "adui-spinner"

export interface ISpinnerProps {
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
   * 设置颜色
   */
  color?: string | null
  /**
   * 设置类型
   */
  intent?: "normal" | "primary" | "success" | "info" | "warning" | "danger"
  /**
   * 设置 Spinner 在有 children 为 false（即空状态）时的最小高度
   */
  minHeight?: number
  /**
   * svg 宽高尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 是否转动
   */
  spinning?: boolean
  /**
   * 附加样式
   */
  style?: React.CSSProperties
  /**
   * 文字提示
   */
  text?: string | null
  /**
   * 指定加载进度
   */
  value?: number | null
}

/**
 * 旋转加载用于告知用户信息内容的加载状态，通常是即时、短时的。
 */
const Spinner: React.FC<ISpinnerProps> = (props: ISpinnerProps) => {
  const {
    children,
    className,
    color,
    intent,
    minHeight,
    size: sizeProp,
    spinning,
    style,
    text,
    value,
    ...otherProps
  } = props || {}
  const isNestedPattern = () => children !== null

  if (value !== null && value !== undefined) {
    warning(
      value >= 0 && value <= 1,
      "Spinner",
      "prop `value` 范围为 0 到 1，请传入在此范围内的数字"
    )
  }

  const classSet = classNames(
    className,
    `${prefix}-base`,
    `${prefix}-${intent}`,
    {
      [`${prefix}-spinning`]: spinning && value === null,
    }
  )

  const { size: sizeContext } = useContext(ConfigContext)
  const size = getComputedSize(sizeProp, sizeContext)

  let dimension
  let strokeWidth

  if (size === "medium") {
    dimension = 28
    strokeWidth = 3
  } else if (size === "mini") {
    dimension = 16
    strokeWidth = 2
  } else if (size === "small") {
    dimension = 20
    strokeWidth = 2.5
  } else {
    dimension = 38
    strokeWidth = 4
  }

  const spinStyle: React.CSSProperties = {}
  const strokeStyle: React.CSSProperties = {}
  if (color) {
    spinStyle.color = color
  }
  if (value !== null && value !== undefined) {
    strokeStyle.strokeDashoffset = `${282.743 - value * 282.743}px`
  }

  const spin = (
    <div
      className={classSet}
      style={{
        ...spinStyle,
        ...(style || {}),
      }}
      {...otherProps}
    >
      <svg
        fill="none"
        width={dimension}
        height={dimension}
        viewBox="0 0 100 100"
        className={`${prefix}-circular`}
      >
        <circle
          className={`${prefix}-track`}
          cx="50%"
          cy="50%"
          r="44"
          strokeWidth={(100 / dimension) * strokeWidth}
        />
        <circle
          className={`${prefix}-head`}
          cx="50%"
          cy="50%"
          r="44"
          strokeWidth={(100 / dimension) * strokeWidth}
          style={{
            strokeDasharray: "282.743px",
            ...strokeStyle,
          }}
        />
      </svg>
      {!!text && <div className={`${prefix}-text`}>{text}</div>}
    </div>
  )

  if (isNestedPattern()) {
    return (
      <CSSMotion motionName="fade">
        {({ className: cls, style: sty }) => {
          return (
            <div
              className={`${cls} ${prefix}-nestedWrapper`}
              style={sty}
              {...otherProps}
            >
              {spinning && spin}
              <div
                className={classNames(`${prefix}-container`, {
                  [`${prefix}-blur`]: spinning,
                })}
                style={{ minHeight }}
              >
                {children}
              </div>
            </div>
          )
        }}
      </CSSMotion>
    )
  }
  return spin
}

Spinner.displayName = "Spinner"

Spinner.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 设置颜色
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
   * 设置 Spinner 在有 children 为 false（即空状态）时的最小高度
   */
  minHeight: PropTypes.number,
  /**
   * svg 宽高尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 是否转动
   */
  spinning: PropTypes.bool,
  /**
   * 附加样式
   */
  style: PropTypes.object,
  /**
   * 文字提示
   */
  text: PropTypes.string,
  /**
   * 指定加载进度
   */
  value: PropTypes.number,
}

Spinner.defaultProps = {
  children: null,
  className: "",
  color: null,
  intent: "normal",
  minHeight: 200,
  size: "small",
  spinning: true,
  style: {},
  text: null,
  value: null,
}

export default Spinner
