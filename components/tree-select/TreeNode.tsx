/**
 * adui1.0： TreeNode 不再实际使用，在 TreeSelect 中会进行 children 遍历 convertChildrenToData
 * 文件暂时保存是因 Site 需生成 API 表格。
 */
import * as React from "react"
import { TreeNode as Node } from "rc-tree-select"
import PropTypes from "prop-types"
import Popover, { IPopoverProps } from "../popover"

/**
 * 树形选择节点
 */

export interface ITreeNodeProps {
  [key: string]: any
  checkable?: boolean
  children?: React.ReactNode
  disabled?: boolean
  popover?: React.ReactNode
  popoverProps?: IPopoverProps
  title?: React.ReactNode
  value?: string | null
}

export default class TreeNode extends React.Component<ITreeNodeProps> {
  // https://github.com/react-component/tree/blob/master/src/util.tsx#L39-L41
  public static isTreeNode = 1

  public static propTypes = {
    /**
     * 节点是否可勾选，通常用于父节点不可勾选，而子节点可以的情况
     */
    checkable: PropTypes.bool,
    /**
     * 子节点
     */
    children: PropTypes.node,
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    /**
     * 增加 popover
     */
    popover: PropTypes.node,
    /**
     * popover props，该对象会传递给 <Popover />
     */
    popoverProps: PropTypes.object,
    /**
     * 树节点显示的内容
     */
    title: PropTypes.node,
    /**
     * 默认根据此属性值进行筛选
     */
    value: PropTypes.string,
  }

  public static defaultProps: ITreeNodeProps = {
    checkable: true,
    children: null,
    disabled: false,
    popover: null,
    popoverProps: {},
    title: null,
    value: null,
  }

  public render() {
    const {
      children,
      popover,
      popoverProps,
      title: titleProp,
      value,
      ...otherProps
    } = this.props
    let title = titleProp
    if (value === null) {
      return <div>{titleProp}</div>
    }
    if (popover) {
      title = [
        <div key={0} className="adui-tree-select-pop-trigger">
          {title}
        </div>,
        <Popover key={1} popup={popover} placement="right" {...popoverProps}>
          <div className="adui-tree-select-pop-trigger-placeholder" />
        </Popover>,
      ]
    }

    return (
      <Node title={title} value={value} {...otherProps}>
        {children}
      </Node>
    )
  }
}
