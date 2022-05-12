import * as React from "react"
import PropTypes from "prop-types"
import RcSelect, { Option, OptGroup } from "rc-select"
import { ConfigContext } from "../config-provider"
import Input, { IInputProps } from "../input"
import omit from "../_util/omit"
import "./style"

const noop = () => {}

export interface ISuggest {
  getPopupDOMNode: () => HTMLElement
  getInputDOMNode: () => HTMLInputElement
}

export interface IOption {
  [key: string]: any
  key: string
  value: string
  children: React.ReactNode
}

export interface ISuggestProps {
  [key: string]: any
  /**
   * 是否在搜索框为空时，自动隐藏 popup
   */
  autoHidePopup?: boolean
  /**
   * input 标签原生属性 - autoFocus
   */
  autoFocus?: boolean
  children?: React.ReactNode
  defaultOpen?: boolean | null
  /**
   * 默认值 - 内部驱动
   */
  defaultValue?: string | null
  dataSource?: any[]
  /**
   * 接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false
   */
  filterOption?: (inputValue: string, option: any) => boolean
  /**
   * 指定弹出层的父级，默认为 document.body
   */
  getPopupContainer?: null | ((node: HTMLElement) => HTMLElement)
  inputProps?: IInputProps
  /**
   * 类型
   */
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
  leftElement?: JSX.Element
  notFoundContent?: string | null
  onInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onDropdownVisibleChange?: (open: boolean) => void
  onSearch?: (val: string) => void
  onSelect?: (value: string, option: IOption) => void
  open?: null | boolean
  placeholder?: string
  rightElement?: JSX.Element
  /**
   * 设置尺寸
   */
  size?: "mini" | "small" | "medium" | "large"
  /**
   * 设置主题
   */
  theme?: null | "light"
  value?: string | null
}

export interface ISuggestState {
  open?: boolean
  searchValue?: string
}
/**
 * 下拉选择器。
 */
class Suggest extends React.Component<ISuggestProps, ISuggestState> {
  public static Option: typeof Option = Option

  public static OptGroup: typeof OptGroup = OptGroup

