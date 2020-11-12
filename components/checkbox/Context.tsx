import * as React from "react"

type ContextProps = {
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 值改变的 handler，传递下去由子组件触发
   */
  handleGroupValueChange?: (checkboxValue: React.ReactText) => void
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 已选中的值
   */
  value?: null | Array<React.ReactText>
}

export const GroupContext = React.createContext<ContextProps>({})
