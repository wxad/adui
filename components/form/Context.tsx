import * as React from "react"

type ContextProps = {
  /**
   * item className
   */
  itemClassName?: string
  /**
   * item style
   */
  itemStyle?: React.CSSProperties
  /**
   * label 字符对齐方式
   */
  labelAlign?: "left" | "center" | "right" | null
  /**
   * label className
   */
  labelClassName?: string
  /**
   * label 字符数，Form 会以 em 单位设置 label 宽度
   */
  labelSize?: number | null
  /**
   * label style
   */
  labelStyle?: React.CSSProperties
}

export const FormContext = React.createContext<ContextProps>({})
