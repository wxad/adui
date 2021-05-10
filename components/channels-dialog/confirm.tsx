/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/**
 * confirm 是将 Dialog 函数式编程的结果。
 * 1. confirm 是为了让使用者方便地函数式调用组件；因此 confirm 方法的 visible 状态是不交给外部处理的；
 * 2. 每次调用 confirm 都会创建一个 Dialog，在 close 时都需要进行 unmountComponentAtNode。
 */
import * as React from "react"
import * as ReactDOM from "react-dom"
import classNames from "classnames"
import Dialog, { IDialogProps } from "./Dialog"
import "./style"

const prefix = "adui-channels-dialog"
export interface IConfirmProps extends IDialogProps {
  content?: React.ReactNode
  contentTitle?: React.ReactNode
  contentText?: React.ReactNode
  intent?: "danger" | "info" | "success" | "warning"
  onClose?: (func?: (() => void) | null) => void
}

/**
 * content, contentTitle, contentText, intent 都不是 Dialog 直接处理的 prop；
 * 其中，content 其实就是 children，
 * contentTitle、contentText 是专门提供给 .info .success .warning .danger 的 prop。
 */
const Confirm = (props: IConfirmProps) => {
  const {
    afterClose,
    content,
    contentTitle,
    contentText,
    intent,
    onCancel,
    onClose,
    onConfirm,
    ...otherProps
  } = props

  return (
    <Dialog
      afterClose={afterClose}
      destroyAfterClose
      onCancel={() => {
        if (onClose) {
          onClose(onCancel)
        }
      }}
      onConfirm={() => {
        if (onClose) {
          onClose(onConfirm)
        }
      }}
      {...otherProps}
    >
      {intent ? (
        <div
          className={classNames(
            `${prefix}-intentWrapper`,
            `${prefix}-${intent}`,
            {
              [`${prefix}-intentWrapper_center`]: !contentTitle || !contentText,
            }
          )}
        >
          {intent === "danger" ? (
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className={`${prefix}-intentIcon`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24ZM41.6 24C41.6 33.7202 33.7202 41.6 24 41.6C14.2798 41.6 6.4 33.7202 6.4 24C6.4 14.2798 14.2798 6.4 24 6.4C33.7202 6.4 41.6 14.2798 41.6 24ZM25.3184 12.8623L25.1426 26.9834H22.8574L22.6816 12.8623H25.3184ZM22.3301 32.4766C22.3301 33.4141 23.0625 34.1465 24 34.1465C24.9521 34.1465 25.6699 33.4141 25.6699 32.4766C25.6699 31.5244 24.9521 30.8066 24 30.8066C23.0625 30.8066 22.3301 31.5244 22.3301 32.4766Z"
                fill="#fa5151"
              />
            </svg>
          ) : (
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className={`${prefix}-intentIcon`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24ZM41.6 24C41.6 33.7202 33.7202 41.6 24 41.6C14.2798 41.6 6.4 33.7202 6.4 24C6.4 14.2798 14.2798 6.4 24 6.4C33.7202 6.4 41.6 14.2798 41.6 24ZM25.2 20V34H22.8V20H25.2ZM24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18Z"
                fill={intent === "info" ? "#10aeff" : "#000"}
              />
            </svg>
          )}
          <div className={`${prefix}-intentContent`}>
            {!!contentTitle && (
              <div className={`${prefix}-intentTitle`}>{contentTitle}</div>
            )}
            {!!contentText && (
              <div className={`${prefix}-intentText`}>{contentText}</div>
            )}
          </div>
        </div>
      ) : (
        content
      )}
    </Dialog>
  )
}

const confirm = (config: IConfirmProps) => {
  const container = document.createElement("div")
  document.body.appendChild(container)

  function afterClose() {
    const unmountResult = ReactDOM.unmountComponentAtNode(container)
    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container)
    }
  }

  /**
   * 这里挂载到 container 实际上是空的，因为 Dialog 自身会去解决挂载；
   * 因此每一次 render 都会有两个 div append 到 dom 中，一个为空，即这个，另一个为 Dialog。
   */
  function render(props: IConfirmProps) {
    ReactDOM.render(<Confirm {...props} />, container)
  }

  let currentConfig: any = {}

  /**
   * 关闭时一定要执行 afterClose，Dialog 自身会去 destroy，但是那个空的 div 需要在这里 destory。
   */
  function onClose(cb: () => void) {
    currentConfig = {
      ...currentConfig,
      afterClose,
      visible: false,
    }
    render(currentConfig)
    if (cb) {
      cb()
    }
  }

  currentConfig = {
    ...config,
    afterClose,
    onClose,
    visible: true,
  }

  function update(newConfig: IConfirmProps) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    }
    render(currentConfig)
  }

  render(currentConfig)

  return {
    destroy: onClose,
    update,
  }
}

export default confirm
