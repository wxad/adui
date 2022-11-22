import React, { useEffect, useMemo, useRef, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import CSSMotion from "rc-motion"
import getScrollBarSize from "rc-util/lib/getScrollBarSize"
import Button from "../button"
import Portal from "../portal"
import "./style"

const prefix = "adui-drawer"

type TPlacement = "top" | "right" | "bottom" | "left"

export interface IDrawerProps {
  [key: string]: any
  /**
   * 关闭后（transition 结束后）的 handler
   */
  afterClose?: (() => void) | null
  /**
   * visible 时页面能否滚动
   */
  bodyScrollable?: boolean
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 附加类名，注意 Drawer 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
   */
  className?: string
  /**
   * 是否每次 visible: false 都销毁 dom
   */
  destroyAfterClose?: boolean
  /**
   * 是否支持 ESC 关闭
   */
  escapeKeyClosable?: boolean
  /**
   * header 标题栏内部的内容
   */
  headerContent?: React.ReactNode
  /**
   * 完全自定义 header 的内容
   */
  headerElement?: React.ReactNode
  /**
   * 设置 header 样式
   */
  headerStyle?: React.CSSProperties
  /**
   * mask 的类名
   */
  maskClassName?: string
  /**
   * 点击 mask 是否触发 cancel 事件
   */
  maskClosable?: boolean
  /**
   * mask 的样式
   */
  maskStyle?: React.CSSProperties
  /**
   * 是否显示 mask
   */
  maskVisible?: boolean
  /**
   * 设置 mask 的 CSS Motion name
   */
  maskMotionName?: string
  /**
   * 设置 dialog 的 CSS Motion name
   */
  getMotionName?: (placement: TPlacement) => string
  /**
   * 关闭时的 handler
   */
  onClose?: (() => void) | null
  /**
   * 位置
   */
  placement?: TPlacement
  /**
   * 尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 外部控制：是否显示
   */
  visible?: boolean
  /**
   * 设置 z-index 层级，默认为 var(--z-index-dialog)
   */
  zIndex?: React.ReactNode
}

/**
 * 浮层覆盖在页面内容上，并固定在屏幕的边缘。
 */
const Drawer: React.FC<IDrawerProps> = ({
  afterClose,
  bodyScrollable,
  children,
  className,
  destroyAfterClose,
  escapeKeyClosable,
  headerContent,
  headerElement,
  headerStyle,
  maskClassName,
  maskClosable,
  maskStyle,
  maskVisible,
  maskMotionName,
  getMotionName = () => "",
  onClose,
  placement = "right",
  size,
  style,
  visible,
  zIndex: zIndexProp,
  ...otherProps
}: IDrawerProps) => {
  const zIndex = zIndexProp as React.CSSProperties["zIndex"]
  const [hasEverOpened, setHasEverOpened] = useState(visible)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const scrollbarWidth = useMemo(getScrollBarSize, [])
  let bodyIsOverflowing = false

  const setScrollbarPadding = ({
    bodyScrollable: bodyScrollableParam,
  }: {
    bodyScrollable?: boolean
  }) => {
    const { innerWidth } = window
    bodyIsOverflowing = document.body.clientWidth < innerWidth
    if (bodyIsOverflowing && !document.body.style.paddingRight) {
      if (scrollbarWidth !== undefined) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
    }

    if (bodyScrollableParam) {
      document.body.classList.add("adui-scrollbar-hidden")
    } else {
      document.body.style.overflow = "hidden"
    }
  }

  const resetScrollbarPadding = () => {
    document.body.classList.remove("adui-scrollbar-hidden")
    document.body.style.overflow = ""
    document.body.style.paddingRight = ""
  }

  useEffect(() => {
    if (visible && wrapperRef.current) {
      setScrollbarPadding({ bodyScrollable })
    }
  }, [visible])

  useEffect(() => resetScrollbarPadding, [])

  // 相当于生命周期 getDerivedStateFromProps
  if (visible && !hasEverOpened) {
    setHasEverOpened(true)
  }

  const handleChildrenMount = () => {
    if (visible) {
      setScrollbarPadding({ bodyScrollable })
    }
  }

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (escapeKeyClosable && e.key === "Escape") {
      e.stopPropagation()
      handleClose()
    }
  }

  const handleEnter = () => {
    if (escapeKeyClosable && wrapperRef.current) {
      wrapperRef.current.focus()
    }
  }

  const handleLeave = () => {
    if (wrapperRef.current) {
      wrapperRef.current.style.display = "none"
    }
    resetScrollbarPadding()

    if (afterClose) {
      afterClose()
    }

    if (destroyAfterClose) {
      setHasEverOpened(false)
    }
  }

  const classSet = classNames(
    className,
    `${prefix}-${placement}`,
    `${prefix}-${size}`,
    `${prefix}-inner`
  )

  const getComponent = () => {
    return (
      <div
        className={`${prefix}-wrapper`}
        ref={wrapperRef}
        style={{
          display: visible ? "block" : "",
          zIndex,
        }}
        tabIndex={0}
        role="none"
        onKeyDown={handleKeyDown}
      >
        <CSSMotion
          motionName={maskMotionName || `${prefix}-mask`}
          visible={visible && maskVisible}
        >
          {({ className: cls }, ref) => (
            <div
              ref={ref}
              className={classNames(`${prefix}-mask`, maskClassName, cls)}
              role="none"
              style={maskStyle}
              onClick={() => {
                if (maskClosable) {
                  handleClose()
                }
              }}
            />
          )}
        </CSSMotion>
        <CSSMotion
          onAppearStart={handleEnter}
          onEnterStart={handleEnter}
          onLeaveEnd={handleLeave}
          motionName={getMotionName(placement) || `${prefix}-${placement}`}
          visible={visible}
        >
          {({ className: cls }, ref) => (
            <div
              ref={ref}
              className={classNames(classSet, cls)}
              style={{
                margin: "auto",
                zIndex: 1,
                ...style,
              }}
              {...otherProps}
            >
              {headerElement === null
                ? null
                : headerElement || (
                    <div className={`${prefix}-header`} style={headerStyle}>
                      <Button
                        theme="light"
                        size="medium"
                        leftIcon="cancel"
                        className={`${prefix}-header-close`}
                        onClick={() => handleClose()}
                      />
                      <i className={`${prefix}-header-divider`} />
                      {headerContent && (
                        <div className={`${prefix}-header-content`}>
                          {headerContent}
                        </div>
                      )}
                    </div>
                  )}
              <div className={`${prefix}-body`}>{children}</div>
            </div>
          )}
        </CSSMotion>
      </div>
    )
  }

  if (!hasEverOpened) {
    return null
  }

  return <Portal onChildrenMount={handleChildrenMount}>{getComponent()}</Portal>
}

