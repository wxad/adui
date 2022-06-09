/* eslint-disable max-len */
import React, { useEffect, useMemo, useRef, useState } from "react"
import PropTypes from "prop-types"
import { animate, AnimationOptions } from "popmotion"
import { useIsInitialRender } from "../_util/hooks/use-is-initial-render"
import Memo from "./Memo"

const HUNDREDS = ["opacity", "scale", "scale-x", "scale-y"]
const TRANSFORMS = [
  "scale",
  "rotate",
  "scale-x",
  "scale-y",
  "translate-x",
  "translate-y",
]
const ANIMATE_DISABLEDS = ["transform"]
const UNITS: { [key: string]: string } = {
  rotate: "deg",
  width: "px",
  height: "px",
}

const transformProperty = (property: string) => {
  if (property === "w") {
    return "width"
  }
  if (property === "h") {
    return "height"
  }
  return property
}

export type TEase = "ease-in" | "ease-out"

export type TPhase = "enter" | "leave"

export interface ITransitionProps {
  [key: string]: any
  /**
   * 结束 enter 时的回调
   */
  afterEnter?: () => void
  /**
   * 结束 leave 时的回调
   */
  afterLeave?: () => void
  /**
   * 初次 mount 时是否进行动画
   */
  appear?: boolean
  /**
   * 开始 enter 前的回调
   */
  beforeEnter?: () => void
  /**
   * 开始 leave 前的回调
   */
  beforeLeave?: () => void
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 延迟
   */
  delay?: number | number[]
  /**
   * 总体时间，当有此 Prop 时将忽略 spring 相关属性，即 stiffness 和 damping
   */
  duration?: number | number[]
  /**
   * 贝塞尔曲线，将在 duration 有效时应用，在 spring 动画时被忽略
   */
  ease?: TEase | TEase[]
  /**
   * 弹力 —— 在现实世界中是由材料和钢卷厚度（coil thickness）造成的。弹力越大，弹簧会收缩得更有力，动画也会变得活泼
   */
  tension?: number | number[]
  /**
   * 摩擦力 —— 摩擦力越高，就需要越多的力让物体运动，动画也会越慢。如果摩擦力足够低，物体会运动超过终点，产生数个回弹效果
   */
  friction?: number | number[]
  /**
   * 起点的一些原子类名
   */
  from?: string | string[]
  /**
   * 终点的一些原子类名
   */
  to?: string | string[]
  /**
   * 延迟
   */
  enterDelay?: number | number[]
  /**
   * enter：总体时间，当有此 Prop 时将忽略 spring 相关属性，即 stiffness 和 damping
   */
  enterDuration?: number | number[]
  /**
   * enter：贝塞尔曲线，将在 duration 有效时应用，在 spring 动画时被忽略
   */
  enterEase?: TEase | TEase[]
  /**
   * enter：弹力 —— 在现实世界中是由材料和钢卷厚度（coil thickness）造成的。弹力越大，弹簧会收缩得更有力，动画也会变得活泼
   */
  enterTension?: number | number[]
  /**
   * enter：摩擦力 —— 摩擦力越高，就需要越多的力让物体运动，动画也会越慢。如果摩擦力足够低，物体会运动超过终点，产生数个回弹效果
   */
  enterFriction?: number | number[]
  /**
   * enter：起点的一些原子类名
   */
  enterFrom?: string | string[]
  /**
   * enter：终点的一些原子类名
   */
  enterTo?: string | string[]
  /**
   * leave：延迟
   */
  leaveDelay?: number | number[]
  /**
   * leave：总体时间，当有此 Prop 时将忽略 spring 相关属性，即 stiffness 和 damping
   */
  leaveDuration?: number | number[]
  /**
   * leave：贝塞尔曲线，将在 duration 有效时应用，在 spring 动画时被忽略
   */
  leaveEase?: TEase | TEase[]
  /**
   * leave：弹力 —— 在现实世界中是由材料和钢卷厚度（coil thickness）造成的。弹力越大，弹簧会收缩得更有力，动画也会变得活泼
   */
  leaveTension?: number | number[]
  /**
   * leave：摩擦力 —— 摩擦力越高，就需要越多的力让物体运动，动画也会越慢。如果摩擦力足够低，物体会运动超过终点，产生数个回弹效果
   */
  leaveFriction?: number | number[]
  /**
   * leave：起点的一些原子类名
   */
  leaveFrom?: string | string[]
  /**
   * leave：终点的一些原子类名
   */
  leaveTo?: string | string[]
  /**
   * 元素进场入场的开关
   */
  show?: boolean
  /**
   * 附加样式
   */
  style?: React.CSSProperties
  /**
   * 节点
   */
  tag?: keyof JSX.IntrinsicElements
}

