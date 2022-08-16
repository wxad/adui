import * as React from "react"
import PropTypes from "prop-types"
import getScrollBarSize from "rc-util/lib/getScrollBarSize"
import classNames from "classnames"
import CSSMotion from "rc-motion"
import omit from "../_util/omit"
import Portal from "../portal"
import Button, { IButtonProps } from "../channels-button"
import Icon from "../icon"
import "./style"

const prefix = "adui-channels-dialog"

interface IStepProps {
  /**
   * 取消按钮的 props，参考 Button Props
   */
  cancelProps?: Partial<IButtonProps>
  /**
   * 取消按钮的 文字
   */
  cancelText?: string
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 确认按钮的 props，参考 Button Props
   */
  confirmProps?: Partial<IButtonProps>
  /**
   * 确认按钮的 文字
   */
  confirmText?: string
  /**
   * 点击取消按钮、右上角关闭时的 handler
   */
  onCancel?: (() => void) | null
  /**
   * 点击确认按钮时的 handler
   */
  onConfirm?: (() => void) | null
}

export interface IDialogProps extends IStepProps {
  [key: string]: any
  /**
   * 关闭后（transition 结束后）的 handler
   */
  afterClose?: (() => void) | null
  /**
   * 设置 body className
   */
  bodyClassName?: string
  /**
   * 设置 body style
   */
  bodyStyle?: React.CSSProperties
  /**
   * dialog 打开和关闭时都会更改 document.body.style。可以以此 prop 控制是否修改。使用场景如：浮层内弹出 dialog
   */
  changeBodyStyle?: boolean
  /**
   * 附加类名，注意 Dialog 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
   */
  className?: string
  /**
   * 指定当前的 step，仅在使用 steps prop 时有作用
   */
  currentStep?: null | number
  /**
   * 指定默认的起始 step，仅在使用 steps prop 时有作用
   */
  defaultCurrentStep?: null | number
  /**
   * 内部驱动：是否默认显示
   */
  defaultVisible?: null | boolean
  /**
   * 是否每次 visible: false 都销毁 dom
   */
  destroyAfterClose?: boolean
  /**
   * 是否支持 ESC 关闭
   */
  escapeKeyClosable?: boolean
  /**
   * 完全自定义 footer 的内容，如果想要改变 footer 父级的样式，使用 footerStyle Prop
   */
  footerElement?: React.ReactNode
  /**
   * 设置 footer className
   */
  footerClassName?: string
  /**
   * 设置 footer style
   */
  footerStyle?: React.CSSProperties
  /**
   * 指定弹出层的父级，默认为 document.body，类似于 Tooltip 的 getPopupContainer
   */
  getContainer?: () => HTMLElement
  /**
   * header 标题下的内容
   */
  headerContent?: React.ReactNode
  /**
   * 完全自定义 header 的内容
   */
  headerElement?: React.ReactNode
  /**
   * 设置 header className
   */
  headerClassName?: string
  /**
   * 设置 header style
   */
  headerStyle?: React.CSSProperties
  /**
   * 点击 mask 是否触发 cancel 事件
   */
  maskClosable?: boolean
  /**
   * 指定步骤，用以快捷上一步、下一步的需求。
   */
  steps?: Array<IStepProps>
  /**
   * 附加样式，注意 Dialog 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
   */
  style?: React.CSSProperties
  /**
   * 对话框标题
   */
  title?: null | React.ReactNode
  /**
   * confirm 为取消、确认按钮；inform 为只有确认按钮
   */
  type?: "confirm" | "inform"
  /**
   * 外部控制：是否显示
   */
  visible?: null | boolean
  /**
   * 设置 z-index 层级，默认为 var(--z-index-dialog)
   */
  zIndex?: React.ReactNode
}

export interface IDialogState {
  visible?: boolean
  currentStep: number
  hasEverOpened?: boolean
}

/**
 * 对话框用于全局性的反馈，通常分为“确认操作”与“告知信息”。
 * 确认操作用于询问用户“操作是否继续进行？”，如大部分的二次确认反馈。告知信息则用于知会用户某个及时反馈，如信息提交成功、失败等。
 */