  public static propTypes = {
    /**
     * 是否在搜索框为空时，自动隐藏 popup
     */
    autoHidePopup: PropTypes.bool,
    /**
     * input 标签原生属性 - autoFocus
     */
    autoFocus: PropTypes.bool,
    /**
     * 子节点
     */
    children: PropTypes.node,
    /**
     * 下拉列表
     */
    dataSource: PropTypes.array,
    /**
     * 内部驱动：是否展开
     */
    defaultOpen: PropTypes.bool,
    /**
     * 默认值 - 内部驱动
     */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false
     */
    filterOption: PropTypes.func,
    /**
     * 指定弹出层的父级，默认为 document.body
     */
    getPopupContainer: PropTypes.func,
    /**
     * 传递给 <Input /> 的 Props
     */
    inputProps: PropTypes.object,
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
    leftElement: PropTypes.node,
    /**
     * 无匹配结果时的显示文字
     */
    notFoundContent: PropTypes.string,
    /**
     * 下拉展示发生变化时的 handler，参数：bool
     */
    onDropdownVisibleChange: PropTypes.func,
    /**
     * input key press 时的 handler,如果想禁用回车选择，可以尝试：
      onInputKeyDown={(e) => {
        if (e.key === "Enter") {
          e.stopPropagation()
        }
      }}
     */
    onInputKeyDown: PropTypes.func,
    /**
     * 搜索时的 handler，参数：value
     */
    onSearch: PropTypes.func,
    /**
     * 选择时的 handler，参数：(value, option)
     */
    onSelect: PropTypes.func,
    /**
     * 从外部指定下拉是否展开
     */
    open: PropTypes.bool,
    /**
     * 选择框默认文字
     */
    placeholder: PropTypes.string,
    /**
     * 后置元素
     */
    rightElement: PropTypes.node,
    /**
     * 设置尺寸
     */
    size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
    /**
     * 设置主题
     */
    theme: PropTypes.oneOf([null, "light"]),
    /**
     * 从外部指定当前选中项的值
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  public static defaultProps: ISuggestProps = {
    autoHidePopup: true,
    autoFocus: false,
    children: null,
    dataSource: [],
    defaultOpen: null,
    defaultValue: "",
    filterOption: undefined,
    getPopupContainer: null,
    inputProps: {},
    intent: "normal",
    leftElement: undefined,
    notFoundContent: null,
    onDropdownVisibleChange: noop,
    onInputKeyDown: noop,
    onSearch: noop,
    onSelect: noop,
    open: null,
    placeholder: "请选择",
    rightElement: undefined,
    size: "small",
    theme: null,
    value: null,
  }

  public static getDerivedStateFromProps = ({ open, value }: ISuggestProps) => {
    const newState: ISuggestState = {}
    if (open !== null) {
      newState.open = open
    }
    if (value !== null) {
      newState.searchValue = (value || "").toString()
    }
    return Object.keys(newState).length > 0 ? newState : null
  }

  public locked = false

  public suggest: ISuggest

  constructor(props: ISuggestProps) {
    super(props)
    const { defaultOpen, defaultValue, open, value } = props

    let openState: boolean | undefined
    if (open !== null) {
      openState = open
    } else if (defaultOpen !== null) {
      openState = defaultOpen
    }

    this.state = {
      open: openState,
      searchValue: (value || defaultValue || "").toString(),
    }
  }

  public saveSuggest = (node: ISuggest) => {
    if (node) {
      this.suggest = node
    }
  }

  public onDropdownVisibleChange = (open: boolean) => {
    const { onDropdownVisibleChange, open: openProp } = this.props

    if (openProp === null) {
      this.setState({ open })
    }
    if (onDropdownVisibleChange) onDropdownVisibleChange(open)
  }

  public onSearch = (val: string) => {
    const { onSearch } = this.props
    const { open } = this.state
    this.setState({ searchValue: val })

    if (!open) {
      this.setState({ open: true })
    }
    if (onSearch) {
      onSearch(val)
    }
  }

  public render() {
    const {
      autoHidePopup,
      dataSource,
      defaultValue,
      filterOption: filterOptionProp,
      getPopupContainer,
      inputProps,
      intent,
      leftElement,
      placeholder,
      rightElement,
      size,
      theme,
      value,
      ...otherProps
    } = this.props

    const { open: openState, searchValue } = this.state

    const restProps = omit(otherProps, [
      "defaultOpen",
      "onSearch",
      "onDropdownVisibleChange",
      "open",
    ])

    // openState 可能是 undefined or null
    const selectProps: {
      defaultValue?: React.ReactText | null
      open?: boolean
      value?: React.ReactText | null
    } = {}
    if (typeof openState === "boolean") {
      selectProps.open = openState
    }
    if (value !== null) {
      selectProps.value = value
    } else {
      selectProps.defaultValue = defaultValue
    }

    const filterOption =
      filterOptionProp ||
      ((inputValue: string, o: any) => {
        if (typeof o !== "string") {
          return o.props.title.toUpperCase().includes(inputValue.toUpperCase())
        }
        return o.toUpperCase().includes(inputValue.toUpperCase())
      })

    let options = dataSource
      ? dataSource
          .filter((o) => {
            if (searchValue) {
              return filterOption(searchValue, o)
            }
            return true
          })
          .map((item) => {
            if (React.isValidElement(item)) {
              return item
            }
            return (
              <Option key={item} value={item}>
                {item}
              </Option>
            )
          })
      : []

    if (autoHidePopup && !searchValue) {
      options = []
    }

    return (
      <ConfigContext.Consumer>
        {({ getPopupContainer: getPopupContainerContext }) => (
          <RcSelect
            mode="combobox"
            menuItemSelectedIcon={null}
            dropdownMatchSelectWidth
            dropdownClassName="adui-suggest-dropdown"
            defaultActiveFirstOption
            getPopupContainer={getPopupContainer || getPopupContainerContext}
            onDropdownVisibleChange={this.onDropdownVisibleChange}
            onSearch={this.onSearch}
            optionFilterProp="children"
            prefixCls="adui-suggest"
            showSearch
            ref={this.saveSuggest}
            transitionName="slide-up"
            getInputElement={() => (
              <Input
                intent={intent}
                leftElement={leftElement}
                placeholder={placeholder}
                rightElement={rightElement}
                size={size}
                theme={theme}
                {...inputProps}
              />
            )}
            {...selectProps}
            {...restProps}
          >
            {options}
          </RcSelect>
        )}
      </ConfigContext.Consumer>
    )
  }
}

export default Suggest
