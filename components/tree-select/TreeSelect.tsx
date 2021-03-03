/* eslint-disable max-len */
import * as React from "react"
import RcTreeSelect, {
  SHOW_ALL,
  SHOW_PARENT,
  SHOW_CHILD,
  TreeNode,
} from "rc-tree-select"
import PropTypes from "prop-types"
import shallowEqual from "shallowequal"
import classNames from "classnames"
import toArray from "rc-util/lib/Children/toArray"
import omit from "../_util/omit"
import { ConfigContext } from "../config-provider"
import Icon from "../icon"
import Popover from "../popover"
import Spinner from "../spinner"
import getPlacements from "../tooltip/placements"
import { Placement } from "../pop-trigger"
import "./style"

const prefix = "adui-tree-select"
const noop = () => {}

const strategies = {
  "show-all": SHOW_ALL,
  "show-child": SHOW_CHILD,
  "show-parent": SHOW_PARENT,
}

export type TreeNodeValue = string[] | number[] | null

export interface ITreeNode {
  value: string
  label: string
  key: string
  disabled: boolean
}

export interface ITreeSelectProps {
  [key: string]: any
  autoClearSearchValue?: boolean
  className?: string
  defaultValue?: TreeNodeValue
  disabled?: boolean
  getPopupContainer?: null | ((node: HTMLElement) => HTMLElement)
  maxTagCount?: null | number
  multiple?: boolean
  onChange?: (value: TreeNodeValue, titleList: React.ReactNode[]) => void
  onDropdownVisibleChange: (visible: boolean) => void
  onSearch?: (value: string) => void
  placement?: Placement
  resultRender?: null | ((values: ITreeNode[]) => JSX.Element)
  resultVisible?: boolean
  showCheckedStrategy?: "show-all" | "show-child" | "show-parent"
  value?: TreeNodeValue
}

export interface ITreeSelectState {
  value?: TreeNodeValue
}

export interface ITreeNodeProps {
  [key: string]: any
  className?: string
  checkable?: boolean
  disabled?: boolean
  disableCheckbox?: boolean
  title?: string | React.ReactNode
  key?: string
  eventKey?: string
  isLeaf?: boolean
  checked?: boolean
  expanded?: boolean
  loading?: boolean
  selected?: boolean
  selectable?: boolean
  children?: React.ReactNode
}

const convertChildrenToData = (nodes: any) => {
  return toArray(nodes)
    .map((node: React.ReactElement) => {
      if (!React.isValidElement(node) || !node.type) {
        return null
      }
      const {
        key,
        props: { children, value, popover, popoverProps, title, ...restProps },
      } = node as React.ReactElement

      /**
       * 如果有 popover 则在这里包装一下 title
       */
      const data = {
        key,
        value,
        dataTitle: title,
        title: popover ? (
          <>
            <div className="adui-tree-select-pop-trigger">{title}</div>
            <Popover popup={popover} placement="right" {...popoverProps}>
              <div className="adui-tree-select-pop-trigger-placeholder" />
            </Popover>
          </>
        ) : (
          title
        ),
        ...restProps,
      }

      const childData = convertChildrenToData(children)
      if (childData.length) {
        data.children = childData
      }

      return data
    })
    .filter((data) => data)
}

/**
 * 树形选择
 */
