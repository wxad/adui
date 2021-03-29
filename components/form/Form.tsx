import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { FormContext } from "./Context"
import Item from "./Item"
import Tip from "./Tip"
import "./style"

const prefix = "adui-form"

export interface IFormProps {
  [key: string]: any
  /**
   * 子节点
   */
  children?: React.ReactNode
  /**
   * 附加类名
   */
  className?: string
  /**
   * item style
   */
  itemStyle?: React.CSSProperties
  /**
   * label 字符对齐方式
   */
  labelAlign?: "left" | "center" | "right" | null
  /**
   * label 字符数，Form 会以 em 单位设置 label 宽度
   */
  labelSize?: number | null
  /**
   * label style
   */
  labelStyle?: React.CSSProperties
}

/**
 * 表单，包含表单项标题、输入内容、行动按钮等数据采集的集合形态。通常服务于大量需要收集用户信息场景。
 */
const Form: React.FC<IFormProps> & {
  Item: typeof Item
  Tip: typeof Tip
} = ({
  children,
  className,
  itemStyle,
  labelAlign,
  labelSize,
  labelStyle,
  ...otherProps
}: IFormProps) => {
  const classSet = classNames(className, `${prefix}-base`)

  return (
    <FormContext.Provider
      value={{ itemStyle, labelAlign, labelSize, labelStyle }}
    >
      <div className={classSet} {...otherProps}>
        {children}
      </div>
    </FormContext.Provider>
  )
}

Form.Item = Item

Form.Tip = Tip

Form.propTypes = {
  /**
   * 子节点
   */
  children: PropTypes.node,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * item style
   */
  itemStyle: PropTypes.object,
  /**
   * label 字符对齐方式
   */
  labelAlign: PropTypes.oneOf(["left", "center", "right"]),
  /**
   * label 字符数，Form 会以 em 单位设置 label 宽度
   */
  labelSize: PropTypes.number,
  /**
   * label style
   */
  labelStyle: PropTypes.object,
}

Form.defaultProps = {
  children: null,
  className: undefined,
  itemStyle: {},
  labelAlign: null,
  labelSize: null,
  labelStyle: {},
}

export default Form
