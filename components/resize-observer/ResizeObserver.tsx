/**
 * ResizeObserver 会以 class 组件的形式存在，
 * 因为其使用 findDomNode(this) 实现 children 为 fc 时不能给 ref 的情况
 * 如果 ResizeObserver 也是 fc，就没有办法在不添加额外结构的情况下拿到 dom 了
 */
/* eslint-disable */
// @ts-nocheck
import * as React from "react"
import findDOMNode from "rc-util/lib/Dom/findDOMNode"
import toArray from "rc-util/lib/Children/toArray"
import warning from "../_util/warning"
import { composeRef } from "rc-util/lib/ref"

interface ResizeObserverEntry {
  readonly borderBoxSize: ResizeObserverEntryBoxSize
  readonly contentBoxSize: ResizeObserverEntryBoxSize
  readonly contentRect: DOMRectReadOnly
  readonly target: Element
}
interface ResizeObserverEntryBoxSize {
  blockSize: number
  inlineSize: number
}

const supportRef = (nodeOrComponent) => {
  if (
    nodeOrComponent.type?.$$typeof &&
    nodeOrComponent.type.$$typeof.toString().includes("forward_ref")
  ) {
    return false
  }

  // Function component node
  if (
    nodeOrComponent.type &&
    nodeOrComponent.type.prototype &&
    !nodeOrComponent.type.prototype.render
  ) {
    return false
  }

  // Class component
  if (typeof nodeOrComponent === "function") {
    return false
  }

  return true
}

export interface IResizeObserverProps {
  children: React.ReactNode
  disabled?: boolean
  onResize?: (size: { width: number; height: number }) => void
}

interface ResizeObserverState {
  height: number
  width: number
}

type RefNode = React.ReactInstance | HTMLElement | null

class ReactResizeObserver extends React.Component<
  IResizeObserverProps,
  ResizeObserverState
> {
  static displayName = "ResizeObserver"

  resizeObserver: ResizeObserver | null = null

  childNode: RefNode = null

  currentElement: Element | null = null

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    this.onComponentUpdated()
  }

  componentDidUpdate() {
    this.onComponentUpdated()
  }

  componentWillUnmount() {
    this.destroyObserver()
  }

  onComponentUpdated() {
    const { disabled } = this.props

    // Unregister if disabled
    if (disabled) {
      this.destroyObserver()
      return
    }

    const element = findDOMNode(this.childNode || this) as Element
    const elementChanged = element !== this.currentElement
    if (elementChanged) {
      this.destroyObserver()
      this.currentElement = element
    }

    if (!this.resizeObserver && element) {
      this.resizeObserver = new ResizeObserver(this.onResize)
      this.resizeObserver.observe(element)
    }
  }

  onResize = (entries: ResizeObserverEntry[]) => {
    const { onResize } = this.props
    const { width: widthState, height: heightState } = this.state

    const { target } = entries[0]

    const { width, height } = target.getBoundingClientRect()
    const [fixedWidth, fixedHeight] = [Math.floor(width), Math.floor(height)]

    if (widthState !== fixedWidth || heightState !== fixedHeight) {
      const size = { width: fixedWidth, height: fixedHeight }

      this.setState(size)

      if (onResize) {
        onResize(size)
      }
    }
  }

  setChildNode = (node: RefNode) => {
    this.childNode = node
  }

  destroyObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    }
  }

  render() {
    const { children } = this.props
    const childNodes = toArray(children)

    if (childNodes.length > 1) {
      warning(
        false,
        "ResizeObserver",
        "有多个 children，将只会在第一个元素上监听"
      )
    } else if (childNodes.length === 0) {
      warning(false, "ResizeObserver", "没有 children")

      return null
    }

    const childNode = childNodes[0]

    if (React.isValidElement(childNode) && supportRef(childNode)) {
      const { ref } = childNode as any

      childNodes[0] = React.cloneElement(childNode as any, {
        ref: composeRef(ref, this.setChildNode),
      })
    }

    return childNodes.length === 1
      ? childNodes[0]
      : childNodes.map((node, index) => {
          if (
            !React.isValidElement(node) ||
            ("key" in node && node.key !== null)
          ) {
            return node
          }

          return React.cloneElement(node, {
            key: `adui-observer-key-${index}`,
          })
        })
  }
}

export default ReactResizeObserver
