import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { ITrigger } from "../pop-trigger"
import "./style"

const prefix = "adui-tooltip"

export interface IPopupProps {
  [key: string]: any
  content?: React.ReactNode
  trigger?: ITrigger
}

const Popup: React.FunctionComponent<IPopupProps> = ({
  content,
  trigger,
}: IPopupProps) => {
  useEffect(() => {
    /**
     * 在 Slider 中用 Tooltip 时发现 PopTrigger 不会在每一次移动时触发 onPopupAlign
     * 所以在这里利用 trigger 的接口强制定位
     */
    if (trigger && trigger.forcePopupAlign) {
      trigger.forcePopupAlign()
    }
  })
  return (
    <div className={`${prefix}-content`}>
      <i className={`${prefix}-arrow`} />
      <div>{content}</div>
    </div>
  )
}

Popup.propTypes = {
  /**
   * 弹出内容
   */
  content: PropTypes.node,
  /**
   * trigger 对象
   */
  trigger: PropTypes.object,
}

Popup.defaultProps = {
  content: null,
  trigger: undefined,
}

export default Popup
