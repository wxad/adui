import * as React from "react"

type ContextProps = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * tab 的间距 margin
   */
  gutter?: number
  /**
   * 值改变的 handler，传递下去由子组件触发
   */
  handleTabsValueChange?: (value: React.ReactText) => void
  /**
   * 已选中项
   */
  value?: React.ReactText | null
}

export const TabsContext = React.createContext<ContextProps>({})
