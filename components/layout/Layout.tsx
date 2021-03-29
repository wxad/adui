import React, { useState } from "react"
import PropTypes from "prop-types"
import Aside from "./Aside"
import Header from "./Header"
import Main from "./Main"
import { LayoutContext } from "./Context"

export interface ILayoutProps {
  [key: string]: any
  /**
   * 子节点
   */
  children?: React.ReactNode
}

/**
 * 布局组件用于搭建一个网站的基本框架。包含子组件 `Aside` `Header` `Main`
 */
const Layout: React.FC<ILayoutProps> & {
  Aside: typeof Aside
  Header: typeof Header
  Main: typeof Main
} = (props: ILayoutProps) => {
  const [headerAffixed, setHeaderAffixed] = useState(false)

  return (
    <LayoutContext.Provider value={{ headerAffixed, setHeaderAffixed }}>
      <div {...props} />
    </LayoutContext.Provider>
  )
}
Layout.Aside = Aside
Layout.Header = Header
Layout.Main = Main

Layout.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: null,
}

export default Layout
