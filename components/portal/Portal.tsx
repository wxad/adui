import * as React from "react"
import * as ReactDOM from "react-dom"
import shallowEqual from "shallowequal"

/** Detect if `React.createPortal()` API method does not exist. */
const cannotCreatePortal = typeof ReactDOM.createPortal !== "function"

const maybeAddClass = (classList: DOMTokenList, className?: string) => {
  if (className != null && className !== "") {
    classList.add(...className.split(" "))
  }
}

export interface IPortalProps {
  /**
   * 附加类名，此类名会增加到最外层的包含块上
   */
  className?: string
  /**
   * 当 Portal 的 children 被加入到 DOM 时的钩子
   */
  onChildrenMount?: () => void

  /**
   * children mounted to
   * @default document.body
   */
  container?: HTMLElement

  /**
   * get container when mounted
   */
  getContainer?: () => HTMLElement | undefined
}

export interface IPortalState {
  hasMounted: boolean
}

/**
 * Portal 将子组件从组件层级（component hierarchy）中分离，并添加到指定的 container 中
 * 你应该用于那些受 z-index、overflow、position:absolute 等约束的组件中
 */
export default class Portal extends React.Component<
  IPortalProps,
  IPortalState
> {
  public static displayName = `aduiPortal`

  public static defaultProps: IPortalProps = {
    container: document?.body || null,
  }

  public state: IPortalState = { hasMounted: false }

  private portalElement: HTMLElement

  public render() {
    const { children } = this.props
    const { hasMounted } = this.state
    if (cannotCreatePortal || typeof document === "undefined" || !hasMounted) {
      return null
    }

    return ReactDOM.createPortal(children, this.portalElement)
  }

  public shouldComponentUpdate = (
    nextProps: IPortalProps,
    nextState: IPortalState
  ) =>
    !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)

  public componentDidMount = () => {
    const {
      container: containerProp,
      getContainer,
      onChildrenMount,
    } = this.props
    const container = (getContainer && getContainer()) || containerProp
    if (!container) {
      return
    }
    this.portalElement = this.createContainerElement()
    container.appendChild(this.portalElement)
    this.setState({ hasMounted: true }, onChildrenMount)
    if (cannotCreatePortal) {
      this.unstableRenderNoPortal()
    }
  }

  public componentDidUpdate = ({ className: prevClassName }: IPortalProps) => {
    const { className } = this.props
    if (this.portalElement != null && prevClassName !== className) {
      if (prevClassName) {
        this.portalElement.classList.remove(prevClassName)
      }
      maybeAddClass(this.portalElement.classList, className)
    }
    if (cannotCreatePortal) {
      this.unstableRenderNoPortal()
    }
  }

  public componentWillUnmount() {
    if (this.portalElement != null) {
      if (cannotCreatePortal) {
        ReactDOM.unmountComponentAtNode(this.portalElement)
      }
      this.portalElement.remove()
    }
  }

  private createContainerElement() {
    const { className } = this.props
    const container = document.createElement("div")
    container.classList.add("adui-portal")
    maybeAddClass(container.classList, className)
    return container
  }

  private unstableRenderNoPortal() {
    const { children } = this.props
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      <div>{children}</div>,
      this.portalElement
    )
  }
}
