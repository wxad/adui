import React, { useContext, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Button from "../button"
import Affix from "../affix"
import { detectStickySupport } from "../_util/detectStickySupport"
import { preventOuterScroll } from "../_util/preventOuterScroll"
import { LayoutContext } from "./Context"
import "./style"

const prefix = "adui-layout"

export interface IAsideProps {
  [key: string]: any
  /**
   * 是否固定
   */
  affixed?: boolean
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 附加类名
   */
  className?: string
  /**
   * 是否收起
   */
  collapsed?: boolean
  /**
   * 是否支持收起
   */
  collapsible?: boolean
  /**
   * 收起状态变化时的 handler
   */
  onCollapseChange?: (collapsed: boolean) => void
}

/**
 * 布局 - 侧边栏 `<aside />`
 */
const Aside: React.FC<IAsideProps> & {
  stickable: boolean
} = ({
  affixed,
  children,
  className,
  collapsed,
  collapsible,
  onCollapseChange,
  ...otherProps
}: IAsideProps) => {
  const { headerAffixed } = useContext(LayoutContext)
  const asideRef = useRef<HTMLElement>(null)
  const asideContentRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (asideRef?.current && affixed && headerAffixed) {
      asideRef.current.style.maxHeight =
        scrollY >= 0 && scrollY <= 72
          ? `calc(100vh - ${72 - scrollY}px)`
          : "100vh"
    }
  }

  const handleCollapseChange = (bool: boolean) => {
    if (onCollapseChange) {
      onCollapseChange(bool)
    }
  }

  const bindScrollEvent = () => {
    if (affixed && !headerAffixed) {
      window.addEventListener("scroll", handleScroll)
    }
  }

  useEffect(() => {
    setTimeout(bindScrollEvent, 0)
    if (asideContentRef?.current) {
      asideContentRef.current.addEventListener("wheel", preventOuterScroll, {
        passive: false,
      })
    }
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  let offsetTop
  if (affixed && headerAffixed) {
    offsetTop = 72
  }
  if (affixed && !headerAffixed) {
    offsetTop = 0
  }

  const asideContent = (
    <aside
      className={classNames(className, `${prefix}-aside`, {
        [`${prefix}-aside_affixed`]: affixed && headerAffixed,
        [`${prefix}-aside_affixed_alone`]: affixed && !headerAffixed,
        [`${prefix}-aside_collapsed`]: collapsed,
        [`${prefix}-aside_collapsible`]: collapsible,
      })}
      {...otherProps}
      ref={asideRef}
    >
      <div className={classNames(`${prefix}-asideInner`)}>
        {collapsible && (
          <div
            className={`${prefix}-asideBackButton`}
            onClick={() => handleCollapseChange(true)}
            role="none"
          >
            <Button theme="light" leftIcon="arrow-back" />
          </div>
        )}
        <div className={`${prefix}-asideContent`} ref={asideContentRef}>
          {children}
        </div>
      </div>
      <div
        className={`${prefix}-asideMask`}
        onClick={() => handleCollapseChange(true)}
        role="none"
      />
    </aside>
  )
  if (affixed && !Aside.stickable) {
    return <Affix offsetTop={offsetTop}>{asideContent}</Affix>
  }
  return asideContent
}

Aside.stickable = detectStickySupport()

Aside.propTypes = {
  /**
   * 是否固定
   */
  affixed: PropTypes.bool,
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 是否收起
   */
  collapsed: PropTypes.bool,
  /**
   * 是否支持收起
   */
  collapsible: PropTypes.bool,
  /**
   * 收起状态变化时的 handler
   */
  onCollapseChange: PropTypes.func,
}

Aside.defaultProps = {
  affixed: false,
  children: "",
  className: undefined,
  collapsed: false,
  collapsible: false,
  onCollapseChange: () => {},
}

export default Aside
