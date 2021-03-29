import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Affix from "../affix"
import { detectStickySupport } from "../_util/detectStickySupport"
import { LayoutContext } from "./Context"
import "./style"

const prefix = "adui-layout"

export interface IHeaderProps {
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
}

/**
 * 布局 - 头部 `<header />`
 */
const Header: React.FC<IHeaderProps> & {
  stickable: boolean
} = ({ affixed, children, className, ...otherProps }: IHeaderProps) => {
  const { setHeaderAffixed } = useContext(LayoutContext)

  useEffect(() => {
    if (setHeaderAffixed) {
      setHeaderAffixed(affixed || false)
    }
  }, [affixed])

  const header = (
    <header
      className={classNames(className, `${prefix}-header`, {
        [`${prefix}-header_affixed`]: affixed,
      })}
      {...otherProps}
    >
      {children}
    </header>
  )
  if (affixed && !Header.stickable) {
    return <Affix>{header}</Affix>
  }
  return header
}

Header.stickable = detectStickySupport()

Header.propTypes = {
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
}

Header.defaultProps = {
  affixed: false,
  children: "",
  className: undefined,
}

export default Header
