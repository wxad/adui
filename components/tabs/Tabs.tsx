/* eslint-disable max-len */
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { useIsInitialRender } from "../_util/hooks/use-is-initial-render"
import { ConfigContext, getComputedSize } from "../config-provider"
import ResizeObserver from "../resize-observer"
import Tab from "./Tab"
import { TabsContext } from "./Context"
import "./style"
import { BOUNCE_DISTANCE } from "../_util/motion"

const prefix = "adui-tabs"

export interface ITabsProps {
  [key: string]: any
  /**
   * 是否通栏分配宽度（flex: 1;）
   */
  banner?: boolean
  /**
   * 子节点
   */
  children: React.ReactNode
  /**
   * 附加类名
   */
  className?: string
  /**
   * 默认的已选中项
   */
  defaultValue?: React.ReactText | null
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * tab 的间距 margin
   */
  gutter?: number
  /**
   * 值变化时的 handler
   */
  onChange?: (value: React.ReactText) => void
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 已选中项
   */
  value?: React.ReactText | null
}

export interface ITabs
  extends React.ForwardRefExoticComponent<
    ITabsProps & React.RefAttributes<HTMLDivElement>
  > {
  Tab: typeof Tab
}

/**
 * 导航页签，顶部横向导航的内容，用于切换页面中同一层级的内容。
 */
// @ts-ignore
const Tabs: ITabs = forwardRef(
  (
    {
      banner,
      className,
      children,
      defaultValue,
      disabled,
      gutter,
      onChange,
      size,
      value: valueProp,
      ...otherProps
    }: ITabsProps,
    ref: any
  ) => {
    const initial = useIsInitialRender()
    const indicatorRef = useRef<HTMLDivElement>(null)

    /**
     * 初始化 value state
     * 1. 优先判断 Prop value，如果存在 Prop value，则 Tabs 完全交由外部控制，内部状态无效；
     * 2. 再判断 Prop defaultValue，如果存在默认值，则 Tabs 状态为此默认值；
     * 3. 如果都没有，则取 Tab children 第 0 项的 value，将第 0 项设置为当前项。
     *
     * 以上三个判断可能存在冲突，所以在此说明条件判断的优先级。
     */
    const [value, setValue] = useState(() => {
      let val
      if (valueProp !== null && valueProp !== undefined) {
        val = valueProp
      } else if (defaultValue !== null && defaultValue !== undefined) {
        val = defaultValue
      }
      return val
    })

    // 相当于生命周期 getDerivedStateFromProps
    if (valueProp !== null && value !== valueProp) {
      setValue(valueProp)
    }

    const tabsRef = useRef<HTMLDivElement>(null)

    const { size: sizeContext } = useContext(ConfigContext)

    const setIndicatorStyle = (styles: React.CSSProperties) => {
      Object.keys(styles).forEach((key: keyof React.CSSProperties) => {
        if (indicatorRef.current) {
          // @ts-ignore
          indicatorRef.current.style[key] = styles[key]
        }
      })
    }

    const updateIndicatorStyle = () => {
      setTimeout(() => {
        if (tabsRef && tabsRef.current) {
          const theActiveTab = tabsRef.current.querySelector(
            '[aria-selected="true"]'
          ) as HTMLDivElement
          if (theActiveTab) {
            const lastOffsetLeft =
              indicatorRef.current?.style.transform.match(
                /translate3d\((\d+)px/
              )?.[1] || 0
            const { clientWidth, offsetLeft } = theActiveTab
            const delta = Math.abs(offsetLeft - Number(lastOffsetLeft))
            const transition =
              delta < BOUNCE_DISTANCE
                ? "all var(--adui-motion-duration-base) var(--adui-motion-ease-base)"
                : "all 0.35s linear(0,0.002,0.006,0.014,0.025 2.5%,0.056 3.8%,0.1,0.144,0.198 8%,0.436 13.9%,0.544,0.645 19.6%,0.69,0.731,0.769,0.803,0.834,0.862,0.888,0.911,0.931,0.949,0.964,0.976,0.987,0.996,1.003,1.009,1.013 47.3%,1.015 49.7%,1.017 53%,1.016 56.9%,1.006 72.6%,1.002 81.4%,1.001 89.7%,1)"

            setIndicatorStyle({
              transform: `translate3d(${Math.floor(offsetLeft)}px, 0, 0)`,
              transition: initial ? "" : transition,
              width: `${clientWidth}px`,
            })
          } else {
            setIndicatorStyle({ opacity: 0 })
          }
        }
      }, 0)
    }

    useImperativeHandle(ref, () => ({
      updateIndicatorStyle,
      getDomNode: () => tabsRef.current,
    }))

    const handleTabsValueChange = (val: React.ReactText) => {
      if (valueProp === null) {
        setValue(val)
      }
      if (onChange) {
        onChange(val)
      }
    }

    useEffect(() => {
      updateIndicatorStyle()
    })

    const classSet = classNames(
      className,
      `${prefix}-base`,
      `${prefix}-${getComputedSize(size, sizeContext)}`,
      {
        [`${prefix}-banner`]: banner,
        [`${prefix}-base_disabled`]: disabled,
      }
    )

    return (
      <TabsContext.Provider
        value={{ disabled, gutter, handleTabsValueChange, value }}
      >
        <ResizeObserver
          onResize={() => {
            if (!initial) {
              updateIndicatorStyle()
            }
          }}
        >
          <div
            className={classSet}
            data-value={value}
            ref={tabsRef}
            {...otherProps}
          >
            <div ref={indicatorRef} className={`${prefix}-indicator`} />
            {children}
          </div>
        </ResizeObserver>
      </TabsContext.Provider>
    )
  }
)

Tabs.Tab = Tab

Tabs.displayName = "Tabs"

Tabs.propTypes = {
  /**
   * 是否通栏分配宽度（flex: 1;）
   */
  banner: PropTypes.bool,
  /**
   * 子节点
   */
  children: PropTypes.node.isRequired,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 默认的已选中项
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * tab 的间距 margin
   */
  gutter: PropTypes.number,
  /**
   * 值变化时的 handler
   */
  onChange: PropTypes.func,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 已选中项
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Tabs.defaultProps = {
  banner: false,
  className: undefined,
  defaultValue: null,
  disabled: false,
  gutter: undefined,
  onChange: () => {},
  size: "small",
  value: null,
}

export default Tabs