class Dialog extends React.Component<IDialogProps, IDialogState> {
  public static propTypes = {
    /**
     * 关闭后（transition 结束后）的 handler
     */
    afterClose: PropTypes.func,
    /**
     * 设置 body className
     */
    bodyClassName: PropTypes.string,
    /**
     * 设置 body style
     */
    bodyStyle: PropTypes.object,
    /**
     * 取消按钮的 props，参考 Button Props
     */
    cancelProps: PropTypes.object,
    /**
     * 取消按钮的 文字
     */
    cancelText: PropTypes.node,
    /**
     * dialog 打开和关闭时都会更改 document.body.style。可以以此 prop 控制是否修改。使用场景如：浮层内弹出 dialog
     */
    changeBodyStyle: PropTypes.bool,
    /**
     * 子节点
     */
    children: PropTypes.node,
    /**
     * 附加类名，注意 Dialog 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
     */
    className: PropTypes.string,
    /**
     * 确认按钮的 props，参考 Button Props
     */
    confirmProps: PropTypes.object,
    /**
     * 确认按钮的 文字
     */
    confirmText: PropTypes.node,
    /**
     * 指定当前的 step，仅在使用 steps prop 时有作用
     */
    currentStep: PropTypes.number,
    /**
     * 指定默认的起始 step，仅在使用 steps prop 时有作用
     */
    defaultCurrentStep: PropTypes.number,
    /**
     * 内部驱动：是否默认显示
     */
    defaultVisible: PropTypes.bool,
    /**
     * 是否每次 visible: false 都销毁 dom
     */
    destroyAfterClose: PropTypes.bool,
    /**
     * 是否支持 ESC 关闭
     */
    escapeKeyClosable: PropTypes.bool,
    /**
     * 完全自定义 footer 的内容，如果想要改变 footer 父级的样式，使用 footerStyle Prop
     */
    footerElement: PropTypes.node,
    /**
     * 设置 footer className
     */
    footerClassName: PropTypes.string,
    /**
     * 设置 footer style
     */
    footerStyle: PropTypes.object,
    /**
     * 指定弹出层的父级，默认为 document.body，类似于 Tooltip 的 getPopupContainer
     */
    getContainer: PropTypes.func,
    /**
     * header 标题下的内容
     */
    headerContent: PropTypes.node,
    /**
     * 完全自定义 header 的内容
     */
    headerElement: PropTypes.node,
    /**
     * 设置 header className
     */
    headerClassName: PropTypes.string,
    /**
     * 设置 header style
     */
    headerStyle: PropTypes.object,
    /**
     * 点击 mask 是否触发 cancel 事件
     */
    maskClosable: PropTypes.bool,
    /**
     * 点击取消按钮、右上角关闭时的 handler
     */
    onCancel: PropTypes.func,
    /**
     * 点击确认按钮时的 handler
     */
    onConfirm: PropTypes.func,
    /**
     * 附加样式，注意 Dialog 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
     */
    style: PropTypes.object,
    /**
     * 对话框标题
     */
    title: PropTypes.node,
    /**
     * confirm 为取消、确认按钮；inform 为只有确认按钮
     */
    type: PropTypes.oneOf(["confirm", "inform"]),
    /**
     * 外部控制：是否显示
     */
    visible: PropTypes.bool,
    /**
     * 设置 z-index 层级，默认为 var(--z-index-dialog)
     */
    zIndex: PropTypes.any,
  }

  public static defaultProps: IDialogProps = {
    afterClose: null,
    bodyClassName: "",
    bodyStyle: {},
    cancelProps: {},
    cancelText: "取消",
    changeBodyStyle: true,
    children: null,
    className: undefined,
    confirmProps: {},
    confirmText: "确认",
    currentStep: null,
    defaultCurrentStep: null,
    defaultVisible: null,
    destroyAfterClose: false,
    escapeKeyClosable: true,
    footerElement: undefined,
    footerClassName: "",
    footerStyle: {},
    getContainer: undefined,
    headerContent: null,
    headerClassName: "",
    headerElement: undefined,
    headerStyle: {},
    maskClosable: false,
    onCancel: null,
    onConfirm: null,
    style: {},
    title: null,
    type: "confirm",
    visible: null,
    zIndex: "var(--z-index-dialog)",
  }

  public static info: any

  public static success: any

  public static warning: any

  public static danger: any

  public static confirm: any

  public static inform: any

  public static getDerivedStateFromProps = (
    { currentStep, visible }: IDialogProps,
    { hasEverOpened }: IDialogState
  ) => {
    const newState: Partial<IDialogState> = {}
    if (currentStep !== null) {
      newState.currentStep = currentStep
    }
    if (visible !== null) {
      newState.visible = visible
      if (!hasEverOpened && visible) {
        newState.hasEverOpened = true
      }
    }
    return Object.keys(newState).length > 0 ? newState : null
  }

  /**
   * 保存节点挂载的对象
   */
  public container: HTMLDivElement | null

  /**
   * 保存页面是否 overflow
   */
  public bodyIsOverflowing: boolean

  /**
   * 保存当前浏览器的滚动条宽度
   */
  public scrollbarWidth: number

  public dialog: HTMLDivElement

  public wrapper: HTMLDivElement

  public isUnmounted: boolean = false

