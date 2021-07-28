/**
 * Affix 组件将不会修改成 FunctionComponent，
 * 因为我（Yijie）尝试过发现会一直触发 onChange, affixStyle 明明有，但是在 onChange 时一直是 undefined
 */
import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import shallowequal from "shallowequal"
import addEventListener from "rc-util/lib/Dom/addEventListener"
import omit from "../_util/omit"
import ResizeObserver from "../resize-observer"
import "./style"

const prefix = "adui-affix"

export interface IAffixProps {
  [key: string]: any
  children?: React.ReactNode
  className?: string
  getContainer?: (() => HTMLElement) | null
  getTarget?: (() => HTMLElement) | null
  offsetBottom?: number | null
  offsetTop?: number
  onChange?: ((affixed: boolean) => void) | null
  style?: React.CSSProperties
}

export interface IAffixState {
  affixStyle?: React.CSSProperties | null
}

/**
 * 固钉
 */
export default class Affix extends React.Component<IAffixProps, IAffixState> {
  public static propTypes = {
    /**
     * 子节点
     */
    children: PropTypes.node,
    /**
     * 附加类名
     */
    className: PropTypes.string,
    /**
     * () => HTMLElement 固钉的显示区域，永远会在此方法传回的元素内
     */
    getContainer: PropTypes.func,
    /**
     * () => HTMLElement 监听滚动的元素，默认在 window 上
     */
    getTarget: PropTypes.func,
    /**
     * 距离窗口顶部达到指定偏移量后触发，如果传入了 offsetBottom，Affix 会忽略 offsetTop
     */
    offsetBottom: PropTypes.number,
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: PropTypes.number,
    /**
     * 固定状态改变时的 handler
     */
    onChange: PropTypes.func,
    /**
     * 附加样式
     */
    style: PropTypes.object,
  }

  public static defaultProps: IAffixProps = {
    children: "",
    className: undefined,
    getContainer: null,
    getTarget: null,
    offsetBottom: null,
    offsetTop: 0,
    onChange: null,
    style: {},
  }

  public fixedNode: HTMLDivElement

  public placeholderNode: HTMLDivElement

  private scrollEventHandler: any

  constructor(props: IAffixProps) {
    super(props)
    this.state = {
      affixStyle: undefined,
    }
  }

  public componentDidMount = () => {
    const { getTarget } = this.props
    const target = getTarget ? getTarget() : window
    this.scrollEventHandler = addEventListener(
      target,
      "scroll",
      this.updatePosition
    )
    this.updatePosition()
    this.syncPlaceholderStyle()
  }

  public componentWillUnmount = () => {
    if (this.scrollEventHandler) {
      this.scrollEventHandler.remove()
    }
  }

  public setAffixStyle = (newAffixStyle: React.CSSProperties | null) => {
    const { onChange } = this.props
    const { affixStyle } = this.state
    if (!shallowequal(affixStyle, newAffixStyle)) {
      this.setState({ affixStyle: newAffixStyle })
    }
    if (!!affixStyle !== !!newAffixStyle && onChange) {
      onChange(!!newAffixStyle)
    }
  }

  public updatePosition = () => {
    const { fixedNode, placeholderNode, props } = this
    const { getContainer, getTarget, offsetBottom, offsetTop } = props
    const target = getTarget ? getTarget() : window

    // 每次使用 ref 都要进行判断
    if (target && placeholderNode && fixedNode) {
      // documentRect 是一定需要的，为了设置正确的 left 值
      const documentRect = document.body.getBoundingClientRect()
      const placeholderRect = placeholderNode.getBoundingClientRect()
      const fixedRect = fixedNode.getBoundingClientRect()

      // 判断是否是 window
      const targetRect = getTarget
        ? getTarget().getBoundingClientRect()
        : documentRect
      const documentRectLeft = documentRect.left
      const placeholderRectLeft = placeholderRect.left

      const targetTop = getTarget ? targetRect.top : 0
      const targetHeight = getTarget ? targetRect.height : window.innerHeight

      const affixStyle: React.CSSProperties = {
        left: documentRectLeft + placeholderRectLeft,
        position: "fixed",
        width: fixedRect.width,
      }

      // 如果传入了 offsetBottom，则会忽略 offsetTop
      if (
        offsetBottom !== null &&
        offsetBottom !== undefined &&
        !isNaN(offsetBottom)
      ) {
        if (placeholderRect.bottom > targetHeight - offsetBottom) {
          if (getContainer && getContainer()) {
            const containerRect = getContainer().getBoundingClientRect()
            const bottom =
              targetHeight - containerRect.top - placeholderRect.height
            if (bottom <= offsetBottom) {
              affixStyle.bottom =
                bottom + placeholderRect.height < 0
                  ? -placeholderRect.height
                  : bottom
            } else {
              affixStyle.bottom = offsetBottom
            }
          } else {
            affixStyle.bottom = offsetBottom
          }
          this.setAffixStyle(affixStyle)
        } else {
          this.setAffixStyle(null)
        }
      } else if (placeholderRect.top < (offsetTop || 0) + targetTop) {
        if (getContainer && getContainer()) {
          const containerRect = getContainer().getBoundingClientRect()
          const top =
            containerRect.height + containerRect.top - placeholderRect.height
          if (offsetTop !== undefined && top <= offsetTop) {
            affixStyle.top =
              top + placeholderRect.height < 0 ? -placeholderRect.height : top
          } else {
            affixStyle.top = targetTop + (offsetTop || 0)
          }
        } else {
          affixStyle.top = targetTop + (offsetTop || 0)
        }
        this.setAffixStyle(affixStyle)
      } else {
        this.setAffixStyle(null)
      }
    }
  }

  public syncPlaceholderStyle = () => {
    this.updatePosition()
    const { affixStyle } = this.state
    // 条件判断：
    // 1. 每次使用 ref 都要进行判断 2. 判断有 affixStyle 说明现在正处于固定状态中
    if (this.placeholderNode && affixStyle) {
      const widthPrev = this.placeholderNode.style.width
      this.placeholderNode.style.width = ""
      const width = this.placeholderNode.offsetWidth
      this.setAffixStyle({
        ...affixStyle,
        width,
      })
      if (!width) {
        this.placeholderNode.style.width = widthPrev
      }
    }
  }

  public savePlaceholderNode = (node: HTMLDivElement) => {
    this.placeholderNode = node
  }

  public saveFixedNode = (node: HTMLDivElement) => {
    this.fixedNode = node
  }

  public render() {
    const { children, className, style, ...otherProps } = this.props

    const restProps = omit(otherProps, [
      "getContainer",
      "getTarget",
      "offsetBottom",
      "offsetTop",
      "onChange",
    ])

    const { affixStyle } = this.state

    const classSet = classNames(className, `${prefix}-base`)

    return (
      <div ref={this.savePlaceholderNode}>
        <ResizeObserver
          onResize={({ width, height }) => {
            this.updatePosition()
            this.syncPlaceholderStyle()
            if (this.placeholderNode) {
              this.placeholderNode.style.width = `${width}px`
              this.placeholderNode.style.height = `${height}px`
            }
          }}
        >
          <div
            className={classSet}
            ref={this.saveFixedNode}
            style={{
              ...affixStyle,
              ...style,
            }}
            {...restProps}
          >
            {children}
          </div>
        </ResizeObserver>
      </div>
    )
  }
}
