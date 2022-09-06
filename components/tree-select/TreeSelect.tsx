/* eslint-disable max-len */
/* eslint-disable no-empty */
/* eslint-disable react/no-did-update-set-state */
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
import Checkbox from "../checkbox"
import Icon from "../icon"
import Popover, { IPopoverProps } from "../popover"
import Portal from "../portal"
import Spinner from "../spinner"
import "./style"

const prefix = "adui-tree-select"
const sameValueSplitter = "__@@__"
const noop = () => {}

const strategies = {
  "show-all": SHOW_ALL,
  "show-child": SHOW_CHILD,
  "show-parent": SHOW_PARENT,
}

/**
 * a1 是否包含 a2
 */
const isArrayIncludes = (
  a1: React.ReactText[],
  a2: React.ReactText[]
): boolean => {
  if (!Array.isArray(a1) || !Array.isArray(a2)) {
    return false
  }

  return a2.every((o) => a1.includes(o))
}

export type TreeNodeValue = React.ReactText[] | null

export interface ITreeNode {
  value: string
  label: string
  key: string
  disabled: boolean
}
export interface DataNode {
  [key: string]: any
  value?: React.ReactText
  title?: React.ReactNode
  label?: React.ReactNode
  key?: React.ReactText
  disabled?: boolean
  disableCheckbox?: boolean
  checkable?: boolean
  popover?: React.ReactNode
  popoverProps?: IPopoverProps
  children?: DataNode[]
}

export interface BaseOptionType {
  disabled?: boolean
  checkable?: boolean
  disableCheckbox?: boolean
  children?: BaseOptionType[]
  [name: string]: any
}

export interface DefaultOptionType extends BaseOptionType {
  value?: React.ReactText
  title?: React.ReactNode
  label?: React.ReactNode
  key?: React.Key
  children?: DefaultOptionType[]
}

export type TreeData = DataNode[] | undefined

export interface ITreeSelectProps {
  [key: string]: any
  autoClearSearchValue?: boolean
  bottomContent?: React.ReactNode
  className?: string
  defaultValue?: TreeNodeValue
  disabled?: boolean
  filterTreeNode?:
    | boolean
    | ((inputValue: string, treeNode: DefaultOptionType) => boolean)
  filterCaseSensitive?: boolean
  getPopupContainer?: null | ((node: HTMLElement) => HTMLElement)
  intent?: "normal" | "primary" | "success" | "warning" | "danger"
  maxTagCount?: null | number
  multiple?: boolean
  onChange?: (value: TreeNodeValue, titleList: React.ReactNode[]) => void
  onDropdownVisibleChange?: (visible: boolean) => void
  onSearchEnter?: (e: KeyboardEvent) => void
  onSearch?: (value: string, nodes: DataNode[]) => void
  resultRender?: null | ((values: ITreeNode[]) => JSX.Element)
  resultVisible?: boolean
  sameValueEnabled?: boolean
  selectAll?: boolean
  showCheckedStrategy?: "show-all" | "show-child" | "show-parent"
  topContent?: React.ReactNode
  treeData?: TreeData
  value?: TreeNodeValue
}

type GetFuncType<T> = T extends boolean ? never : T
type FilterFn = GetFuncType<ITreeSelectProps["filterTreeNode"]>

