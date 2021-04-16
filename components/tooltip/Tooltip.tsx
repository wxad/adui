/* eslint-disable */
// @ts-nocheck
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import PopTrigger, { ITrigger, Placement } from "../pop-trigger"
import { ConfigContext } from "../config-provider"
import getPlacements from "./placements"
import Popup from "./Popup"
import "./style"

const prefix = "adui-tooltip"

export interface ITooltipProps {
  [key: string]: any
  /**
   * 是否边缘对齐
   */
  alignEdge?: boolean
  /**
   * 自动调整位置
   */
  autoAdjustPlacement?: boolean
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 气泡提示是否默认显示
   */
  defaultVisible?: null | boolean
  /**
   * 指定气泡提示的父级，默认为 document.body
   */
  getPopupContainer?: null | ((node: HTMLElement) => HTMLElement)
  /**
   * mouseEnter 显示的延时，单位：s，只在 trigger="hover" 时有效
   */
  mouseEnterDelay?: number
  /**
   * mouseLeave 消失的延时，单位：s，只在 trigger="hover" 时有效
   */
  mouseLeaveDelay?: number
  /**
   * 显示发生变化时的 handler
   */
  onVisibleChange?: (visible: boolean) => void
  /**
   * 弹出层位置
   */
  popup?: React.ReactNode
  /**
   * 弹出内容
   */
  popupClassName?: string
  /**
   * 气泡提示的附加类名
   */
  popupTransitionName?: string
  /**
   * 气泡提示的附加样式
   */
  placement?: Placement
  /**
   * 弹出框的动画类名，动画格式遵循 rc-animate
   */
  popupStyle?: React.CSSProperties | null
  /**
   * 触发方式
   */
  trigger?: "hover" | "focus" | "click"
  /**
   * 手动控制气泡提示是否显示
   */
  visible?: null | boolean
}

/**
 * 工具提示用于针对某个元素的、轻量的操作说明。
 * 与气泡提示 Popover 不同，工具提示 Tooltip 不承载复杂内容信息，而主要用于解释工具的操作含义，如“复制”、“编辑”、“删除”等。
 * Tooltip 是基于 PopTrigger 进行封装的。
 * Tooltip 负责定义箭头与内容的相关样式。
 */
const Tooltip: React.ForwardRefExoticComponent<
  ITooltipProps & React.RefAttributes<any>
