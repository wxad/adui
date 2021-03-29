import * as React from "react"
import PropTypes from "prop-types"

type sizeType = "mini" | "small" | "medium" | "large"

export interface IConfigConsumerProps {
  /**
   * 指定气泡提示的父级，默认为 document.body
   */
  getPopupContainer?: null | ((node: HTMLElement) => HTMLElement)
  /**
   * 设置所有组件的 size
   */
  size?: sizeType
}

export interface IConfigProviderProps extends IConfigConsumerProps {
  /**
   * 子节点
   */
  children: React.ReactNode
}

export const ConfigContext = React.createContext<IConfigConsumerProps>({})

export const ConfigConsumer = ConfigContext.Consumer

/**
 * 三个 param，权重依次递减
 */
export const getComputedSize = (
  size0?: sizeType,
  size1?: sizeType,
  size2?: sizeType
): sizeType => {
  if (size0 !== "small" && size0) {
    return size0
  }
  if (size1 !== "small" && size1) {
    return size1
  }
  return size2 || size1 || size0 || "small"
}

const ConfigProvider: React.FC<IConfigProviderProps> = ({
  children,
  getPopupContainer,
  size,
  ...otherProps
}) => {
  return (
    <ConfigContext.Provider value={{ getPopupContainer, size }} {...otherProps}>
      {children}
    </ConfigContext.Provider>
  )
}

ConfigProvider.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node.isRequired,
  /**
   * 设置所有组件的 size
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 指定气泡提示的父级，默认为 document.body
   */
  getPopupContainer: PropTypes.func,
}

ConfigProvider.defaultProps = {
  getPopupContainer: undefined,
  size: undefined,
}

export default ConfigProvider
