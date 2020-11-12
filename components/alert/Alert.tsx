import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Icon, { IconNames } from "../icon"
import ICON_INTENTS from "./iconIntents"
import Motion from "../motion"
import { ConfigContext, getComputedSize } from "../config-provider"
import "./style"

const prefix = "adui-alert"

export interface IAlertProps {
  [key: string]: any
  /**
   * 关闭后的 handler，参数 node
   */
  afterClose?: () => void
  /**
   * 附加类名
   */
  className?: string
  /**
   * 是否可关闭
   */
  closable?: boolean
  /**
   * 关闭文字
   */
  closeText?: React.ReactNode
  /**
   * 是否展开，内部驱动
   */
  defaultExpanded?: boolean | null
  /**
   * 展开内容
   */
  expandContent?: React.ReactNode
  /**
   * 是否展开，外部控制
   */
  expanded?: boolean | null
  /**
   * 设置图标
   */
  icon?: IconNames
  /**
   * 设置类型
   */
  intent?: "normal" | "primary" | "success" | "info" | "warning" | "danger"
  /**
   * 关闭时的 handler，参数 node
   */
  onClose?: (node: HTMLElement) => void
  /**
   * 展开状态变化时的 handler，参数为 bool
   */
  onExpandChange?: (expanded: boolean) => void
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium"
  /**
   * 提醒内容
   */
  text: React.ReactNode
  /**
   * 设置主题
   */
  theme?: null | "light"
  /**
   * 提醒标题
   */
  title?: React.ReactNode
}

/**
 * 提醒是内容的常态、即时性提示，展示需要用户即时关注的信息。
 * 与对话框 Dialog 或气泡提示 Popover 不同，提醒 Alert 通常常驻在页面中，与页面内容有更强的关联性。
 */
const Alert: React.FunctionComponent<IAlertProps> = ({
  afterClose,
  className,
  closable,
  closeText,
  defaultExpanded,
  expandContent,
  expanded: expandedProp,
  icon,
  intent,
  onClose,
  onExpandChange,
  size,
  text,
  title,
  theme,
  ...otherProps
}: IAlertProps) => {
  const [expanded, setExpanded] = useState(
    expandedProp !== null && expandedProp !== undefined
      ? expandedProp
      : !!defaultExpanded
  )
  const [closing, setClosing] = useState(false)

  // 相当于生命周期 getDerivedStateFromProps
  if (
    expandedProp !== null &&
    expandedProp !== undefined &&
    expanded !== expandedProp
  ) {
    setExpanded(expandedProp)
  }

  const { size: sizeContext } = useContext(ConfigContext)
  const computedSize = getComputedSize(size, sizeContext)

  const handleClose = () => setClosing(true)

  const handleExpand = () => {
    if (expandedProp === null) {
      setExpanded(!expanded)
    }
    if (onExpandChange) {
      onExpandChange(!expanded)
    }
  }

  const classSet = classNames(
    className,
    `${prefix}-base`,
    `${prefix}-${intent}`,
    `${prefix}-${computedSize}`,
    {
      [`${prefix}-${theme}`]: theme,
    }
  )

  return (
    <Motion
      transition="zoom"
      onLeave={onClose}
      afterLeave={afterClose}
      component="div"
    >
      {!closing && (
        <div className={classSet} {...otherProps}>
          <div className={`${prefix}-inner`}>
            {icon !== null && (
              <Icon
                icon={icon || ICON_INTENTS[intent || "normal"]}
                size={computedSize === "mini" ? 18 : 20}
                className={`${prefix}-icon`}
              />
            )}
            <div className={`${prefix}-text`}>
              {!!title && <div className={`${prefix}-title`}>{title}</div>}
              <div>{text}</div>
              {!!expandContent && (
                <Motion transition="slide" component="div">
                  {expanded && (
                    <div className={`${prefix}-expandContent`}>
                      {" "}
                      {expandContent}{" "}
                    </div>
                  )}
                </Motion>
              )}
            </div>
            {closable && (
              <div
                className={classNames(`${prefix}-close`, {
                  [`${prefix}-close_text`]: !!closeText,
                })}
              >
                {closeText ? (
                  <div
                    className={`${prefix}-closeText`}
                    onClick={handleClose}
                    role="none"
                  >
                    {closeText}
                  </div>
                ) : (
                  <Icon
                    className={`${prefix}-closeIcon`}
                    icon="cancel"
                    onClick={handleClose}
                  />
                )}
              </div>
            )}
            {!!expandContent && (
              <div
                className={`${prefix}-expand`}
                onClick={handleExpand}
                role="none"
              >
                {expanded ? "收起" : "展开"}
              </div>
            )}
          </div>
        </div>
      )}
    </Motion>
  )
}

Alert.propTypes = {
  /**
   * 关闭后的 handler，参数 node
   */
  afterClose: PropTypes.func,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 是否可关闭
   */
  closable: PropTypes.bool,
  /**
   * 关闭文字
   */
  closeText: PropTypes.node,
  /**
   * 是否展开，内部驱动
   */
  defaultExpanded: PropTypes.bool,
  /**
   * 展开内容
   */
  expandContent: PropTypes.node,
  /**
   * 是否展开，外部控制
   */
  expanded: PropTypes.bool,
  /**
   * 设置图标
   */
  icon: PropTypes.any,
  /**
   * 设置类型
   */
  intent: PropTypes.oneOf([
    "normal",
    "primary",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  /**
   * 关闭时的 handler，参数 node
   */
  onClose: PropTypes.func,
  /**
   * 展开状态变化时的 handler，参数为 bool
   */
  onExpandChange: PropTypes.func,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium"]),
  /**
   * 提醒内容
   */
  text: PropTypes.node.isRequired,
  /**
   * 设置主题
   */
  theme: PropTypes.oneOf([null, "light"]),
  /**
   * 提醒标题
   */
  title: PropTypes.node,
}

Alert.defaultProps = {
  afterClose: () => {},
  className: undefined,
  closable: false,
  closeText: null,
  defaultExpanded: null,
  expandContent: null,
  expanded: null,
  icon: undefined,
  intent: "normal",
  onClose: () => {},
  onExpandChange: () => {},
  size: "small",
  theme: null,
  title: null,
}

export default Alert