export interface ITreeSelectState {
  hash: string
  bottomContentPortalTarget?: HTMLDivElement
  topContentPortalTarget?: HTMLDivElement
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
     * 下拉框底部显示的自定义元素
     */
    bottomContent: PropTypes.node,
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
     * 自定义树节点过滤函数
     */
    filterTreeNode: PropTypes.any,
    /**
     * 是否开启大小写敏感搜索，默认为 false
     */
    filterCaseSensitive: PropTypes.bool,
    /**
     * 指定弹出层的父级，默认为 document.body
     */
    getPopupContainer: PropTypes.func,
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
     * 搜索回车时的回调，参数: e
     */
    onSearchEnter: PropTypes.func,
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
     * 是否允许相同值，使用情况：如同一个人可能存在于两个组织架构中，如果使用此 Prop，请同时使用 resultVisible={false}
     */
    sameValueEnabled: PropTypes.bool,
    /**
     * 是否开启全选功能
     */
    selectAll: PropTypes.bool,
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
     * 下拉框顶部显示的自定义元素
     */
    topContent: PropTypes.node,
    /**
     * treeNodes 数据，格式参照 interface DataNode
     */
    treeData: PropTypes.array,
    /**
     * 外部控制：选中的 key
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }

  public static defaultProps: ITreeSelectProps = {
    autoClearSearchValue: false,
    bottomContent: undefined,
    className: undefined,
    defaultValue: null,
    disabled: false,
    filterTreeNode: undefined,
    filterCaseSensitive: false,
    getPopupContainer: null,
    intent: "normal",
    maxTagCount: null,
    multiple: true,
    onChange: noop,
    onDropdownVisibleChange: noop,
    onSearch: noop,
    onSearchEnter: noop,
    placeholder: "请选择",
    resultRender: null,
    resultVisible: true,
    rightIcon: "list",
    sameValueEnabled: false,
    selectAll: false,
    showCheckedStrategy: "show-parent",
    topContent: undefined,
    treeData: undefined,
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

  public portal: React.ReactNode

  public wrapper: HTMLDivElement

  public treeData: DataNode[]

  public treeValueAll: any[]

  public treeValueFlatten: any[] = []

  constructor(props: ITreeSelectProps) {
    super(props)
    const { value, defaultValue } = props
    const valueState = value !== null ? value : defaultValue

    this.state = {
      hash: Math.random().toString(36).substring(3, 8),
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
      return <Spinner size="mini" className={`${prefix}-tree-switcher-icon`} />
    }
    if (isLeaf) {
      return null
    }
    return (
      <Icon icon="triangle-right" className={`${prefix}-tree-switcher-icon`} />
    )
  }

  public handleVisibleChange = (visible: boolean) => {
    setTimeout(() => {
      this.forceUpdate(() => {
        const { bottomContent, topContent } = this.props
        const { hash, bottomContentPortalTarget, topContentPortalTarget } =
          this.state
        /**
         * 下拉框显示 && 传入了顶部自定义元素 && 首次添加
         */
        if (
          visible &&
          ((topContent && !topContentPortalTarget) ||
            (bottomContent && !bottomContentPortalTarget))
        ) {
          const dropdown = document.querySelector(
            `.${prefix}-dropdown_${hash}`
          ) as HTMLDivElement
          if (dropdown) {
            if (topContent && !topContentPortalTarget) {
              const el = document.createElement("div")
              el.onmousedown = (e) => {
                e.preventDefault()
                e.stopImmediatePropagation()
              }
              dropdown.insertBefore(el, dropdown.children[0])
              this.setState({
                topContentPortalTarget: el,
              })
            }
            if (bottomContent && !bottomContentPortalTarget) {
              const el = document.createElement("div")
              el.onmousedown = (e) => {
                e.preventDefault()
                e.stopImmediatePropagation()
              }
              dropdown.appendChild(el)
              this.setState({
                bottomContentPortalTarget: el,
              })
            }
          }
        }
      })
    }, 0)
  }

  public handleChange = (
    value: TreeNodeValue,
    titleList: React.ReactNode[]
  ) => {
    let valueParam = [] as React.ReactText[]
    const {
      disabled,
      multiple,
      onChange,
      value: valueProp,
      sameValueEnabled,
    } = this.props
    const { value: valueState } = this.state
    if (!disabled) {
      if (sameValueEnabled) {
        value?.forEach((v) => {
          const splited = `${v}`.split(sameValueSplitter)
          const val = splited[splited.length - 1]
          const { length } = value.filter((o) =>
            `${o}`.endsWith(`${sameValueSplitter}${val}`)
          )

          if (
            length ===
            this.treeValueFlatten.filter((o) =>
              `${o}`.endsWith(`${sameValueSplitter}${val}`)
            ).length
          ) {
            // 表示全包含了，则保留
            valueParam.push(val)
          } else if (!valueState?.includes(val)) {
            valueParam.push(val)
          }
        })
      } else if (value) {
        valueParam = value
      }

      if (multiple) {
        valueParam = [...new Set(valueParam)]
      }

      if (valueProp === null) {
        this.setState({ value: valueParam })
      }

      if (onChange) {
        onChange(valueParam, titleList)
      }
    }
  }

  public getFilteredTreeData = (searchValue: string) => {
    const { filterTreeNode } = this.props
    if (!searchValue || filterTreeNode === false) {
      return this.treeData
    }

    let filterOptionFunc: FilterFn
    if (typeof filterTreeNode === "function") {
      filterOptionFunc = filterTreeNode
    } else {
      filterOptionFunc = this.filterTreeNode
    }

    const dig = (
      list: DefaultOptionType[],
      keepAll: boolean = false
    ): DataNode[] => {
      // @ts-ignore
      return list
        .map((dataNode) => {
          const { children } = dataNode

          const match =
            keepAll ||
            (filterOptionFunc && filterOptionFunc(searchValue, dataNode))
          const childList = dig(children || [], match)

          if (match || childList.length) {
            return {
              ...dataNode,
              children: childList,
            }
          }
          return null
        })
        .filter((node) => node)
    }
    return dig(this.treeData)
  }

  public handleSearch = (val: string) => {
    const { onSearch } = this.props
    if (onSearch) {
      onSearch(val, this.getFilteredTreeData(val))
      setTimeout(() => {
        this.forceUpdate()
      }, 0)
    }
  }

  public filterTreeNode = (input: string, treeNode: any) => {
    const { filterCaseSensitive } = this.props
    const { key, title, value, dataTitle } = treeNode
    if (!key || !value) {
      return false
    }
    if (!filterCaseSensitive) {
      return String(dataTitle || title)
        .toLocaleLowerCase()
        .includes(input.toLocaleLowerCase())
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

  public handleSelectAll = () => {
    const { value: valueProp, onChange } = this.props
    const { value } = this.state
    if (isArrayIncludes(value || [], this.treeValueAll)) {
      /**
       * 已全选
       */
      if (valueProp === null) {
        this.setState({ value: [] })
      }
      if (onChange) {
        onChange([], [])
      }
    } else {
      /**
       * 清空
       */
      if (valueProp === null) {
        this.setState({ value: this.treeValueAll })
      }
      if (onChange) {
        onChange(this.treeValueAll, [])
      }
    }
  }

  public getMaxTagPlaceholder = (nodes: ITreeNode[]) => {
    if (!this.select) {
      return null
    }
    const { onChange, resultRender, value, disabled: disabledProp } = this.props

    if (resultRender) {
      return resultRender(nodes)
    }

    const { length } = nodes
    const placeholderText = (
      <>
        <span
          style={{
            display: "inline-block",
            verticalAlign: "top",
            maxWidth: "calc(100% - 53px)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {nodes[0]?.label}
        </span>
        <span style={{ display: "inline-block", verticalAlign: "top" }}>
          等 {length} 个
        </span>
      </>
    )

    return (
      <Popover
        visible={disabledProp ? false : undefined}
        alignEdge={false}
        placement="top"
        popup={
          <div
            role="none"
            className={`${prefix}-max-popover-item-wrapper`}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {nodes.map(({ key, disabled, label }, i) => {
              return (
                <div className={`${prefix}-max-popover-item`} key={key}>
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
        popupClassName={`${prefix}-maxPopover`}
      >
        <div
          className={`${prefix}-maxPlaceholder`}
          role="none"
          onClick={(e) => e.stopPropagation()}
        >
          {placeholderText}
          <Icon
            icon="cancel"
            size={14}
            onClick={() => {
              if (!disabledProp) {
                if (value === null) {
                  this.setState({ value: [] })
                }
                if (onChange) {
                  onChange([], [])
                }
              }
            }}
          />
        </div>
      </Popover>
    )
  }

  public convertChildrenToData = (nodes: any): DataNode[] =>
    toArray(nodes)
      .map((node: React.ReactElement) => {
        if (!React.isValidElement(node) || !node.type) {
          return null
        }
        const {
          key,
          props: {
            children,
            value,
            popover,
            popoverProps,
            title,
            ...restProps
          },
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
              <div className={`${prefix}-pop-trigger`}>{title}</div>
              <Popover popup={popover} placement="right" {...popoverProps}>
                <div className={`${prefix}-pop-trigger-placeholder`} />
              </Popover>
            </>
          ) : (
            title
          ),
          ...restProps,
        }

        const childData = this.convertChildrenToData(children)
        if (childData.length) {
          data.children = childData
        }

        return data
      })
      .filter((data) => data)

  public convertTreeData = (
    dataNodeParam: TreeData,
    options: { selectAll?: boolean } = {}
  ): TreeData => {
    const { sameValueEnabled } = this.props
    if (!dataNodeParam) {
      return undefined
    }
    const dataNode = [...dataNodeParam]
    const { value: valueState } = this.state
    const isAllSelected = isArrayIncludes(valueState || [], this.treeValueAll)
    const indeterminate = !isAllSelected && !!valueState?.length

    if (dataNode[0]?.key === `${prefix}-tree-treenode-all`) {
      return dataNode
    }

    if (sameValueEnabled && !dataNode[0]?.dataTitle) {
      this.treeValueFlatten = []
    }

    const { selectAll } = options

    const process = (node: DataNode[], parentValue?: React.ReactText) => {
      node.forEach((o) => {
        const {
          children,
          key,
          title,
          dataChildren,
          dataTitle,
          value,
          popover,
          popoverProps = {},
        } = o
        if (dataTitle && dataChildren) {
          return
        }
        /**
         * dataTitle 用于有 popover 的情况下的搜索
         */
        if (title) {
          o.dataTitle = title
        }
        /**
         * 加入 dataChildren 是为了支持 loadData 的使用
         */
        if (children?.length) {
          o.dataChildren = 1
        }
        if (key === undefined) {
          o.key = value
        } else if (value === undefined) {
          o.value = key
        }
        if (sameValueEnabled) {
          const newVal = `${
            parentValue ? `${parentValue}${sameValueSplitter}` : ""
          }${value}`
          o.key = newVal
          o.value = newVal
          if (!this.treeValueFlatten.includes(newVal)) {
            this.treeValueFlatten.push(newVal)
          }
        }

        if (popover) {
          o.title = (
            <>
              <div className={`${prefix}-pop-trigger`}>{title}</div>
              <Popover popup={popover} placement="right" {...popoverProps}>
                <div className={`${prefix}-pop-trigger-placeholder`} />
              </Popover>
            </>
          )
        }
        if (children) {
          process(children, o.value)
        }
      })
    }

    process(dataNode)

    if (selectAll) {
      dataNode.unshift({
        title: (
          <div
            role="none"
            className={`${prefix}-tree-treenode-all-inner`}
            onClick={this.handleSelectAll}
          >
            全选
            <Checkbox
              size="medium"
              checked={isAllSelected}
              indeterminate={indeterminate}
            />
          </div>
        ),
        className: `${prefix}-tree-treenode-all`,
        key: `${prefix}-tree-treenode-all`,
        value: `${prefix}-tree-treenode-all`,
        checkable: false,
        disableCheckbox: true,
      })
    }

    return dataNode
  }

  listenInputChange = (e: any) => {
    const { onSearchEnter } = this.props
    const {
      target: { value },
      key,
    } = e

    if (key === "Backspace" && value === "") {
      e.stopPropagation()
    }

    setTimeout(() => {
      if (key === "Enter" && onSearchEnter) {
        onSearchEnter(e)
      }
    }, 0)
  }

  public componentDidMount = () => {
    const input = this.wrapper?.querySelector("input")
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
    const { resultVisible, placeholder } = this.props
    /**
     * resultVisible 为 false 时， selector 高度不会改变。
     * 根据我的经验 Popup 触发重新定位的时机是：
     * 1. window resize
     * 2. resize observer 了 selector
     * 因此这里手动触发 resize
     */
    if (!resultVisible) {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"))
        const input = this.wrapper?.querySelector("input")
        if (input) {
          input.placeholder = placeholder
        }
      }, 0)
    }
  }

  public render() {
    const {
      autoClearSearchValue,
      bottomContent,
      children,
      className,
      filterTreeNode,
      getPopupContainer,
      intent,
      maxTagCount,
      multiple,
      onDropdownVisibleChange,
      placeholder,
      rightIcon,
      resultRender,
      resultVisible,
      sameValueEnabled,
      selectAll,
      showCheckedStrategy,
      topContent,
      treeData,
      ...otherProps
    } = this.props

    const restProps: any = omit(otherProps, [
      "filterCaseSensitive",
      "onChange",
      "onSearch",
      "onSearchEnter",
      "defaultValue",
      "value",
    ])

    const { hash, bottomContentPortalTarget, topContentPortalTarget, value } =
      this.state

    const classSet = classNames(className, `${prefix}-${intent}`, {
      [`${prefix}_resultHidden`]: !resultVisible,
    })

    let checkbox: any = multiple
    if (multiple) {
      checkbox = (
        <div>
          <svg
            width="12"
            height="10"
            className={`${prefix}-tree-checkbox-indeterminateSvg`}
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
            className={`${prefix}-tree-checkbox-checkedSvg`}
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

    if (sameValueEnabled) {
      const trueValue: TreeNodeValue = []
      if (restProps.value) {
        restProps.value.forEach((o: any) => {
          this.treeValueFlatten.forEach((p) => {
            const splited = p.split(sameValueSplitter)
            if (splited[splited.length - 1] === o) {
              trueValue.push(p)
            }
          })
        })
      }
      restProps.value = trueValue
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

    const treeDataFinal =
      this.convertTreeData(treeData || this.convertChildrenToData(children), {
        selectAll,
      }) || []

    this.treeData = treeDataFinal

    if (showCheckedStrategy === "show-parent") {
      this.treeValueAll = treeDataFinal
        .map(({ value: val, disabled, disableCheckbox, checkable }) => {
          if (
            val !== undefined &&
            !disabled &&
            !disableCheckbox &&
            checkable !== false
          ) {
            return val
          }
          return undefined
        })
        .filter((o) => Boolean(o) || o === 0)
    } else {
      const treeValueAll: any[] = []

      const getAllValue = (data: DataNode[]) => {
        data.forEach(
          ({
            value: val,
            disabled,
            disableCheckbox,
            checkable,
            children: child,
          }) => {
            if (
              val !== undefined &&
              !disabled &&
              !disableCheckbox &&
              checkable !== false
            ) {
              if (showCheckedStrategy === "show-all" || !child) {
                treeValueAll.push(val)
              } else {
                getAllValue(child)
              }
            }
          }
        )
      }
      getAllValue(treeDataFinal)
      this.treeValueAll = treeValueAll.filter((o) => Boolean(o) || o === 0)
    }

    // 是否是多层级
    const multiLevel = treeDataFinal.some((o) => o.children?.length)

    return (
      <ConfigContext.Consumer>
        {({ getPopupContainer: getPopupContainerContext }) => (
          <div
            className={classNames(
              `${prefix}-wrapper ${prefix}-wrapper_${hash}`,
              {
                [`${prefix}-wrapper-maxTag`]: this.getMaxTagCount() !== null,
                [`${prefix}-wrapper-resultRender`]: !!resultRender,
              }
            )}
            ref={this.saveWrapper}
          >
            {topContent && topContentPortalTarget && (
              <Portal container={topContentPortalTarget}>{topContent}</Portal>
            )}
            {bottomContent && bottomContentPortalTarget && (
              <Portal container={bottomContentPortalTarget}>
                {bottomContent}
              </Portal>
            )}
            <RcTreeSelect
              autoClearSearchValue={
                resultVisible ? autoClearSearchValue : false
              }
              className={classSet}
              dropdownClassName={classNames(`${prefix}-dropdown_${hash}`, {
                [`${prefix}-dropdown-multiple`]: multiple,
                [`${prefix}-dropdown-single`]: !multiple,
                [`${prefix}-dropdown-all`]: selectAll,
                [`${prefix}-dropdown-single-level`]: !multiLevel,
              })}
              filterTreeNode={filterTreeNode || this.filterTreeNode}
              getPopupContainer={getPopupContainer || getPopupContainerContext}
              inputIcon={<Icon icon="triangle-down" />}
              maxTagPlaceholder={this.getMaxTagPlaceholder}
              notFoundContent={
                <>
                  <Icon
                    icon="file-outlined"
                    color="var(--transparent-gray-600)"
                    style={{ marginRight: "4px" }}
                  />
                  无匹配项
                </>
              }
              onChange={this.handleChange}
              onSearch={this.handleSearch}
              placeholder={placeholder}
              prefixCls={prefix}
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
              listItemHeight={32}
              listHeight={280}
              treeData={treeDataFinal}
              onDropdownVisibleChange={(visible: boolean) => {
                /**
                 * 20210323 visible false 时输入框会被情况，但没有调用 onSearch
                 */
                if (!visible) {
                  this.handleSearch("")
                }
                this.handleVisibleChange(visible)
                if (onDropdownVisibleChange) {
                  onDropdownVisibleChange(visible)
                }
              }}
              {...restProps}
            />
            {!!rightIcon && multiple && (
              <Icon icon={rightIcon} className={`${prefix}-icon`} />
            )}
          </div>
        )}
      </ConfigContext.Consumer>
    )
  }
}

export default TreeSelect
