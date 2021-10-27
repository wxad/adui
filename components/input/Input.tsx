import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useEffect,
  useRef,
  useState,
} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Cleave from "cleave.js/react"
import warning from "../_util/warning"
import { ConfigContext, getComputedSize } from "../config-provider"
import Textarea from "./Textarea"
import "./style"

const prefix = "adui-input"

export interface IInputProps {
  [key: string]: any
  /**
   * input 标签原生属性 - autoComplete
   */
  autoComplete?: "on" | "off"
  /**
   * input 标签原生属性 - autoFocus
   */
  autoFocus?: boolean
  /**
   * 附加类名
   */
  className?: string
  /**
   * 实现手机号、日期、数字及自定义格式，可查看[示例](http://wxad.design/adui/components/input)。
   */
  cleaveOptions?: object
  /**
   * 宽度是否与内容宽度对齐
   */
  contentJustify?: boolean
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
   * 前置元素
   */
  leftElement?: JSX.Element
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
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  /**
   * 值改变时的 handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value?: string) => void
  /**
   * focus 时的 handler
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  /**
   * keydown 时的 handler
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /**
   * enter 时的 handler
   */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /**
   * placeholder
   */
  placeholder?: string
  /**
   * input 标签原生属性 - required
   */
  required?: boolean
  /**
   * 后置元素
   */
  rightElement?: JSX.Element
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 附加样式
   */
  style?: React.CSSProperties
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

export interface IInputRef {
  cleave: any
  input: HTMLInputElement
  leftElement: HTMLDivElement | null
  rightElement: HTMLDivElement | null
  updateElementsWidth: () => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void
  handleAttachedElementClick: (position: "left" | "right") => void
  focus: () => void
  blur: () => void
}

export interface IInput
  extends React.ForwardRefExoticComponent<
    IInputProps & React.RefAttributes<IInputRef>
  > {
  Textarea: typeof Textarea
}

/**
 * 输入框用于文本输入的区域，可结合图标、按钮、选择器等组件使用。
 */
// @ts-ignore
const Input: IInput = forwardRef(
  (
    {
      autoComplete,
      autoFocus,
      className,
      cleaveOptions,
      contentJustify,
      countHanzi,
      defaultValue,
      disabled,
      id,
      intent,
      leftElement,
      limit,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onPressEnter,
      placeholder,
      required,
      rightElement,
      size: sizeProp,
      style,
      theme,
      type,
      value,
      ...otherProps
    }: IInputProps,
    ref
  ) => {
    const [leftElementWidth, setLeftElementWidth] =
      useState<null | number>(null)
    const [rightElementWidth, setRightElementWidth] =
      useState<null | number>(null)
    const inputRef = useRef<any>(null)
    const wrapperElementRef = useRef<HTMLDivElement>(null)
    const leftElementRef = useRef<HTMLDivElement>(null)
    const rightElementRef = useRef<HTMLDivElement>(null)
    const justifyElementRef = useRef<HTMLDivElement>(null)
    const cleaveRef = useRef<any>(null)

    const inputElement = inputRef?.current || cleaveRef?.current?.element

    const { size: sizeContext } = useContext(ConfigContext)

    const size = getComputedSize(sizeProp, sizeContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        /* eslint-disable no-control-regex, max-len */
        // 08 Backspace, 09 Tab, 0A 换行符, 0B 垂直制表符, 0C 换页, 0D 回车, A0 不间断空格,
        // 2028/2029 分隔符, FEff 字节顺序标记。
        const val = e.target.value.replace(
          /\u0008|\u0009|\u000A|\u000B|\u000C|\u000D|\u00A0|\u2028|\u2029|\uFEFF/g,
          ""
        )
        onChange(e, val)
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e)
      }
      if (onKeyDown) {
        onKeyDown(e)
      }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(e)
      }
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(e)
      }
    }

    const handleAttachedElementClick = (position: "left" | "right") => {
      if (
        position === "left" &&
        leftElement &&
        leftElement.type &&
        leftElement.type.name === "Icon"
      ) {
        inputElement.focus()
        inputElement.select()
      }
      if (
        position === "right" &&
        rightElement &&
        rightElement.type &&
        rightElement.type.name === "Icon"
      ) {
        inputElement.focus()
        inputElement.select()
      }
    }

    const fixControlledValue = (val?: string | null) => {
      if (typeof val === "undefined" || val === null) {
        return ""
      }
      return val
    }

    const updateElementsWidth = () => {
      /**
       * 这个方法会在 didUpdate 和 didMount 时去 setState
       * 一定要避免造成循环。
       */
      if (leftElementRef?.current) {
        const { clientWidth } = leftElementRef.current

        // 防止循环
        if (Math.abs(clientWidth - (leftElementWidth || 0)) > 2) {
          setLeftElementWidth(clientWidth)
        }
      } else if (leftElementWidth) {
        setLeftElementWidth(null)
      }

      if (rightElementRef?.current) {
        const { clientWidth } = rightElementRef.current

        // 防止循环
        if (Math.abs(clientWidth - (rightElementWidth || 0)) > 2) {
          setRightElementWidth(clientWidth)
        }
      } else if (rightElementWidth) {
        setRightElementWidth(null)
      }

      if (justifyElementRef?.current) {
        const { scrollWidth } = justifyElementRef.current
        if (
          wrapperElementRef.current &&
          Math.ceil(scrollWidth) !== wrapperElementRef.current.clientWidth
        ) {
          wrapperElementRef.current.style.width = `${Math.ceil(scrollWidth)}px`
        }
      }
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

    useEffect(() => {
      updateElementsWidth()
      if (cleaveRef?.current) {
        const el = cleaveRef.current.element
        /**
         * 修复 cleave.1.4.7 bug:
         */
        if (cleaveRef.current.lastInputValue !== value) {
          cleaveRef.current.lastInputValue = value
        }
        if (cleaveRef.current.state.value !== value) {
          cleaveRef.current.state.value = value
        }
        if (cleaveRef.current.properties.result !== value) {
          cleaveRef.current.properties.result = value
        }
        if (el && el.value !== value && value) {
          el.value = value
        }
      }
    })

    useImperativeHandle(ref, () => {
      const realRef = inputRef?.current || cleaveRef?.current?.element
      return {
        cleave: cleaveRef?.current,
        input: realRef,
        leftElement: leftElementRef?.current,
        rightElement: rightElementRef?.current,
        updateElementsWidth,
        handleChange,
        handleKeyDown,
        handleBlur,
        handleFocus,
        handleAttachedElementClick,
        focus: () => realRef.focus(),
        blur: () => realRef.blur(),
      }
    })

    const inputProps: { [key: string]: any } = {
      autoComplete,
      autoFocus,
      className: `${prefix}-base`,
      disabled,
      id,
      name,
      onBlur: handleBlur,
      onChange: handleChange,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      placeholder,
      ref: inputRef,
      required,
      style: {
        paddingLeft: leftElementWidth ? `${leftElementWidth}px` : undefined,
        paddingRight: rightElementWidth ? `${rightElementWidth}px` : undefined,
      },
      type,
    }

    const cleaveInputProps = { ...inputProps }

    if (value !== null) {
      inputProps.value = fixControlledValue(value)
    } else {
      inputProps.defaultValue = fixControlledValue(defaultValue)
    }

    /**
     * cleave 不接收原生的 defaultValue，必须传入 value prop 来实现 defaultValue 的作用
     * https://github.com/nosir/cleave.js/blob/master/doc/reactjs-component-usage.md#how-to-pass-default-value
     */
    cleaveInputProps.value = value || defaultValue || ""

    const input =
      !cleaveOptions || Object.keys(cleaveOptions).length === 0 ? (
        <input {...inputProps} />
      ) : (
        <Cleave options={cleaveOptions} {...cleaveInputProps} ref={cleaveRef} />
      )

    let length
    if (limit) {
      warning(
        !rightElement,
        "Input",
        "不允许同时使用 prop `limit` 与 prop `rightElement`"
      )
      if (value) {
        length = countHanzi ? getFormatStrLeng(value) : value.length
      } else {
        warning(
          value !== null,
          "Input",
          "如果要使用 limit Prop，必须从外部控制 value。"
        )
        length = 0
      }
    }
    if (contentJustify) {
      warning(
        value !== null,
        "Input",
        "如果使用 contentJusfity Prop，必须从外部控制 value。"
      )
    }

    const classSet = classNames(
      className,
      `${prefix}-wrapper`,
      `${prefix}-${size}`,
      {
        [`${prefix}-${theme}`]: theme,
        [`${prefix}-disabled`]: disabled,
        [`${prefix}-limited`]: limit,
        [`${prefix}-limited_digit-over-2`]:
          limit && limit.toString().length > 2,
        [`${prefix}-normal`]: intent === "normal",
        [`${prefix}-primary`]: intent === "primary",
        [`${prefix}-success`]: intent === "success",
        [`${prefix}-warning`]: intent === "warning",
        [`${prefix}-danger`]:
          intent === "danger" || (length && limit && length > limit),
      }
    )

    const leftType =
      leftElement && leftElement.type ? leftElement.type.type : ""
    const rightType =
      rightElement && rightElement.type ? rightElement.type.type : ""

    return (
      <div
        ref={wrapperElementRef}
        className={classSet}
        style={style}
        {...otherProps}
      >
        {!!leftElement && (
          <div
            ref={leftElementRef}
            onClick={() => handleAttachedElementClick("left")}
            role="none"
            className={classNames(`${prefix}-left`, {
              [`${prefix}-left_button`]: leftType === "Button",
              [`${prefix}-left_icon`]: leftType === "Icon",
              [`${prefix}-left_select`]: leftType === "Select",
            })}
          >
            {leftElement}
          </div>
        )}
        {input}
        {!!rightElement && (
          <div
            ref={rightElementRef}
            onClick={() => handleAttachedElementClick("right")}
            role="none"
            className={classNames(`${prefix}-right`, {
              [`${prefix}-right_button`]: rightType === "Button",
              [`${prefix}-right_icon`]: rightType === "Icon",
              [`${prefix}-right_select`]: rightType === "Select",
            })}
          >
            {rightElement}
          </div>
        )}
        {limit && (
          <div className={`${prefix}-limit`}>
            <span>{`${length}/${limit}`}</span>
          </div>
        )}
        {contentJustify && (
          <div
            className={`${prefix}-justify`}
            ref={justifyElementRef}
            style={{
              paddingLeft: leftElementWidth
                ? `${leftElementWidth}px`
                : undefined,
              paddingRight: rightElementWidth
                ? `${rightElementWidth}px`
                : undefined,
              minWidth: style?.minWidth,
            }}
          >
            {fixControlledValue(value)}
          </div>
        )}
      </div>
    )
  }
)

