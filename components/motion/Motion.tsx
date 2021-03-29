import * as React from "react"
import PropTypes from "prop-types"
import Animate from "rc-animate"

const noop = () => {}
const MOTION_DURATION_BASE = 200
const transitionNames = {
  slide: "slide-up",
  zoom: "zoom-motion",
  zoomHorizontal: "zoom-motion-horizontal",
}

export interface IMotionProps {
  [key: string]: any
  /**
   * dom 移除后的 handler
   */
  afterLeave?: (node: HTMLElement) => void
  /**
   * 可自定义 animation 的 appear, enter, leave
   */
  animation?: object
  /**
   * 进入动画是否作用于 appear 阶段
   */
  appear?: boolean
  /**
   * 子元素
   */
  children?: React.ReactNode
  /**
   * Motion 包裹层的元素标签
   */
  component?: string
  /**
   * 动效持续时间，单位 ms
   */
  duration?: number
  /**
   * dom 开始移除的 handler
   */
  onLeave?: (node: HTMLElement) => void
  /**
   * 动效形式
   */
  transition?: "slide" | "zoom" | "zoomHorizontal"
}

const Motion: React.FC<IMotionProps> = ({
  afterLeave,
  animation,
  appear,
  children,
  duration,
  onLeave,
  transition,
  ...othersProps
}: IMotionProps) => {
  const dur =
    duration !== null && duration !== undefined
      ? duration
      : MOTION_DURATION_BASE
  const transitionName = transition && transitionNames[transition]

  const getNodeStyle = (node: HTMLElement, styleName: string) =>
    getComputedStyle(node).getPropertyValue(styleName)

  const setNodeStyle = (node: HTMLElement) => {
    if (node) {
      if (transitionName && transitionName.includes("horizontal")) {
        node.style.marginRight = "0"
        node.style.marginLeft = "0"
        node.style.paddingRight = "0"
        node.style.paddingLeft = "0"
        node.style.width = "0"
      } else {
        node.style.marginTop = "0"
        node.style.marginBottom = "0"
        node.style.paddingTop = "0"
        node.style.paddingBottom = "0"
        node.style.height = "0"
      }
    }
  }

  const getEnterAnimation = (node: HTMLElement, done: () => void) => {
    const width = `${node.getBoundingClientRect().width}px`
    const height = `${node.getBoundingClientRect().height}px`
    const paddingTop = getNodeStyle(node, "padding-top")
    const paddingRight = getNodeStyle(node, "padding-right")
    const paddingBottom = getNodeStyle(node, "padding-bottom")
    const paddingLeft = getNodeStyle(node, "padding-left")

    if (transitionName && transitionName.includes("slide")) {
      node.style.opacity = "1"
    }

    if (transitionName && transitionName.includes("horizontal")) {
      node.style.width = "0"
      node.style.paddingRight = "0"
      node.style.paddingLeft = "0"
    } else {
      node.style.height = "0"
      node.style.paddingTop = "0"
      node.style.paddingBottom = "0"
    }

    node.style.overflow = "hidden"
    node.style.setProperty("animation-duration", `${dur}ms`, "important")
    node.classList.add(
      `${transitionName}-enter`,
      `${transitionName}-enter-active`
    )

    setTimeout(() => {
      if (transitionName && transitionName.includes("horizontal")) {
        node.style.transition = `all ${dur}ms var(--ease-in-out)`
        node.style.width = width
        node.style.paddingRight = paddingRight
        node.style.paddingLeft = paddingLeft
      } else {
        node.style.transition = `all ${dur}ms var(--ease-in-out)`
        node.style.height = height
        node.style.paddingTop = paddingTop
        node.style.paddingBottom = paddingBottom
      }
    }, 10)
    const promise = new Promise((resolve) => setTimeout(resolve, dur))
    promise.then(() => {
      node.classList.remove(
        `${transitionName}-enter`,
        `${transitionName}-enter-active`
      )
      if (transitionName && transitionName.includes("horizontal")) {
        node.style.width = ""
      } else {
        node.style.height = ""
      }
      node.style.overflow = ""
      return done()
    })
  }

  return (
    <Animate
      animation={
        animation || {
          appear(node: HTMLElement, done: () => void) {
            if (appear) {
              getEnterAnimation(node, done)
            }
            return done()
          },
          enter(node: HTMLElement, done: () => void) {
            getEnterAnimation(node, done)
          },
          leave(node: HTMLElement, done: () => void) {
            if (onLeave) {
              onLeave(node)
            }
            if (transitionName && transitionName.includes("horizontal")) {
              const width = `${node.getBoundingClientRect().width}px`
              node.style.width = width
            } else {
              const height = `${node.getBoundingClientRect().height}px`
              node.style.height = height
            }
            node.style.setProperty(
              "animation-duration",
              `${dur}ms`,
              "important"
            )
            node.style.overflow = "hidden"
            node.classList.remove(
              `${transitionName}-enter`,
              `${transitionName}-enter-active`
            )
            node.classList.add(
              `${transitionName}-leave`,
              `${transitionName}-leave-active`
            )
            setTimeout(() => {
              node.style.transition = `all ${dur}ms var(--ease-in-out)`
              setNodeStyle(node)
            }, 10)
            const promise = new Promise((resolve) => setTimeout(resolve, dur))
            promise.then(() => {
              if (afterLeave) {
                afterLeave(node)
              }
              return done()
            })
          },
        }
      }
      {...othersProps}
    >
      {children}
    </Animate>
  )
}

Motion.propTypes = {
  afterLeave: PropTypes.func,
  animation: PropTypes.object,
  appear: PropTypes.bool,
  children: PropTypes.node,
  duration: PropTypes.number,
  onLeave: PropTypes.func,
  transition: PropTypes.oneOf(["slide", "zoom", "zoomHorizontal"]),
}

Motion.defaultProps = {
  afterLeave: noop,
  animation: undefined,
  appear: false,
  children: null,
  duration: undefined,
  onLeave: noop,
  transition: "zoom",
}

export default Motion
