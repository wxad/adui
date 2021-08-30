import React, { forwardRef, useState } from "react"
import PropTypes from "prop-types"
import Button, { IButtonProps } from "../button/Button"
import Popover, { IPopoverProps } from "../popover"
import "./style"

const noop = () => {}
const prefix = `adui-popconfirm`

interface IVisibleOptions {
  target?: "cancel" | "confirm"
}

export interface IPopconfirmProps
  extends Omit<IPopoverProps, "onVisibleChange"> {
  cancelButton?: IButtonProps
  cancelText?: React.ReactNode
  confirmButton?: IButtonProps
  confirmText?: React.ReactNode
  onCancel?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void
  onConfirm?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void
  onVisibleChange?: (visible: boolean, options: IVisibleOptions) => void
}

/**
 * 弹出式面板组件。
 */
const Popconfirm: React.ForwardRefExoticComponent<
  IPopconfirmProps & React.RefAttributes<any>
> = forwardRef(
  (
    {
      cancelButton,
      cancelText,
      confirmButton,
      confirmText,
      onCancel,
      onConfirm,
      onVisibleChange,
      popup,
      visible: visibleProp,
      ...otherProps
    }: IPopconfirmProps,
    ref: React.Ref<any>
  ) => {
    const [visible, setVisible] = useState(visibleProp)

    // 相当于生命周期 getDerivedStateFromProps
    if (visibleProp !== null && visible !== visibleProp) {
      setVisible(!!visibleProp)
    }

    const handleClickCancel = (
      e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => {
      // 判断是否由外部控制，如果等于 null 则交由组件自己控制
      if (visibleProp === null) {
        setVisible(false)
      }
      if (onVisibleChange) {
        onVisibleChange(false, { target: "cancel" })
      }
      if (onCancel) {
        onCancel(e)
      }
    }

    const handleClickConfirm = (
      e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => {
      if (visibleProp === null) {
        setVisible(false)
      }
      if (onVisibleChange) {
        onVisibleChange(false, { target: "confirm" })
      }
      if (onConfirm) {
        onConfirm(e)
      }
    }

    const handleVisibleChange = (bool: boolean) => {
      if (visibleProp === null) {
        setVisible(bool)
      }
      if (onVisibleChange) {
        onVisibleChange(bool, {})
      }
    }

    return (
      <Popover
        popup={
          <div>
            <div className={`${prefix}-top`}>{popup}</div>
            <div className={`${prefix}-bottom`}>
              <Button
                onClick={handleClickCancel}
                theme="light"
                {...cancelButton}
              >
                {cancelText}
              </Button>
              <Button
                intent="primary"
                onClick={handleClickConfirm}
                theme="light"
                {...confirmButton}
              >
                {confirmText}
              </Button>
            </div>
          </div>
        }
        visible={visible}
        onVisibleChange={handleVisibleChange}
        ref={ref}
        {...otherProps}
      />
    )
  }
)

Popconfirm.displayName = "Popconfirm"

Popconfirm.propTypes = {
  /**
   * 取消按钮prop
   */
  cancelButton: PropTypes.object,
  /**
   * 取消按钮文本
   */
  cancelText: PropTypes.node,
  /**
   * 确定按钮prop
   */
  confirmButton: PropTypes.object,
  /**
   * 确定按钮文本
   */
  confirmText: PropTypes.node,
  /**
   * 点击取消按钮时的事件
   */
  onCancel: PropTypes.func,
  /**
   * 点击确认按钮时的事件
   */
  onConfirm: PropTypes.func,
  /**
   *  是否显示隐藏的handler
   */
  onVisibleChange: PropTypes.func,
  /**
   * 弹窗自定义内容节点
   */
  popup: PropTypes.node,
  /**
   * 触发弹窗类型
   */
  trigger: PropTypes.string,
  /**
   * 触发弹窗类型
   */
  visible: PropTypes.oneOf([null, true, false]),
}

Popconfirm.defaultProps = {
  cancelButton: {},
  cancelText: "取消",
  confirmButton: {},
  confirmText: "确认",
  onCancel: noop,
  onConfirm: noop,
  onVisibleChange: noop,
  popup: null,
  trigger: "click",
  visible: null,
}

export default Popconfirm