// export type TRenderState = "mounted" | "unmounted"

type TStyle = {
  [key: string]: { value: React.ReactText; unit?: string; index: number }
}

type PromiseReturn = { property: string; animated: boolean }

const useSplitClassesToStyle = (classes: string | string[] = ""): TStyle => {
  return useMemo(() => {
    const classesSplits = typeof classes === "string" ? [classes] : classes
    const style: TStyle = {}
    classesSplits.forEach((o, index) => {
      const splits = o.split("-")
      let property
      let value
      /**
       * - 开头为负值
       */
      if (o.startsWith("-")) {
        if (splits.length === 4) {
          const [, p1, p2, v] = splits
          property = `${p1}-${p2}`
          value = `-${v}`
        } else {
          ;[, property, value] = splits
        }
      } else if (splits.length === 3) {
        const [p1, p2, v] = splits
        property = `${p1}-${p2}`
        value = v
      } else {
        ;[property, value] = splits
      }
      property = transformProperty(property)

      if (TRANSFORMS.includes(property)) {
        if (!style.transform) {
          style["--adui-translate-x"] = { value: 0, unit: "px", index }
          style["--adui-translate-y"] = { value: 0, unit: "px", index }
          style["--adui-rotate"] = { value: 0, unit: "deg", index }
          style["--adui-skew-x"] = { value: 0, index }
          style["--adui-skew-y"] = { value: 0, index }
          style["--adui-scale-x"] = { value: 1, index }
          style["--adui-scale-y"] = { value: 1, index }
          style.transform = {
            value:
              "translateX(var(--adui-translate-x)) translateY(var(--adui-translate-y)) rotate(var(--adui-rotate)) skewX(var(--adui-skew-x)) skewY(var(--adui-skew-y)) scaleX(var(--adui-scale-x)) scaleY(var(--adui-scale-y))",
            index,
          }
        }
        switch (property) {
          case "translate-x":
            style["--adui-translate-x"] = {
              value: parseInt(value, 10),
              unit: "px",
              index,
            }
            break
          case "translate-y":
            style["--adui-translate-y"] = {
              value: parseInt(value, 10),
              unit: "px",
              index,
            }
            break
          case "scale-x":
            style["--adui-scale-x"] = {
              value: parseInt(value, 10) / 100,
              index,
            }
            break
          case "scale-y":
            style["--adui-scale-y"] = {
              value: parseInt(value, 10) / 100,
              index,
            }
            break
          case "scale":
            style["--adui-scale-x"] = {
              value: parseInt(value, 10) / 100,
              index,
            }
            style["--adui-scale-y"] = {
              value: parseInt(value, 10) / 100,
              index,
            }
            break
          case "rotate":
            style["--adui-rotate"] = { value, unit: "deg", index }
            break
          default:
            break
        }
      } else {
        style[property] = {
          value: HUNDREDS.includes(property)
            ? parseInt(value, 10) / 100
            : value,
          unit: UNITS[property] || "",
          index,
        }
      }
    })
    return style
  }, [classes])
}

/**
 * 动效
 */