Input.Textarea = Textarea

Input.displayName = "Input"

Input.propTypes = {
  /**
   * input 标签原生属性 - autoComplete
   */
  autoComplete: PropTypes.oneOf(["on", "off"]),
  /**
   * input 标签原生属性 - autoFocus
   */
  autoFocus: PropTypes.bool,
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 实现手机号、日期、数字及自定义格式，可查看[示例](http://wxad.design/adui/components/input)。
   */
  cleaveOptions: PropTypes.object,
  /**
   * 宽度是否与内容宽度对齐
   */
  contentJustify: PropTypes.bool,
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
   * 类型
   */
  intent: PropTypes.oneOf([
    "normal",
    "primary",
    "success",
    "warning",
    "danger",
  ]),
  /**
   * 前置元素
   */
  leftElement: PropTypes.any,
  /**
   * 限制长度
   */
  limit: PropTypes.number,
  /**
   * input 标签原生属性 - name
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
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * input 标签原生属性 - required
   */
  required: PropTypes.bool,
  /**
   * 后置元素
   */
  rightElement: PropTypes.any,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 附加样式
   */
  style: PropTypes.object,
  /**
   * 设置主题
   */
  theme: PropTypes.oneOf([null, "light"]),
  /**
   * input 标签原生属性 - type
   */
  type: PropTypes.string,
  /**
   * 值 - 外部控制
   */
  value: PropTypes.string,
}

Input.defaultProps = {
  autoComplete: "off",
  autoFocus: false,
  className: undefined,
  cleaveOptions: {},
  contentJustify: false,
  countHanzi: true,
  defaultValue: null,
  disabled: false,
  id: null,
  intent: "normal",
  leftElement: undefined,
  limit: null,
  name: null,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  onPressEnter: () => {},
  placeholder: "请输入",
  required: false,
  rightElement: undefined,
  size: "small",
  style: {},
  theme: null,
  type: null,
  value: null,
}

export default Input
