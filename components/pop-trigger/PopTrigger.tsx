import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import Trigger from "rc-trigger"
import { builtinPlacements } from "./builtinPlacements"
import "./style"

interface IVisible {
  popupVisible?: boolean
}

interface IBaseObject {
  [key: string]: any
}

export interface ITrigger {
  forcePopupAlign?: () => void
  getRootDomNode?: () => HTMLElement
}

export type Placement =
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "left"
  | "leftBottom"
  | "leftTop"
  | "right"
  | "rightBottom"
  | "rightTop"
  | "top"
  | "topLeft"
  | "topRight"

export interface IPopTriggerProps {
  [key: string]: any
  action?: string[]
  builtinPlacements?: object
  children?: React.ReactNode
  defaultPopupVisible?: null | boolean
  destroyPopupOnHide?: boolean
  getPopupContainer?: null | ((node: HTMLElement) => HTMLElement)
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  onPopupAlign: (node: HTMLElement, align?: IBaseObject) => void
  onPopupVisibleChange: (visible: boolean) => void
  popup: React.ReactNode
  popupAlign?: null | object
  popupClassName?: string
  popupPlacement?: Placement
  popupStyle?: null | React.CSSProperties
  popupTransitionName?: string
  popupVisible?: null | boolean
  zIndex?: React.ReactNode
}

/**
 * 弹出行为。
 *
 * PopTrigger 是基于 rc-trigger (MIT License) 进行封装的。
 * PopTrigger 的定位是抽象的弹出行为。
 * PopTrigger 应提供所有弹出相关的能力与配置，供 Tooltip、Select 等调用。
 * PopTrigger 也可以被使用者直接使用，实现自定的弹出功能。
 */
const PopTrigger: React.ForwardRefExoticComponent<
  IPopTriggerProps & React.RefAttributes<any>
> = forwardRef(
  ({ children, popup, popupVisible, ...otherProps }: IPopTriggerProps, ref) => {
    const visibleProp: IVisible = {}

    if (popupVisible !== null) {
      visibleProp.popupVisible = popupVisible
    }

    return (
      <Trigger
        ref={ref}
        popup={typeof popup === "string" ? <div>{popup}</div> : popup}
        {...visibleProp}
        {...otherProps}
      >
        {typeof children === "string" ? <span>{children}</span> : children}
      </Trigger>
    )
  }
)

PopTrigger.displayName = "PopTrigger"

PopTrigger.propTypes = {
  /**
   * 触发方式
   */
  action: PropTypes.any,
  /**
   * 预设位置，需要包含 popupPlacement 的 12 个位置
   */
  builtinPlacements: PropTypes.object,
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 弹出框是否默认显示
   */
  defaultPopupVisible: PropTypes.bool,
  /**
   * 弹出框是否在消失时移出 dom
   */
  destroyPopupOnHide: PropTypes.bool,
  /**
   * 指定弹出框的父级，默认为 document
   */
  getPopupContainer: PropTypes.func,
  /**
   * mouseEnter 显示的延时，单位：s，只在 action=["hover"] 时有效
   */
  mouseEnterDelay: PropTypes.number,
  /**
   * mouseLeave 消失的延时，单位：s，只在 action=["hover"] 时有效
   */
  mouseLeaveDelay: PropTypes.number,
  /**
   * 弹出内容
   */
  popup: PropTypes.node.isRequired,
  /**
   * 弹出层的位置控制，API 请参考 https://github.com/yiminghe/dom-align
   */
  popupAlign: PropTypes.object,
  /**
   * 弹出框的附加类名
   */
  popupClassName: PropTypes.string,
  /**
   * 弹出层位置，也可以不使用这些预设位置，使用 popupAlign 属性。
   * 页面在弹出方向上无法滚动时会往另外一个方向弹出，保证有空间去滚动看到。
   * 如设置了 popupPlacement="bottom"，但元素已经位于页面底部时，popup 则会变为 top。
   * 因为有 Trigger 的这个”保证有空间去滚动看到“的设计逻辑，所以不考虑做页面滚动时的自动变换 popupPlacement。
   */
  popupPlacement: PropTypes.oneOf([
    "top",
    "left",
    "right",
    "bottom",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "leftTop",
    "leftBottom",
    "rightTop",
    "rightBottom",
  ]),
  /**
   * 弹出框的附加样式
   */
  popupStyle: PropTypes.object,
  /**
   * 弹出框的动画类名，动画格式遵循 rc-animate
   */
  popupTransitionName: PropTypes.string,
  /**
   * 弹出框是否显示
   */
  popupVisible: PropTypes.oneOf([null, true, false]),
}

PopTrigger.defaultProps = {
  action: ["hover"],
  builtinPlacements,
  children: "",
  defaultPopupVisible: false,
  destroyPopupOnHide: false,
  getPopupContainer: null,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  popupAlign: null,
  popupClassName: "",
  popupPlacement: "bottom",
  popupStyle: null,
  popupTransitionName: undefined,
  popupVisible: null,
}

export default PopTrigger
