import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"
import * as ReactDOM from "react-dom"
import PropTypes from "prop-types"
import classNames from "classnames"
import Button from "../button"
import Icon, { IconNames } from "../icon"
import ICON_INTENTS from "../alert/iconIntents"
import "./style"

const prefix = "adui-message"
const INTENTS = ["normal", "primary", "success", "warning", "danger"]

export interface IMessageProps {
  [key: string]: any
  /**
   * 行动按钮的配置，如：action: { text: "解锁", onClick: () => { message.destroy() } }
   */
  action?: { text: string; onClick: () => void } | null
  /**
   * 附加类名
   */
  className?: string
  /**
   * 是否显示关闭 Icon，如果需要只支持手动关闭，还需要传入 duration: 0
   */
  closable?: boolean
  /**
   * 内容
   */
  content?: React.ReactNode
  /**
   * 间隔多久自动关闭，单位为 s，如果传入 0，则表示不会自动消失
   */
  duration?: number
  /**
   * Message 插入到哪个元素，默认 () => document.body
   */
  getContainer?: () => HTMLElement
  /**
   * 设置图标
   */
  icon?: IconNames
  /**
   * 设置类型
   */
  intent: "normal" | "primary" | "success" | "warning" | "danger"
  /**
   * 关闭时的 handler
   */
  onClose?: (() => void) | null
}

export interface IMessage
  extends React.ForwardRefExoticComponent<
    IMessageProps & React.RefAttributes<HTMLDivElement>
  > {
  normal: any
  primary: any
  success: any
  warning: any
  danger: any
}

/**
 * 全局提醒用于全局性地展示需要即时性关注的信息。
 */
// @ts-ignore
const Message: IMessage = forwardRef(
  (
    {
      action,
      className,
      closable,
      content,
      duration,
      getContainer,
      icon,
      intent,
      onClose,
      ...otherProps
    }: IMessageProps,
    ref: any
  ) => {
    const messageRef = useRef<HTMLDivElement>(null)

    let timer: null | ReturnType<typeof setTimeout>

    const clearCloseTimer = () => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    }

    const close = () => {
      if (messageRef && messageRef.current) {
        messageRef.current.style.opacity = "0"
        messageRef.current.style.visibility = "hidden"
        messageRef.current.style.webkitFilter = "blur(4px)"
        messageRef.current.style.filter = "blur(4px)"
      }
      clearCloseTimer()
      if (onClose) {
        onClose()
      }
    }

    const setCloseTimer = () => {
      if (duration) {
        timer = setTimeout(() => {
          close()
        }, duration * 1000)
      }
    }

    useEffect(() => {
      setCloseTimer()
      return clearCloseTimer
    }, [])

    useImperativeHandle(ref, () => ({
      close,
      getDomNode: () => messageRef.current,
    }))

    const hasActions = action || closable

    return (
      <div
        className={classNames(
          className,
          `${prefix}-base`,
          `${prefix}-${intent}`,
          {
            [`${prefix}-hasActions`]: hasActions,
          }
        )}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={setCloseTimer}
        ref={messageRef}
        data-duration={duration}
        {...otherProps}
      >
        <Icon
          icon={icon || ICON_INTENTS[intent]}
          size={20}
          className={`${prefix}-icon`}
        />
        <div className={`${prefix}-content`}>{content}</div>
        {hasActions && (
          <div className={`${prefix}-actions`}>
            {action && (
              <div className={`${prefix}-action`}>
                <Button
                  theme="light"
                  onClick={() => {
                    const { onClick } = action
                    if (onClick) {
                      onClick()
                    }
                  }}
                >
                  {action.text}
                </Button>
              </div>
            )}
            {closable && (
              <Button leftIcon="cancel" theme="light" onClick={close} />
            )}
          </div>
        )}
      </div>
    )
  }
)

Message.displayName = "Message"

Message.propTypes = {
  /**
   * 行动按钮的配置，如：action: { text: "解锁", onClick: () => { message.destroy() } }
   */
  action: PropTypes.any,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 是否显示关闭 Icon，如果需要只支持手动关闭，还需要传入 duration: 0
   */
  closable: PropTypes.bool,
  /**
   * 内容
   */
  content: PropTypes.node,
  /**
   * 间隔多久自动关闭，单位为 s，如果传入 0，则表示不会自动消失
   */
  duration: PropTypes.number,
  /**
   * Message 插入到哪个元素，默认 () => document.body
   */
  getContainer: PropTypes.func,
  /**
   * 设置图标
   */
  icon: PropTypes.any,
  /**
   * 设置类型
   */
  intent: PropTypes.any,
  /**
   * 关闭时的 handler
   */
  onClose: PropTypes.func,
}

Message.defaultProps = {
  action: null,
  className: undefined,
  closable: false,
  content: null,
  duration: 2,
  getContainer: undefined,
  icon: undefined,
  intent: "normal",
  onClose: null,
}

const newInstance = (props: IMessageProps) => {
  let instances = Array.from(
    document.getElementsByClassName(`${prefix}-wrapper`)
  )
  instances = instances.filter(
    (o: HTMLDivElement) => o.dataset.close !== "true"
  )
  if (instances && instances.length > 2) {
    const firstInstance = instances[0] as HTMLElement
    const firstChild = firstInstance.children[0] as HTMLElement
    if (firstChild.dataset.duration !== "0") {
      firstInstance.dataset.close = "true"
      firstChild.style.opacity = "0"
      firstChild.style.visibility = "hidden"
      firstChild.style.webkitFilter = "blur(4px)"
      firstChild.style.filter = "blur(4px)"
    }
  }

  let instance: any

  const { onClose, getContainer, ...otherProps } = props
  const container = document.createElement("div")
  container.className = `${prefix}-wrapper`
  if (getContainer) {
    getContainer().appendChild(container)
  } else {
    document.body.appendChild(container)
  }

  const updateStyles = () => {
    setTimeout(() => {
      const messages = document.getElementsByClassName(`${prefix}-wrapper`)
      Array.prototype.forEach.call(
        messages,
        (message: HTMLDivElement, index: number) => {
          message.style.opacity = "1"
          message.style.transform = `translate3d(0, ${
            56 * (messages.length - 1 - index)
          }px, 0)`
        }
      )
    }, 50)
  }

  updateStyles()

  const close = () => {
    if (onClose) {
      onClose()
    }
    setTimeout(() => {
      const unmountResult = ReactDOM.unmountComponentAtNode(container)
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container)
        updateStyles()
      }
    }, 300)
  }

  ReactDOM.render(
    <Message
      ref={(message) => {
        instance = message
      }}
      onClose={close}
      {...otherProps}
    />,
    container
  )

  return {
    destroy: () => {
      if (instance) {
        instance.close()
      }
    },
  }
}

INTENTS.forEach(
  (intent: "normal" | "primary" | "success" | "warning" | "danger") => {
    Message[intent] = (config: IMessageProps | string) => {
      let cnfg = { intent } as IMessageProps
      if (typeof config === "string") {
        cnfg = { content: config, intent }
      } else {
        cnfg = config
      }
      return newInstance({
        ...cnfg,
        intent,
      })
    }
  }
)

export default Message