const Transition: React.FC<ITransitionProps> = ({
  afterEnter,
  afterLeave,
  appear,
  beforeEnter,
  beforeLeave,
  children,

  delay: delayProp,
  duration: durationProp,
  ease: easeProp,
  tension: tensionProp,
  friction: frictionProp,
  from: fromProp,
  to: toProp,

  enterDelay,
  enterDuration,
  enterEase,
  enterTension,
  enterFriction,
  enterFrom,
  enterTo,

  leaveDelay,
  leaveDuration,
  leaveEase,
  leaveTension,
  leaveFriction,
  leaveFrom,
  leaveTo,

  show,
  style = {},
  tag: TagName = "span",
  ...otherProps
}: ITransitionProps) => {
  const [isToRender, setIsToRender] = useState(false)
  const initial = useIsInitialRender()
  const enterFromStyles = useSplitClassesToStyle(enterFrom || fromProp)
  const enterToStyles = useSplitClassesToStyle(enterTo || toProp)
  const leaveFromStyles = useSplitClassesToStyle(leaveFrom || toProp)
  const leaveToStyles = useSplitClassesToStyle(leaveTo || fromProp)
  const wrapperRef = useRef<HTMLElement>(null)
  const animatingIdRef = useRef("")
  const animatingPhase = useRef("")

  const animating = async (phase: TPhase) => {
    animatingIdRef.current = Math.random().toString(36).substring(3, 8)
    const currentAnimatingId = animatingIdRef.current
    const fromStyles = phase === "enter" ? enterFromStyles : leaveFromStyles
    const toStyles = phase === "enter" ? enterToStyles : leaveToStyles

    const duration =
      (phase === "enter" ? enterDuration : leaveDuration) || durationProp
    const delay = (phase === "enter" ? enterDelay : leaveDelay) || delayProp
    const tension =
      (phase === "enter" ? enterTension : leaveTension) || tensionProp || 220
    const friction =
      (phase === "enter" ? enterFriction : leaveFriction) || frictionProp || 26

    if (phase === "enter") {
      if (beforeEnter) {
        beforeEnter()
      }

      if (wrapperRef.current) {
        if (wrapperRef.current.style.visibility === "hidden") {
          wrapperRef.current.style.visibility = "visible"
        }
      }
    } else if (beforeLeave) {
      beforeLeave()
    }

    Object.keys(fromStyles).forEach((key) => {
      const { value, unit = "" } = fromStyles[key]
      if (wrapperRef.current) {
        wrapperRef.current.style.setProperty(key, value + unit)
      }
    })

    const promises: Promise<PromiseReturn>[] = []
    Object.keys(toStyles).forEach((key) => {
      promises.push(
        new Promise((resolve) => {
          const { value: to, unit = "", index } = toStyles[key]
          const { value: from } = fromStyles[key]
          if (
            fromStyles[key] &&
            from !== to &&
            !ANIMATE_DISABLEDS.includes(key)
          ) {
            // const ease = Array.isArray(enterEase) ? enterEase[index] : enterEase
            const durationOption = Array.isArray(duration)
              ? duration[index]
              : duration
            const delayOption = Array.isArray(delay) ? delay[index] : delay
            const tensionOption = Array.isArray(tension)
              ? tension[index]
              : tension
            const frictionOption = Array.isArray(friction)
              ? friction[index]
              : friction
            const type = duration === undefined ? "spring" : "keyframes"
            const additionals =
              type === "spring"
                ? {
                    stiffness: tensionOption,
                    damping: frictionOption,
                  }
                : {
                    duration: durationOption,
                    // ease
                  }

            const animateOptions: AnimationOptions<number> = {
              from: Number(from),
              to: Number(to),
              onComplete: () => {
                if (currentAnimatingId === animatingIdRef.current) {
                  resolve({ property: key, animated: true })
                }
              },
              type,
              ...additionals,
            }

            if (delayOption) {
              const timeDelay = new Promise((r) => setTimeout(r, delayOption))
              timeDelay.then(() => {
                const animateSave = animate({
                  onUpdate: (latest) => {
                    if (currentAnimatingId !== animatingIdRef.current) {
                      animateSave.stop()
                    }
                    if (wrapperRef.current) {
                      wrapperRef.current.style.setProperty(key, latest + unit)
                    }
                  },
                  ...animateOptions,
                })
              })
            } else {
              const animateSave = animate({
                onUpdate: (latest) => {
                  if (currentAnimatingId !== animatingIdRef.current) {
                    animateSave.stop()
                  }
                  if (wrapperRef.current) {
                    wrapperRef.current.style.setProperty(key, latest + unit)
                  }
                },
                ...animateOptions,
              })
            }
          } else if (wrapperRef.current) {
            wrapperRef.current.style.setProperty(key, to + unit)
            resolve({ property: key, animated: false })
          }
        })
      )
    })
    return Promise.all(promises)
  }

  const doAnimate = async (phase: TPhase) => {
    animatingPhase.current = phase
    if (phase === "enter") {
      const returns = await animating("enter")
      returns.forEach(({ property }) => {
        if (wrapperRef.current) {
          wrapperRef.current.style.setProperty(property, null)
        }
      })
      if (afterEnter) {
        animatingPhase.current = "entered"
        afterEnter()
      }
    } else {
      await animating("leave")
      setIsToRender(false)
      if (afterLeave) {
        animatingPhase.current = "leaved"
        afterLeave()
      }
    }
  }

  useEffect(() => {
    if (show) {
      if (animatingPhase.current === "leave") {
        doAnimate("enter")
      }
      setIsToRender(true)
    } else if (!initial) {
      doAnimate("leave")
    }
  }, [show])

  useEffect(() => {
    /**
     * 区分 enter 和 appear
     */
    if (isToRender && (!initial || appear)) {
      doAnimate("enter")
    }
  }, [isToRender])

  if (!isToRender) {
    return null
  }

  return (
    // @ts-ignore
    <TagName
      // @ts-ignore
      ref={wrapperRef}
      style={{
        visibility: "hidden",
        ...style,
      }}
      {...otherProps}
    >
      <Memo>{children}</Memo>
    </TagName>
  )
}