class TreeSelect extends React.Component<ITreeSelectProps, ITreeSelectState> {
  public static propTypes = {
    /**
     * 值被选择后，是否需要清空搜索框
     */
    autoClearSearchValue: PropTypes.bool,
    /**
     * 附加类名
     */
    className: PropTypes.string,
    /**
     * 默认选中的 key
     */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    /**
     * 指定弹出层的父级，默认为 document.body
     */
    getPopupContainer: PropTypes.func,
    /**
     * 最多显示多少个 tag，如果超过了则以收起的形式出现
     */
    maxTagCount: PropTypes.number,
    /**
     * 是否多选模式
     */
    multiple: PropTypes.bool,
    /**
     * 值变化时的回调，参数: value
     */
    onChange: PropTypes.func,
    /**
     * 下拉 visible 变化时的回调，参数: boolean
     */
    onDropdownVisibleChange: PropTypes.func,
    /**
     * 搜索时的回调，参数: value
     */
    onSearch: PropTypes.func,
    /**
     * 设置弹出位置
     */
    placement: PropTypes.oneOf([
      "top",
      "left",
      "right",
      "bottom",
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight",
      "leftTop",
      "leftBottom",
      "rightTop",
      "rightBottom",
    ]),
    /**
     * 设置输入框的默认内容
     */
    placeholder: PropTypes.string,
    /**
     * 设置自定义的结果渲染
     */
    resultRender: PropTypes.func,
    /**
     * 输入框内的标签是否显示，此 Prop 用于想要将结果区展示在别的地方的需求
     */
    resultVisible: PropTypes.bool,
    /**
     * 定制树形选择器的icon
     */
    rightIcon: PropTypes.string,
    /**
     * 定义选中项回填的方式：
     * 1. show-all：显示包括父节点的所有选中节点；
     * 2. show-parent：只显示父节点；
     * 3. show-child：只显示子节点。默认值：show-parent
     */
    showCheckedStrategy: PropTypes.oneOf([
      "show-all",
      "show-parent",
      "show-child",
    ]),
    /**
     * 外部控制：选中的 key
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }

  public static defaultProps: ITreeSelectProps = {
    autoClearSearchValue: false,
    className: undefined,
    defaultValue: null,
    disabled: false,
    getPopupContainer: null,
    maxTagCount: null,
    multiple: true,
    onChange: noop,
    onDropdownVisibleChange: noop,
    onSearch: noop,
    placement: "bottomLeft",
    placeholder: "请选择",
    resultRender: null,
    resultVisible: true,
    rightIcon: "menu",
    showCheckedStrategy: "show-parent",
    value: null,
  }

  public static getDerivedStateFromProps = ({ value }: ITreeSelectProps) => {
    if (value !== null) {
      return {
        value,
      }
    }
    return null
  }

  public static TreeNode: typeof TreeNode = TreeNode

  public select: typeof RcTreeSelect

  public wrapper: HTMLDivElement

  constructor(props: ITreeSelectProps) {
    super(props)
    const { value, defaultValue } = props
    const valueState = value !== null ? value : defaultValue

    this.state = {
      value: valueState,
    }
  }

  public shouldComponentUpdate = (
    nextProps: ITreeSelectProps,
    nextState: ITreeSelectState
  ) =>
    !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)

  public saveSelect = (node: React.ReactNode) => {
    this.select = node
  }

  public saveWrapper = (node: HTMLDivElement) => {
    this.wrapper = node
  }

  public renderSwitcherIcon = ({ isLeaf, loading }: ITreeNodeProps) => {
    if (loading) {
      return <Spinner size="mini" className="adui-tree-select-switcher-icon" />
    }
    if (isLeaf) {
      return null
    }
    return (
      <Icon icon="arrow-right" className="adui-tree-select-switcher-icon" />
    )
  }

  public handleChange = (
    value: TreeNodeValue,
    titleList: React.ReactNode[]
  ) => {
    const { disabled, onChange, value: valueProp } = this.props
    if (!disabled) {
      if (valueProp === null) {
        this.setState({ value })
      }
      if (onChange) {
        onChange(value, titleList)
      }
    }
  }

  public handleSearch = (val: string) => {
    const { onSearch } = this.props
    if (onSearch) {
      onSearch(val)
      setTimeout(() => {
        this.forceUpdate()
      }, 0)
    }
  }

  public filterTreeNode = (input: string, treeNode: any) => {
    const { key, title, value, dataTitle } = treeNode
    if (!key || !value) {
      return false
    }
    return String(dataTitle || title).includes(input)
  }

  public getMaxTagCount = () => {
    const { maxTagCount } = this.props
    const { value } = this.state

    if (!maxTagCount || !value || value.length <= maxTagCount) {
      return null
    }
    return 0
  }

  public getMaxTagPlaceholder = (nodes: ITreeNode[]) => {
    if (!this.select) {
      return null
    }
    const { onChange, resultRender, value } = this.props

    if (resultRender) {
      return resultRender(nodes)
    }

    const { length } = nodes
    const placeholderText = (
      <>
        <span style={{ display: "inline-block", verticalAlign: "top" }}>
          {nodes[0].label}
        </span>
        <span style={{ display: "inline-block", verticalAlign: "top" }}>
          ...等 {length} 个
        </span>
      </>
    )

    return (
      <Popover
        alignEdge={false}
        placement="top"
        popup={
          <div className="adui-tree-select-max-popover-item-wrapper">
            {nodes.map(({ key, disabled, label }, i) => {
              return (
                <div className="adui-tree-select-max-popover-item" key={key}>
                  <span>{label}</span>
                  {!disabled && (
                    <Icon
                      icon="cancel"
                      onClick={() => {
                        const vals = nodes.map((o) => o.value)
                        vals.splice(i, 1)
                        if (value === null) {
                          this.setState({ value: vals })
                        }

                        const labels = nodes.map((o) => o.label)
                        labels.splice(i, 1)

                        if (onChange) {
                          onChange(vals, labels)
                        }
                      }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        }
        popupClassName="adui-tree-select-maxPopover"
      >
        <div
          className="adui-tree-select-maxPlaceholder"
          role="none"
          onClick={(e) => e.stopPropagation()}
        >
          {placeholderText}
          <Icon
            icon="cancel"
            size={14}
            onClick={() => {
              if (value === null) {
                this.setState({ value: [] })
              }
              if (onChange) {
                onChange([], [])
              }
            }}
          />
        </div>
      </Popover>
    )
  }

  listenInputChange = (e: any) => {
    const {
      target: { value },
      keyCode,
    } = e

    if (keyCode === 8 && value === "") {
      e.stopPropagation()
    }
  }

  public componentDidMount = () => {
    const input = this.wrapper.querySelector("input")
    const { maxTagCount, placeholder, resultVisible } = this.props
    const { value } = this.state

    if (input) {
      // 禁止 tree-select 键盘回删会影响 value
      input.addEventListener("keydown", this.listenInputChange, false)
    }

    if (maxTagCount !== null && value) {
      this.forceUpdate()
    }
    if (!resultVisible && this.wrapper) {
      if (input) {
        input.placeholder = placeholder
      }
    }
  }

  public componentDidUpdate = () => {
    const { resultVisible } = this.props
    /**
     * resultVisible 为 false 时， selector 高度不会改变。
     * 根据我的经验 Popup 触发重新定位的时机是：
     * 1. window resize
     * 2. resize observer 了 selector
     * 因此这里手动触发 resize
     */
    if (!resultVisible) {
      window.dispatchEvent(new Event("resize"))
    }
  }

