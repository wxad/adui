import * as React from "react"

type ContextProps = {
  headerAffixed?: boolean
  setHeaderAffixed?: (headerAffixed: boolean) => void
}

export const LayoutContext = React.createContext<ContextProps>({})