> = forwardRef(
  (
    {
      alignEdge,
      autoAdjustPlacement,
      children,
      defaultVisible,
      getPopupContainer,
      onVisibleChange,
      placement: placementProp,
      popup,
      popupClassName,
      popupStyle,
      popupTransitionName,
      trigger,
      visible: visibleProp,
      ...otherProps
    }: ITooltipProps,
    ref
  ) => {
    const triggerRef = useRef<ITrigger>()
    const [placement, setPlacement] = useState(placementProp || "bottom")
    const [visible, setVisible] = useState(visibleProp)

    useImperativeHandle(ref, () => ({
      current: triggerRef.current,
    }))

    // 相当于生命周期 getDerivedStateFromProps
    if (visibleProp !== null && visible !== visibleProp) {
      setVisible(!!visibleProp)
    }

    const { getPopupContainer: getPopupContainerContext } = useContext(
      ConfigContext
    )

    /**
     * 根据 placement 设置相关样式
     */
    const getPopupStyle = () => {
      const transformOrigin = {
        x: "50%",
        y: "50%",
      }
      const extraStyle: React.CSSProperties = {}
      if (popupStyle) {
        if (placement.indexOf("top") === 0) {
          transformOrigin.y = "100%"
          if (
            typeof popupStyle.paddingBottom === "undefined" &&
            typeof popupStyle.padding === "undefined"
          ) {
            extraStyle.paddingBottom = "8px"
          }
        } else if (placement.indexOf("bottom") === 0) {
          transformOrigin.y = "-4px"
          if (
            typeof popupStyle.paddingTop === "undefined" &&
            typeof popupStyle.padding === "undefined"
          ) {
            extraStyle.paddingTop = "8px"
          }
        } else if (placement.indexOf("right") === 0) {
          transformOrigin.x = "0%"
          if (
            typeof popupStyle.paddingLeft === "undefined" &&
            typeof popupStyle.padding === "undefined"
          ) {
            extraStyle.paddingLeft = "8px"
          }
        } else if (placement.indexOf("left") === 0) {
          transformOrigin.x = "100%"
          if (
            typeof popupStyle.paddingRight === "undefined" &&
            typeof popupStyle.padding === "undefined"
          ) {
            extraStyle.paddingRight = "8px"
          }
        }

        if (placement.includes("Left")) {
          transformOrigin.x = "18px"
        } else if (placement.includes("Right")) {
          transformOrigin.x = "calc(100% - 18px)"
        } else if (placement.includes("Top")) {
          transformOrigin.y = "10px"
        } else if (placement.includes("Bottom")) {
          transformOrigin.y = "calc(100% - 10px)"
        }
        extraStyle.transformOrigin = `${transformOrigin.x} ${transformOrigin.y}`
      }

      return {
        ...extraStyle,
        ...popupStyle,
      }
    }

    /**
     * 此方法的目的是在 window 无法显示完整 popup 时，调整 placement；
     * 可能存在 x, y 轴都需要调整的情况，
     * 比如在屏幕右下角的 "bottomLeft" || "bottom"，那么目标是将其调整为 "topRight"。
     *
     * 20190828: 尝试将 “top*” 的 CSS 定位从 top: xxx; 改为 bottom: xxx;
     * 因为这时候如果弹出框高度变化的话，从下定位就不会有样式问题。
     */
    const handlePopupAlign = (node: HTMLElement) => {
      const rect = node.getBoundingClientRect()
      const { width, height, top: Y, left: X } = rect

      let newPlacement: any = placement

      setTimeout(() => {
        if (
          triggerRef.current &&
          triggerRef.current.getRootDomNode &&
          placementProp
        ) {
          const wrapperRect = triggerRef.current
            .getRootDomNode()
            .getBoundingClientRect()
          /**
           * top + bottom 的定位优化
           * 对 Y 轴进行判断
           */
          if (placementProp.indexOf("top") === 0) {
            if (Y < 0 && placement.indexOf("top") === 0) {
              newPlacement = "bottom".concat(placement.slice(3))
            }
            if (
              Y > rect.height + wrapperRect.height + 8 &&
              placement.indexOf("bottom") === 0
            ) {
              newPlacement = "top".concat(placement.slice(6))
            }
          }
          if (placementProp.indexOf("bottom") === 0) {
            if (
              Y + height > window.innerHeight &&
              placement.indexOf("bottom") === 0
            ) {
              newPlacement = "top".concat(placement.slice(6))
            }
            if (
              wrapperRect.top + wrapperRect.height + height + 8 <
                window.innerHeight &&
              placement.indexOf("top") === 0
            ) {
              newPlacement = "bottom".concat(placement.slice(3))
            }
          }
          /**
           * 对 X 轴进行判断
           */
          if (width + X > window.innerWidth) {
            if (
              ["topLeft", "top", "bottomLeft", "bottom"].includes(newPlacement)
            ) {
              newPlacement = `${newPlacement.replace("Left", "")}Right`
            }
          } else if (X < 0) {
            if (
              ["topRight", "top", "bottomRight", "bottom"].includes(
                newPlacement
              )
            ) {
              newPlacement = `${newPlacement.replace("Right", "")}Left`
            }
          }

          // 判断是否是 "top*" 定位
          if (node.className.includes("-top")) {
            const nodeTop = node.style.top || "0"
            node.style.top = "unset"
            node.style.bottom = `-${parseInt(nodeTop, 10) + height}px`
          }

          /**
           * left + right 的定位优化
           */
          if (placementProp.indexOf("left") === 0) {
            if (X < 0 && placement.indexOf("left") === 0) {
              newPlacement = "right".concat(placement.slice(4))
            }
            if (
              X > rect.width + wrapperRect.width + 8 &&
              placement.indexOf("right") === 0
            ) {
              newPlacement = "left".concat(placement.slice(5))
            }
          }
          if (placementProp.indexOf("right") === 0) {
            if (
              X + width > window.innerWidth &&
              placement.indexOf("right") === 0
            ) {
              newPlacement = "left".concat(placement.slice(5))
            }
            if (
              wrapperRect.left + wrapperRect.width + width + 8 <
                window.innerWidth &&
              placement.indexOf("left") === 0
            ) {
              newPlacement = "right".concat(placement.slice(4))
            }
          }

          if (newPlacement !== placement) {
            setPlacement(newPlacement)
            if (triggerRef.current.forcePopupAlign) {
              triggerRef.current.forcePopupAlign()
            }
          }
        }
      }, 0)
    }

    const handleVisibleChange = (bool: boolean) => {
      if (visibleProp === null) {
        setVisible(bool)
      }
      if (onVisibleChange) {
        onVisibleChange(bool)
      }
    }

    return (
      <PopTrigger
        popupClassName={classNames(
          popupClassName,
          `${prefix}-base`,
          `${prefix}-base-${placement}`
        )}
        ref={triggerRef}
        action={trigger ? [trigger] : ["hover"]}
        builtinPlacements={getPlacements({ alignEdge, autoAdjustPlacement })}
        defaultPopupVisible={defaultVisible}
        getPopupContainer={getPopupContainer || getPopupContainerContext}
        onPopupVisibleChange={handleVisibleChange}
        onPopupAlign={handlePopupAlign}
        popup={<Popup content={popup} trigger={triggerRef.current} />}
        popupPlacement={placement}
        popupMotion={{
          motionName: popupTransitionName,
          motionDeadline: 1000,
        }}
        popupStyle={getPopupStyle()}
        popupVisible={visible}
        {...otherProps}
      >
        {children}
      </PopTrigger>
    )
  }
)

