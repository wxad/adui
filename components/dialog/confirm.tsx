/**
 * confirm 是将 Dialog 函数式编程的结果。
 * 1. confirm 是为了让使用者方便地函数式调用组件；因此 confirm 方法的 visible 状态是不交给外部处理的；
 * 2. 每次调用 confirm 都会创建一个 Dialog，在 close 时都需要进行 unmountComponentAtNode。
 */
import * as React from "react"
import * as ReactDOM from "react-dom"
import classNames from "classnames"
import Dialog, { IDialogProps } from "./Dialog"
import Icon from "../icon"
import "./style"

const prefix = "adui-dialog"

const ICON_INTENTS = {
  danger: "alert-circle" as "alert-circle",
  info: "info-circle" as "info-circle",
  success: "tick-circle" as "tick-circle",
  warning: "warning" as "warning",
}

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
          <Icon
            className={`${prefix}-intentIcon`}
            size={48}
            icon={ICON_INTENTS[intent]}
          />
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