Transition.propTypes = {
  /**
   * 结束 enter 时的回调
   */
  afterEnter: PropTypes.any,
  /**
   * 结束 leave 时的回调
   */
  afterLeave: PropTypes.any,
  /**
   * 初次 mount 时是否进行动画
   */
  appear: PropTypes.any,
  /**
   * 开始 enter 前的回调
   */
  beforeEnter: PropTypes.any,
  /**
   * 开始 leave 前的回调
   */
  beforeLeave: PropTypes.any,
  /**
   * 子节点
   */
  children: PropTypes.any,
  /**
   * 延迟
   */
  delay: PropTypes.any,
  /**
   * 总体时间，当有此 Prop 时将忽略 spring 相关属性，即 stiffness 和 damping
   */
  duration: PropTypes.any,
  /**
   * 贝塞尔曲线，将在 duration 有效时应用，在 spring 动画时被忽略
   */
  ease: PropTypes.any,
  /**
   * 弹力 —— 在现实世界中是由材料和钢卷厚度（coil thickness）造成的。弹力越大，弹簧会收缩得更有力，动画也会变得活泼
   */
  tension: PropTypes.any,
  /**
   * 摩擦力 —— 摩擦力越高，就需要越多的力让物体运动，动画也会越慢。如果摩擦力足够低，物体会运动超过终点，产生数个回弹效果
   */
  friction: PropTypes.any,
  /**
   * 起点的一些原子类名
   */
  from: PropTypes.any,
  /**
   * 终点的一些原子类名
   */
  to: PropTypes.any,
  /**
   * enter：延迟
   */
  enterDelay: PropTypes.any,
  /**
   * enter：总体时间，当有此 Prop 时将忽略 spring 相关属性，即 stiffness 和 damping
   */
  enterDuration: PropTypes.any,
  /**
   * enter：贝塞尔曲线，将在 duration 有效时应用，在 spring 动画时被忽略
   */
  enterEase: PropTypes.any,
  /**
   * enter：弹力 —— 在现实世界中是由材料和钢卷厚度（coil thickness）造成的。弹力越大，弹簧会收缩得更有力，动画也会变得活泼
   */
  enterTension: PropTypes.any,
  /**
   * enter：摩擦力 —— 摩擦力越高，就需要越多的力让物体运动，动画也会越慢。如果摩擦力足够低，物体会运动超过终点，产生数个回弹效果
   */
  enterFriction: PropTypes.any,
  /**
   * enter：起点的一些原子类名
   */
  enterFrom: PropTypes.any,
  /**
   * enter：终点的一些原子类名
   */
  enterTo: PropTypes.any,
  /**
   * leave：延迟
   */
  leaveDelay: PropTypes.any,
  /**
   * leave：总体时间，当有此 Prop 时将忽略 spring 相关属性，即 stiffness 和 damping
   */
  leaveDuration: PropTypes.any,
  /**
   * leave：贝塞尔曲线，将在 duration 有效时应用，在 spring 动画时被忽略
   */
  leaveEase: PropTypes.any,
  /**
   * leave：弹力 —— 在现实世界中是由材料和钢卷厚度（coil thickness）造成的。弹力越大，弹簧会收缩得更有力，动画也会变得活泼
   */
  leaveTension: PropTypes.any,
  /**
   * leave：摩擦力 —— 摩擦力越高，就需要越多的力让物体运动，动画也会越慢。如果摩擦力足够低，物体会运动超过终点，产生数个回弹效果
   */
  leaveFriction: PropTypes.any,
  /**
   * leave：起点的一些原子类名
   */
  leaveFrom: PropTypes.any,
  /**
   * leave：终点的一些原子类名
   */
  leaveTo: PropTypes.any,
  /**
   * 元素进场入场的开关
   */
  show: PropTypes.any,
  /**
   * 附加样式
   */
  style: PropTypes.any,
  /**
   * 节点
   */
  tag: PropTypes.any,
}

Transition.defaultProps = {
  afterEnter: undefined,
  afterLeave: undefined,
  appear: false,
  beforeEnter: undefined,
  beforeLeave: undefined,
  children: undefined,
  delay: undefined,
  duration: undefined,
  ease: undefined,
  tension: undefined,
  friction: undefined,
  from: "",
  to: "",
  enterDelay: undefined,
  enterDuration: undefined,
  enterEase: undefined,
  enterTension: undefined,
  enterFriction: undefined,
  enterFrom: "",
  enterTo: "",
  leaveDelay: undefined,
  leaveDuration: undefined,
  leaveEase: undefined,
  leaveTension: undefined,
  leaveFriction: undefined,
  leaveFrom: "",
  leaveTo: "",
  show: true,
  style: {},
  tag: "div",
}

export default Transition