Tooltip.displayName = "Tooltip"

Tooltip.propTypes = {
  /**
   * 是否边缘对齐
   */
  alignEdge: PropTypes.bool,
  /**
   * 自动调整位置
   */
  autoAdjustPlacement: PropTypes.bool,
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 气泡提示是否默认显示
   */
  defaultVisible: PropTypes.oneOf([null, true, false]),
  /**
   * 指定气泡提示的父级，默认为 document.body
   */
  getPopupContainer: PropTypes.func,
  /**
   * mouseEnter 显示的延时，单位：s，只在 trigger="hover" 时有效
   */
  mouseEnterDelay: PropTypes.number,
  /**
   * mouseLeave 消失的延时，单位：s，只在 trigger="hover" 时有效
   */
  mouseLeaveDelay: PropTypes.number,
  /**
   * 显示发生变化时的 handler
   */
  onVisibleChange: PropTypes.func,
  /**
   * 弹出层位置
   */
  placement: PropTypes.oneOf([
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
   * 弹出内容
   */
  popup: PropTypes.node,
  /**
   * 气泡提示的附加类名
   */
  popupClassName: PropTypes.string,
  /**
   * 气泡提示的附加样式
   */
  popupStyle: PropTypes.object,
  /**
   * 弹出框的动画类名，动画格式遵循 rc-animate
   */
  popupTransitionName: PropTypes.string,
  /**
   * 触发方式
   */
  trigger: PropTypes.oneOf(["hover", "focus", "click"]),
  /**
   * 手动控制气泡提示是否显示
   */
  visible: PropTypes.oneOf([null, true, false]),
}

Tooltip.defaultProps = {
  alignEdge: false,
  autoAdjustPlacement: true,
  children: "",
  defaultVisible: null,
  getPopupContainer: null,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  onVisibleChange: () => {},
  placement: "bottom",
  popup: "复制",
  popupClassName: "",
  popupStyle: {},
  popupTransitionName: "zoom-big-fast",
  trigger: "hover",
  visible: null,
  zIndex: "var(--z-index-dialog)",
}

export default Tooltip