  public render() {
    const {
      autoClearSearchValue,
      children,
      className,
      getPopupContainer,
      maxTagCount,
      multiple,
      onDropdownVisibleChange,
      placement,
      placeholder,
      rightIcon,
      resultRender,
      resultVisible,
      showCheckedStrategy,
      treeData,
      ...otherProps
    } = this.props

    const restProps: any = omit(otherProps, [
      "onChange",
      "onSearch",
      "defaultValue",
      "value",
    ])

    const { value } = this.state

    const classSet = classNames(className, `${prefix}-wrapper`, {
      [`${prefix}_resultHidden`]: !resultVisible,
    })

    let checkbox: any = multiple
    if (multiple) {
      checkbox = (
        <div>
          <svg
            width="12"
            height="10"
            className="adui-tree-select-tree-checkbox-indeterminateSvg"
          >
            <rect
              x="1"
              y="4"
              width="10"
              height="2"
              rx=".5"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
          <svg
            width="12"
            height="10"
            className="adui-tree-select-tree-checkbox-checkedSvg"
          >
            <path
              d="M.618 5.827a.463.463 0 0 1-.02-.675l.804-.804a.52.52 0 0 1 .716-.01L4.75 6.75l4.922-5.625a.513.513 0 0 1 .707-.06l.742.62a.478.478 0 0 1 .044.687l-6.08 6.756a.506.506 0 0 1-.703.045L.618 5.827z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      )
    }

    if (value !== null) {
      restProps.value = value
    }

    if (maxTagCount !== null) {
      const count = this.getMaxTagCount()
      if (count !== null) {
        restProps.maxTagCount = count
      }
    }

    if (resultRender) {
      restProps.maxTagCount = 0
    }

    return (
      <ConfigContext.Consumer>
        {({ getPopupContainer: getPopupContainerContext }) => (
          <div
            className={classNames("adui-tree-select-wrapper", {
              "adui-tree-select-wrapper-maxTag": this.getMaxTagCount() !== null,
              "adui-tree-select-wrapper-resultRender": !!resultRender,
            })}
            ref={this.saveWrapper}
          >
            <RcTreeSelect
              autoClearSearchValue={
                resultVisible ? autoClearSearchValue : false
              }
              className={classSet}
              dropdownClassName={`${prefix}-dropdown-${
                multiple ? "multiple" : "single"
              }`}
              dropdownPopupAlign={
                placement && getPlacements({ alignEdge: true })[placement]
              }
              filterTreeNode={this.filterTreeNode}
              getPopupContainer={getPopupContainer || getPopupContainerContext}
              inputIcon={<Icon icon="triangle-down" />}
              maxTagPlaceholder={this.getMaxTagPlaceholder}
              notFoundContent="无匹配结果"
              onChange={this.handleChange}
              onSearch={this.handleSearch}
              placeholder={placeholder}
              prefixCls="adui-tree-select"
              ref={this.saveSelect}
              removeIcon={<Icon icon="cancel" interactive size={16} />}
              showCheckedStrategy={
                showCheckedStrategy && strategies[showCheckedStrategy]
              }
              showSearch={multiple}
              switcherIcon={this.renderSwitcherIcon}
              transitionName="slide-up"
              treeCheckable={checkbox}
              treeNodeFilterProp="title"
              listItemHeight={36}
              listHeight={280}
              treeData={treeData || convertChildrenToData(children)}
              onDropdownVisibleChange={(visible: boolean) => {
                setTimeout(() => {
                  this.forceUpdate()
                }, 0)
                if (onDropdownVisibleChange) {
                  onDropdownVisibleChange(visible)
                }
              }}
              {...restProps}
            >
              {children}
            </RcTreeSelect>
            {!!rightIcon && multiple && (
              <Icon icon={rightIcon} className="adui-tree-select-icon" />
            )}
          </div>
        )}
      </ConfigContext.Consumer>
    )
  }
}

export default TreeSelect