  constructor(props: IDialogProps) {
    super(props)
    const { currentStep, defaultCurrentStep, visible, defaultVisible } = props
    const visibleState = visible !== null ? !!visible : !!defaultVisible
    const currentStepState =
      currentStep !== null ? currentStep : defaultCurrentStep

    this.state = {
      visible: visibleState,
      currentStep: currentStepState || 0,
      hasEverOpened: visibleState,
    }
  }

  public saveDialog = (node: HTMLDivElement) => {
    this.dialog = node
  }

  public resetScrollbarPadding = () => {
    const { changeBodyStyle } = this.props
    if (changeBodyStyle) {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }

  public setScrollbarPadding = () => {
    const { changeBodyStyle } = this.props
    if (changeBodyStyle) {
      const { innerWidth } = window
      this.bodyIsOverflowing = document.body.clientWidth < innerWidth
      if (this.bodyIsOverflowing && !document.body.style.paddingRight) {
        this.scrollbarWidth = getScrollBarSize()
        if (this.scrollbarWidth !== undefined) {
          document.body.style.paddingRight = `${this.scrollbarWidth}px`
        }
      }
      document.body.style.overflow = "hidden"
    }
  }

  public getCancelButton = () => {
    const { cancelProps, cancelText, steps, type } = this.props
    const { currentStep } = this.state
    const defaultText = currentStep === 0 ? "取消" : "上一步"
    const generateButton = (props?: IButtonProps, text = defaultText) => (
      <Button key="cancel" theme="light" onClick={this.handleCancel} {...props}>
        {text}
      </Button>
    )

    if (steps && steps.length) {
      const props = steps[currentStep].cancelProps
      const text = steps[currentStep].cancelText
      return generateButton(props, text)
    }
    if (type === "inform") {
      return null
    }
    return generateButton(cancelProps, cancelText)
  }

  public getConfirmButton = () => {
    const { confirmProps, confirmText, steps } = this.props
    const { currentStep } = this.state
    const generateButton = (props?: IButtonProps, text?: string) => (
      <Button
        key="primary"
        intent="primary"
        onClick={this.handleConfirm}
        {...props}
      >
        {text}
      </Button>
    )

    if (steps && steps.length) {
      const props = steps[currentStep].confirmProps
      const text =
        steps[currentStep].confirmText ||
        (currentStep === steps.length - 1 ? "完成" : "下一步")
      return generateButton(props, text)
    }
    return generateButton(confirmProps, confirmText || "确认")
  }

  public handleKeyDown = (e: React.KeyboardEvent) => {
    const { escapeKeyClosable } = this.props
    if (escapeKeyClosable && e.key === "Escape") {
      e.stopPropagation()
      this.handleCancel()
    }
  }

  public handleCancel = (type?: any) => {
    const { onCancel, steps, visible } = this.props
    const { currentStep } = this.state
    if (type === "close" || !steps || !steps.length) {
      if (visible === null) {
        this.setState({ visible: false })
      }
      if (onCancel) {
        onCancel()
      }
    } else {
      const { onCancel: onStepCancel } = steps[currentStep]
      if (onStepCancel) {
        onStepCancel()
      }
      if (currentStep === 0) {
        if (visible === null) {
          this.setState({ visible: false })
        }
      } else {
        this.setState({ currentStep: currentStep - 1 })
      }
    }
  }

  public handleConfirm = () => {
    const { onConfirm, steps, visible } = this.props
    const { currentStep } = this.state
    if (steps && steps.length) {
      const { onConfirm: onStepConfirm } = steps[currentStep]
      if (onStepConfirm) {
        onStepConfirm()
      }
      if (currentStep === steps.length - 1) {
        if (visible === null) {
          this.setState({ visible: false })
        }
      } else {
        this.setState({ currentStep: currentStep + 1 })
      }
    } else {
      if (visible === null) {
        this.setState({ visible: false })
      }
      if (onConfirm) {
        onConfirm()
      }
    }
  }

  public onLeave = () => {
    console.log("yijie", "onLeave")
    const { afterClose, destroyAfterClose } = this.props
    if (this.wrapper) {
      this.wrapper.style.display = "none"
    }
    this.resetScrollbarPadding()

    if (afterClose) {
      afterClose()
    }

    if (destroyAfterClose && !this.isUnmounted) {
      this.setState({ hasEverOpened: false })
    }
  }

  public handleEnter = () => {
    console.log("yijie", "onEnter")
    const { escapeKeyClosable } = this.props
    if (this.wrapper) {
      if (escapeKeyClosable) {
        this.wrapper.focus()
      }
    }
  }

  public getComponent = (options?: { visible: boolean }) => {
    const {
      bodyClassName,
      bodyStyle,
      children,
      className,
      destroyAfterClose,
      footerClassName,
      footerElement,
      footerStyle,
      headerClassName,
      headerContent,
      headerElement,
      headerStyle,
      maskClosable,
      steps,
      style,
      title,
      zIndex: zIndexProp,
      ...otherProps
    } = this.props

    const zIndex = zIndexProp as React.CSSProperties["zIndex"]

    const restProps = omit(otherProps, [
      "afterClose",
      "cancelProps",
      "cancelText",
      "changeBodyStyle",
      "confirmProps",
      "confirmText",
      "currentStep",
      "defaultCurrentStep",
      "defaultVisible",
      "escapeKeyClosable",
      "getContainer",
      "onCancel",
      "onConfirm",
      "type",
      "visible",
    ])

    const classSet = classNames(className, `${prefix}-inner`)
    const { currentStep } = this.state
    let { visible } = this.state
    if (options && Object.keys(options).includes("visible")) {
      ;({ visible } = options)
    }

    return (
      <div ref={this.saveDialog}>
        <div
          className={`${prefix}-wrapper`}
          ref={(wrapper) => {
            if (wrapper) {
              this.wrapper = wrapper
            }
          }}
          style={{
            display: visible ? "flex" : "",
            zIndex,
          }}
          tabIndex={0}
          role="none"
          onKeyDown={this.handleKeyDown}
        >
          <CSSMotion
            motionName={`${prefix}-mask`}
            visible={visible}
            removeOnLeave={destroyAfterClose}
          >
            {({ className: cls }, ref) => (
              <div
                ref={ref}
                className={classNames(`${prefix}-mask`, cls)}
                role="none"
                onClick={() => {
                  if (maskClosable) {
                    this.handleCancel("close")
                  }
                }}
              />
            )}
          </CSSMotion>
          {/**
           * https://stackoverflow.com/a/33455342
           * 1. 最外层 margin: auto 非常重要。
           * Dialog 的宽度是自适应的，因此使用了 display: flex 处理居中，这使得子元素具有包裹性，因此宽度才能由内容所决定；
           * margin: auto; 是为了完善 flexbox overflow 的样式。
           * 2. zIndex: 1 是为了覆盖在 mask 上。
           */}
          <CSSMotion
            onAppearStart={this.handleEnter}
            onEnterStart={this.handleEnter}
            onLeaveEnd={this.onLeave}
            motionName={prefix}
            visible={visible}
            removeOnLeave={destroyAfterClose}
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
                {...restProps}
              >
                {headerElement === null
                  ? null
                  : headerElement || (
                      <div
                        className={`${prefix}-header ${headerClassName}`}
                        style={headerStyle}
                      >
                        {[
                          <div key={0} className={`${prefix}-title`}>
                            {title}
                          </div>,
                          <div key={1}>
                            {headerContent && (
                              <div className={`${prefix}-headerContent`}>
                                {headerContent}
                              </div>
                            )}
                          </div>,
                          <Icon
                            key={2}
                            className={`${prefix}-close`}
                            size={24}
                            icon="cancel"
                            onClick={() => this.handleCancel("close")}
                          />,
                        ]}
                      </div>
                    )}
                <div
                  className={`${prefix}-body ${bodyClassName}`}
                  style={bodyStyle}
                >
                  {steps && steps.length
                    ? steps[currentStep].children
                    : children}
                </div>
                {footerElement === null ? null : (
                  <div
                    className={`${prefix}-footer ${footerClassName}`}
                    style={footerStyle}
                  >
                    {footerElement || [
                      this.getCancelButton(),
                      this.getConfirmButton(),
                    ]}
                  </div>
                )}
              </div>
            )}
          </CSSMotion>
        </div>
      </div>
    )
  }

  /**
   * didmount 由 portal 的 onChildrenMount，因为 didmount 时 wrapper 可能并不在 dom
   */
  public handleChildrenMount = () => {
    const { visible } = this.state
    if (visible && this.wrapper) {
      this.setScrollbarPadding()
    }
  }

  public componentDidUpdate = (
    _: IDialogProps,
    { visible: visiblePrev }: IDialogState
  ) => {
    const { visible } = this.state
    if (visible !== visiblePrev && visible && this.wrapper) {
      this.setScrollbarPadding()
    }
  }

  public componentWillUnmount = () => {
    const { visible } = this.state
    this.isUnmounted = true
    if (visible) {
      this.resetScrollbarPadding()
    }
  }

  public render() {
    const { getContainer } = this.props
    const { hasEverOpened } = this.state
    if (!hasEverOpened) {
      return null
    }
    return (
      <Portal
        onChildrenMount={this.handleChildrenMount}
        getContainer={getContainer}
      >
        {this.getComponent()}
      </Portal>
    )
  }
}

export default Dialog
