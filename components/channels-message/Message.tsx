/* eslint-disable max-len */
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
import "./style"

const prefix = "adui-channels-message"
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
   * 间隔多久自动关闭，单位为 s，如果传入 0，则表示不会自动消失
   */
  duration?: number
  /**
   * Message 插入到哪个元素，默认 () => document.body
   */
  getContainer?: () => HTMLElement
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
      intent,
      onClose,
      ...otherProps
    }: IMessageProps,
    ref: any
  ) => {
    const messageRef = useRef<HTMLDivElement>(null)

    let icon = (
      <svg
        className={`${prefix}-icon`}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6023 1.66667 9.99996 1.66667C5.39759 1.66667 1.66663 5.39763 1.66663 10ZM13.6856 7.11667L9.01949 11.7828L6.71457 9.47785L5.83329 10.3591L8.31438 12.842C8.70481 13.2327 9.33806 13.2329 9.72871 12.8424L14.571 8.00211L13.6856 7.11667Z"
          fill="#07C160"
          fillOpacity="0.9"
        />
      </svg>
    )

    switch (intent) {
      case "normal":
        icon = (
          <svg
            className={`${prefix}-icon`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.99996 18.3333C5.39759 18.3333 1.66663 14.6024 1.66663 10C1.66663 5.39762 5.39759 1.66666 9.99996 1.66666C14.6023 1.66666 18.3333 5.39762 18.3333 10C18.3333 14.6024 14.6023 18.3333 9.99996 18.3333ZM10.625 8.33333V14.1667H9.37496V8.33333H10.625ZM9.99996 7.5C10.4602 7.5 10.8333 7.1269 10.8333 6.66666C10.8333 6.20643 10.4602 5.83333 9.99996 5.83333C9.53972 5.83333 9.16663 6.20643 9.16663 6.66666C9.16663 7.1269 9.53972 7.5 9.99996 7.5Z"
              fill="#10AEFF"
            />
          </svg>
        )
        break
      case "warning":
        icon = (
          <svg
            className={`${prefix}-icon`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.3005 16.0439C18.6855 16.7105 18.2044 17.5439 17.4346 17.5439L2.5653 17.5452C1.79551 17.5452 1.31431 16.712 1.69913 16.0453L9.13254 3.16683C9.51738 2.5001 10.4797 2.50002 10.8646 3.16667L18.3005 16.0439ZM9.37253 7.9541H10.6274L10.5298 12.6758H9.47019L9.37253 7.9541ZM9.28952 14.4043C9.28952 14.79 9.60202 15.0977 9.99753 15.0977C10.3979 15.0977 10.7104 14.79 10.7104 14.4043C10.7104 14.0185 10.3979 13.7158 9.99753 13.7158C9.60202 13.7158 9.28952 14.0185 9.28952 14.4043Z"
              fill="#FA9D3B"
            />
          </svg>
        )
        break
      case "danger":
        icon = (
          <svg
            className={`${prefix}-icon`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.99996 18.3333C5.39759 18.3333 1.66663 14.6024 1.66663 10C1.66663 5.39763 5.39759 1.66667 9.99996 1.66667C14.6023 1.66667 18.3333 5.39763 18.3333 10C18.3333 14.6024 14.6023 18.3333 9.99996 18.3333ZM9.36389 5.11312H10.6342L10.5431 11.4437H9.45504L9.36389 5.11312ZM9.24996 13.5173C9.24996 13.9331 9.58036 14.2521 9.99622 14.2521C10.4235 14.2521 10.7482 13.9331 10.7482 13.5173C10.7482 13.1014 10.4235 12.7824 9.99622 12.7824C9.58036 12.7824 9.24996 13.1014 9.24996 13.5173Z"
              fill="#FA5151"
            />
          </svg>
        )
        break
      default:
        break
    }

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
        {icon}
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
   * 间隔多久自动关闭，单位为 s，如果传入 0，则表示不会自动消失
   */
  duration: PropTypes.number,
  /**
   * Message 插入到哪个元素，默认 () => document.body
   */
  getContainer: PropTypes.func,
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
          message.style.transform = `
          translate3d(var(--message-offset-x),
          calc(${
            56 * (messages.length - 1 - index)
          }px + var(--message-offset-y)), 0)`
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
