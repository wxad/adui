import * as React from "react"

type ContextProps = {
  /**
   * 是否禁用
   */
  disabled?: boolean | null
  /**
   * 设置内部所有 <Button /> 类型
   */
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
  /**
   * 尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 主题
   */
  theme?: null | "light"
}

export const ButtonGroupContext = React.createContext<ContextProps>({})
