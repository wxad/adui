import React, { forwardRef, useContext } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { ConfigContext } from "../config-provider"
import Tooltip, { ITooltipProps } from "../tooltip"
import "./style"

const prefix = "adui-popover"

export interface IPopoverProps extends ITooltipProps {
  [key: string]: any
  /**
   * 是否边缘对齐
   */
  alignEdge?: boolean
  /**
   * 是否带有箭头
   */
  arrowed?: boolean
}

/**
 * 气泡提示用于触发、操作某项信息临时性弹出的内容，高于当前页面层级，为内容的轻量延伸。
 * Popover 是基于 Tooltip 进行封装的。
 * 可能是文字解释，也可能内涵操作，可设置带箭头、或不带箭头。
 * Popover 默认边缘对齐。
 */
const Popover: React.ForwardRefExoticComponent<
  IPopoverProps & React.RefAttributes<any>
> = forwardRef(
  (
    {
      arrowed,
      children,
      getPopupContainer,
      placement,
      popup,
      popupClassName,
      popupStyle,
      ...otherProps
    }: IPopoverProps,
    ref
  ) => {
    const { getPopupContainer: getPopupContainerContext } = useContext(
      ConfigContext
    )

    let popupTransitionName

    if (arrowed) {
      popupTransitionName = "zoom-big-fast"
    } else if (placement && placement.indexOf("top") === 0) {
      popupTransitionName = "slide-down"
    } else if (placement && placement.indexOf("right") === 0) {
      popupTransitionName = "slide-left"
    } else if (placement && placement.indexOf("bottom") === 0) {
      popupTransitionName = "slide-up"
    } else if (placement && placement.indexOf("left") === 0) {
      popupTransitionName = "slide-right"
    }

    return (
      <Tooltip
        getPopupContainer={getPopupContainer || getPopupContainerContext}
        placement={placement}
        popup={popup}
        popupClassName={classNames(`${prefix}-popover`, popupClassName, {
          [`${prefix}-popover_noArrow`]: !arrowed,
          [`${prefix}-removeContentPadding`]:
            !arrowed || typeof popup !== "string",
        })}
        popupStyle={arrowed ? popupStyle : { padding: 0, ...popupStyle }}
        popupTransitionName={popupTransitionName}
        ref={ref}
        {...otherProps}
      >
        {children}
      </Tooltip>
    )
  }
)

Popover.displayName = "Popover"

Popover.propTypes = {
  /**
   * 是否边缘对齐
   */
  alignEdge: PropTypes.bool,
  /**
   * 是否带有箭头
   */
  arrowed: PropTypes.bool,
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 气泡提示是否默认显示
   */
  defaultVisible: PropTypes.oneOf([null, true, false]),
  /**
   * 指定气泡提示的父级，默认为 document
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
   * 弹出框的附加类名
   */
  popupClassName: PropTypes.string,
  /**
   * 气泡提示的附加样式
   */
  popupStyle: PropTypes.object,
  /**
   * 触发方式
   */
  trigger: PropTypes.oneOf(["hover", "focus", "click"]),
  /**
   * 手动控制气泡提示是否显示
   */
  visible: PropTypes.oneOf([null, true, false]),
}

Popover.defaultProps = {
  alignEdge: true,
  arrowed: true,
  children: "",
  defaultVisible: null,
  getPopupContainer: null,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  onVisibleChange: () => {},
  placement: "bottomLeft",
  popup: "文字提示",
  popupClassName: "",
  popupStyle: {},
  trigger: "hover",
  visible: null,
}

export default Popover
