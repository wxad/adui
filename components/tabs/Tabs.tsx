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
            const { clientWidth, offsetLeft } = theActiveTab
            setIndicatorStyle({
              transform: `translateX(${Math.floor(offsetLeft)}px)`,
              transition: initial
                ? ""
                : `all var(--adui-motion-duration-bounce) linear(
                  0, 0.002, 0.006, 0.015, 0.026 2.2%, 0.059 3.4%, 0.106 4.8%, 0.152 5.9%,
                  0.21 7.2%, 0.462 12.4%, 0.575 14.8%, 0.681 17.4%, 0.727, 0.769, 0.809, 0.844,
                  0.876, 0.904, 0.929, 0.952, 0.971, 0.987 30.7%, 0.998, 1.007, 1.015, 1.021,
                  1.026, 1.029 38.4%, 1.031, 1.032 41.6% 43.7%, 1.03 46%, 1.01 59.6%, 1.006,
                  1.002 68.5%, 1 73.6%, 0.999 79.5%, 1
                )`,
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
