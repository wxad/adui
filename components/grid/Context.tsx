import * as React from "react"

type ContextProps = {
  /**
   * 每列之间的间距
   */
  gutter?: number
}

export const RowContext = React.createContext<ContextProps>({})
