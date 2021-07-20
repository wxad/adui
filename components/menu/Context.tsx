import * as React from "react"

type ContextProps = {
  /**
   * 最小宽度
   */
  minWidth?: number
  /**
   * 其下的 SubMenu 展开状态发生变化的 handler，参数1 index，参数2 bool
   */
  onExpandChange?: (index: React.ReactText, open: boolean) => void
  /**
   * 其下的 Item 点击的 handler，参数 index。当然也可以在每个 Item 上加 onClick prop。
   * 这个 prop 也只是作为一个 context，其下 Item 的 onClick 都会触发此方法。
   */
  onItemClick?: (index: React.ReactText) => void
}

export const MenuContext = React.createContext<ContextProps>({})
