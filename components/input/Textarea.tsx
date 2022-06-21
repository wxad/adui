import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import warning from "../_util/warning"
import { ConfigContext, getComputedSize } from "../config-provider"
import "./style"

const noop = () => {}

const prefix = "adui-input"

export interface ITextareaProps {
  [key: string]: any
  /**
   * input 标签原生属性 - autoFocus
   */
  autoFocus?: boolean
  /**
   * 附加类名
   */
  className?: string
  /**
   * 是否按照一个汉字算 2 字数的方式限制长度
   */
  countHanzi?: boolean
  /**
   * 默认值 - 内部驱动
   */
  defaultValue?: string | null
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 输入框的 id
   */
  id?: string | null
  /**
   * 类型
   */
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
  /**
   * 作用到 input 元素的类名
   */
  inputClassName?: string
  /**
   * 作用到 input 元素的样式
   */
  inputStyle?: React.CSSProperties
  /**
   * 限制长度
   */
  limit?: number | null
  /**
   * input 标签原生属性 - name
   */
  name?: string | null
  /**
   * blur 时的 handler
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  /**
   * 值改变时的 handler
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, value?: string) => void
  /**
   * focus 时的 handler
   */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  /**
   * keydown 时的 handler
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  /**
   * enter 时的 handler
   */
  onPressEnter?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  /**
   * scroll 时的 handler
   */
  onScroll?: (e: React.UIEvent<HTMLTextAreaElement>) => void
  /**
   * placeholder
   */
  placeholder?: string
  /**
   * input 标签原生属性 - required
   */
  required?: boolean
  /**
   * 是否支持调整大小
   */
  resize?: "none" | "both" | "horizontal" | "vertical"
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 设置主题
   */
  theme?: null | "light"
  /**
   * input 标签原生属性 - type
   */
  type?: string | null
  /**
   * 值 - 外部控制
   */
  value?: string | null
}

/**
 * 输入区域，用于多行纯文本编辑。
 */
const Textarea: React.ForwardRefExoticComponent<
  ITextareaProps & React.RefAttributes<any>
> = forwardRef(
  (
    {
      autoFocus,
      className,
      countHanzi,
      defaultValue,
      disabled,
      id,
      inputClassName,
      inputStyle,
      intent,
      limit,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onPressEnter,
      onScroll,
      placeholder,
      required,
      resize,
      size: sizeProp,
      theme,
      type,
      value,
      ...otherProps
    }: ITextareaProps,
    ref
  ) => {
    const [focused, setFocused] = useState(false)

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const { size: sizeContext } = useContext(ConfigContext)

    const size = getComputedSize(sizeProp, sizeContext)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!disabled && onChange) {
        /* eslint-disable no-control-regex, max-len */
        // 08 Backspace, 09 Tab, 0B 垂直制表符, 0C 换页, 0D 回车, A0 不间断空格,
        // 2028/2029 分隔符, FEff 字节顺序标记。
        const val = e.target.value.replace(
          /\u0008|\u0009|\u000B|\u000C|\u000D|\u00A0|\u2028|\u2029|\uFEFF/g,
          ""
        )
        onChange(e, val)
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && onPressEnter) {
        onPressEnter(e)
      }
      if (onKeyDown) {
        onKeyDown(e)
      }
    }

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocused(false)
      if (onBlur) {
        onBlur(e)
      }
    }

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocused(true)
      if (onFocus) {
        onFocus(e)
      }
    }

    const fixControlledValue = (val?: string | null) => {
      if (typeof val === "undefined" || val === null) {
        return ""
      }
      return val
    }

    const getFormatStrLeng = (str: string) => {
      const len = str.length
      let realLength = 0
      let charCode = -1
      for (let i = 0; i < len; i += 1) {
        charCode = str.charCodeAt(i)
        if (charCode >= 0 && charCode <= 128) {
          realLength += 0.5
        } else {
          realLength += 1
        }
      }
      return Math.ceil(realLength)
    }

    useImperativeHandle(ref, () => ({
      input: textareaRef?.current,
      handleChange,
      handleKeyDown,
      handleBlur,
      handleFocus,
    }))

    const textareaProps: { [key: string]: any } = {
      autoFocus,
      className: classNames(`${prefix}-base`, inputClassName),
      disabled,
      id,
      name,
      onBlur: handleBlur,
      onChange: handleChange,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onScroll,
      placeholder,
      ref: textareaRef,
      required,
      style: { resize, ...inputStyle },
      type,
    }

    if (value !== null) {
      textareaProps.value = fixControlledValue(value)
    } else {
      textareaProps.defaultValue = fixControlledValue(defaultValue)
    }

    let length
    if (limit) {
      warning(
        resize === "none",
        "Input.Textarea",
        "不允许同时使用 prop `limit` 与 prop `resize`"
      )
      if (value) {
        length = countHanzi ? getFormatStrLeng(value) : value.length
      } else {
        warning(
          value !== null,
          "Input.Textarea",
          "如果要限制字数，必须从外部控制 value。"
        )
        length = 0
      }
    }

    const classSet = classNames(
      className,
      `${prefix}-wrapper`,
      `${prefix}-wrapper_textarea`,
      `${prefix}-${size}`,
      {
        [`${prefix}-${theme}`]: theme,
        [`${prefix}-disabled`]: disabled,
        [`${prefix}-limited`]: !!limit,
        [`${prefix}-normal`]: intent === "normal",
        [`${prefix}-primary`]: intent === "primary",
        [`${prefix}-success`]: intent === "success",
        [`${prefix}-warning`]: intent === "warning",
        [`${prefix}-danger`]:
          intent === "danger" || (length && limit && length > limit),
        [`${prefix}-focused`]: focused,
      }
    )

    return (
      <div className={classSet} {...otherProps}>
        <textarea {...textareaProps} />
        {!!limit && (
          <div className={`${prefix}-limit`}>
            <span>{`${length}/${limit}`}</span>
          </div>
        )}
      </div>
    )
  }
)

