import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import warning from "../_util/warning"
import { ConfigContext, getComputedSize } from "../config-provider"
import Button from "../button"
import "./style"

const noop = () => {}
const prefix = "adui-channels-pagination"

export interface IPaginationProps {
  [key: string]: any
  /**
   * 对齐方式
   */
  align?: "left" | "center" | "right"
  /**
   * 附加类名
   */
  className?: string
  /**
   * 当前页数
   */
  current?: number | null
  /**
   * 默认的当前页数
   */
  defaultCurrent?: number
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 只有一页时 return null
   */
  hideWhenSinglePage?: boolean
  /**
   * 当前页变化时的 handler
   */
  onChange?: (newPage: number, pageSize?: number) => void
  /**
   * 设置每页条数，默认 10 条
   */
  pageSize?: number
  /**
   * 是否显示首页尾页跳转按钮
   */
  showButtonJumper?: boolean
  /**
   * 是否显示跳转输入框
   */
  showInputJumper?: boolean
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 设置主题
   */
  theme?: null | "light"
  /**
   * 数据总数
   */
  total?: number
}

/**
 * 分页器用于将大量内容以分页形式间隔，切换选择查看。
 */
const Pagination: React.FC<IPaginationProps> = ({
  align,
  className,
  current: currentProp,
  defaultCurrent,
  disabled,
  hideWhenSinglePage,
  onChange,
  pageSize,
  showButtonJumper,
  showInputJumper,
  size: sizeProp,
  theme,
  total,
  ...otherProps
}: IPaginationProps) => {
  const [current, setCurrent] = useState<number>(
    (currentProp !== null ? currentProp : defaultCurrent) || 1
  )
  const [inputValue, setInputValue] = useState("")

  // 相当于生命周期 getDerivedStateFromProps
  if (
    currentProp !== null &&
    currentProp !== undefined &&
    current !== currentProp
  ) {
    setCurrent(currentProp)
  }

  const { size: sizeContext } = useContext(ConfigContext)
  const size = getComputedSize(sizeProp, sizeContext)

  const classSet = classNames(
    className,
    `${prefix}-base`,
    `${prefix}-${size}`,
    {
      [`${prefix}-${align}`]: align,
      [`${prefix}-disabled`]: disabled,
    }
  )

  warning(Number.isInteger(current), "Pagination", "current 值需要是正整数")

  warning(
    !(
      current < 1 ||
      (current > Math.ceil((total || 0) / (pageSize || 10)) && current !== 1)
    ),
    "Pagination",
    `current 需要时在正确范围内的正整数，total: ${total}，pageSize：${pageSize}`
  )

  let pageNumber = 1
  if (total && pageSize) {
    pageNumber = Math.max(Math.ceil(total / pageSize), 1)
  }
  const prevDisabled = current === 1
  const nextDisabled = current === pageNumber

  if (pageNumber === 1 && hideWhenSinglePage) {
    return null
  }

  const handleJump = (type: string) => {
    let newPage
    switch (type) {
      case "first":
        newPage = 1
        break
      case "prev":
        newPage = current - 1
        break
      case "next":
        newPage = current + 1
        break
      case "last":
        if (total && pageSize) {
          newPage = Math.max(Math.ceil(total / pageSize), 1)
        }
        break
      default:
    }

    if (newPage && pageSize) {
      if (currentProp === null) {
        setCurrent(newPage)
      }
      if (onChange) {
        onChange(newPage, pageSize)
      }
    }
  }

  const handleInputJump = () => {
    const parsevalue = parseInt(inputValue, 10)
    if (isNaN(parsevalue)) {
      return
    }
    let value = Math.max(parsevalue, 1)
    if (total && pageSize) {
      value = Math.min(value, Math.max(Math.ceil(total / pageSize), 1))
    }
    if (currentProp === null) {
      setCurrent(value)
    }
    if (onChange) {
      onChange(value, pageSize)
    }
  }

  return (
    <div className={classSet} data-current={current} {...otherProps}>
      {showButtonJumper && (
        <Button
          disabled={disabled}
          style={{ marginRight: "8px" }}
          leftIcon="arrow-left-first"
          size={size}
          theme={theme}
          onClick={() => {
            if (!prevDisabled) handleJump("first")
          }}
        />
      )}
      <div
        className={`${prefix}-btn ${prefix}-btn-left`}
        role="none"
        onClick={() => {
          if (!prevDisabled) handleJump("prev")
        }}
      />
      <span className={`${prefix}-text`}>
        {current} / {pageNumber}
      </span>
      <div
        className={`${prefix}-btn ${prefix}-btn-right`}
        role="none"
        onClick={() => {
          if (!nextDisabled) handleJump("next")
        }}
      />
      {showButtonJumper && (
        <Button
          disabled={disabled}
          style={{ marginLeft: "8px" }}
          leftIcon="arrow-right-last"
          size={size}
          theme={theme}
          onClick={() => {
            if (!nextDisabled) handleJump("last")
          }}
        />
      )}
      {showInputJumper && [
        <input
          key={0}
          className={`${prefix}-input`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />,
        <div
          role="none"
          className={`${prefix}-input-btn`}
          key={1}
          onClick={handleInputJump}
        >
          跳转
        </div>,
      ]}
    </div>
  )
}

Pagination.displayName = "Pagination"

Pagination.propTypes = {
  /**
   * 对齐方式
   */
  align: PropTypes.oneOf(["left", "center", "right"]),
  /**
   * 附加类名
   */
  className: PropTypes.string,
  /**
   * 当前页数
   */
  current: PropTypes.number,
  /**
   * 默认的当前页数
   */
  defaultCurrent: PropTypes.number,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 只有一页时 return null
   */
  hideWhenSinglePage: PropTypes.bool,
  /**
   * 当前页变化时的 handler
   */
  onChange: PropTypes.func,
  /**
   * 设置每页条数，默认 10 条
   */
  pageSize: PropTypes.number,
  /**
   * 是否显示首页尾页跳转按钮
   */
  showButtonJumper: PropTypes.bool,
  /**
   * 是否显示跳转输入框
   */
  showInputJumper: PropTypes.bool,
  /**
   * 设置尺寸
   */
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  /**
   * 设置主题
   */
  theme: PropTypes.oneOf([null, "light"]),
  /**
   * 数据总数
   */
  total: PropTypes.number,
}

Pagination.defaultProps = {
  align: undefined,
  className: undefined,
  current: null,
  defaultCurrent: 1,
  disabled: false,
  hideWhenSinglePage: true,
  onChange: noop,
  pageSize: 10,
  showButtonJumper: false,
  showInputJumper: true,
  size: "small",
  theme: null,
  total: 0,
}

export default Pagination