Drawer.displayName = "Drawer"

Drawer.propTypes = {
  /**
   * 关闭后（transition 结束后）的 handler
   */
  afterClose: PropTypes.func,
  /**
   * visible 时页面能否滚动
   */
  bodyScrollable: PropTypes.bool,
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名，注意 Dialog 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
   */
  className: PropTypes.string,
  /**
   * 是否每次 visible: false 都销毁 dom
   */
  destroyAfterClose: PropTypes.bool,
  /**
   * 是否支持 ESC 关闭
   */
  escapeKeyClosable: PropTypes.bool,
  /**
   * header 标题栏内部的内容
   */
  headerContent: PropTypes.node,
  /**
   * 完全自定义 header 的内容
   */
  headerElement: PropTypes.node,
  /**
   * 设置 header 样式
   */
  headerStyle: PropTypes.object,
  /**
   * mask 的类名
   */
  maskClassName: PropTypes.string,
  /**
   * 点击 mask 是否触发 cancel 事件
   */
  maskClosable: PropTypes.bool,
  /**
   * mask 的样式
   */
  maskStyle: PropTypes.object,
  /**
   * 是否显示 mask
   */
  maskVisible: PropTypes.bool,
  /**
   * 关闭时的 handler
   */
  onClose: PropTypes.func,
  /**
   * 位置
   */
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /**
   * 尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 外部控制：是否显示
   */
  visible: PropTypes.bool,
  /**
   * 设置 z-index 层级，默认为 var(--z-index-dialog)
   */
  zIndex: PropTypes.any,
}

Drawer.defaultProps = {
  afterClose: null,
  bodyScrollable: true,
  children: null,
  className: undefined,
  destroyAfterClose: false,
  escapeKeyClosable: true,
  headerContent: null,
  headerElement: undefined,
  headerStyle: {},
  maskClassName: undefined,
  maskClosable: false,
  maskStyle: {},
  maskVisible: false,
  maskMotionName: "",
  getMotionName: () => "",
  onClose: null,
  placement: "right",
  size: "medium",
  visible: false,
  zIndex: "var(--z-index-dialog)",
}

export default Drawer