Textarea.propTypes = {
  /**
   * input 标签原生属性 - autoFocus
   */
  autoFocus: PropTypes.bool,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 是否按照一个汉字算 2 字数的方式限制长度
   */
  countHanzi: PropTypes.bool,
  /**
   * 默认值 - 内部驱动
   */
  defaultValue: PropTypes.string,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 输入框的 id
   */
  id: PropTypes.string,
  /**
   * 作用到 input 元素的类名
   */
  inputClassName: PropTypes.string,
  /**
   * 作用到 input 元素的样式
   */
  inputStyle: PropTypes.object,
  /**
   * 设置类型
   */
  intent: PropTypes.oneOf([
    "normal",
    "primary",
    "success",
    "warning",
    "danger",
  ]),
  /**
   * 限制长度
   */
  limit: PropTypes.number,
  /**
   * textarea 标签原生属性 - name
   */
  name: PropTypes.string,
  /**
   * blur 时的 handler
   */
  onBlur: PropTypes.func,
  /**
   * 值改变时的 handler
   */
  onChange: PropTypes.func,
  /**
   * focus 时的 handler
   */
  onFocus: PropTypes.func,
  /**
   * keydown 时的 handler
   */
  onKeyDown: PropTypes.func,
  /**
   * enter 时的 handler
   */
  onPressEnter: PropTypes.func,
  /**
   * scroll 时的 handler
   */
  onScroll: PropTypes.func,
  /**
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * input 标签原生属性 - required
   */
  required: PropTypes.bool,
  /**
   * 是否支持调整大小
   */
  resize: PropTypes.oneOf(["none", "both", "horizontal", "vertical"]),
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 设置主题
   */
  theme: PropTypes.oneOf([null, "light"]),
  /**
   * textarea 标签原生属性 - type
   */
  type: PropTypes.string,
  /**
   * 值 - 外部控制
   */
  value: PropTypes.string,
}

Textarea.defaultProps = {
  autoFocus: false,
  className: undefined,
  countHanzi: true,
  defaultValue: null,
  disabled: false,
  id: null,
  inputClassName: undefined,
  inputStyle: {},
  intent: "normal",
  limit: null,
  name: null,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  onKeyDown: noop,
  onPressEnter: noop,
  onScroll: noop,
  placeholder: "请输入",
  required: false,
  resize: "none",
  size: "small",
  theme: null,
  type: null,
  value: null,
}

Textarea.displayName = "Textarea"

export default Textarea
