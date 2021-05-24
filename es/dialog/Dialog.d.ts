import * as React from "react";
import PropTypes from "prop-types";
import { IButtonProps } from "../button";
import "./style";
interface IStepProps {
    /**
     * 取消按钮的 props，参考 Button Props
     */
    cancelProps?: Partial<IButtonProps>;
    /**
     * 取消按钮的 文字
     */
    cancelText?: string;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 确认按钮的 props，参考 Button Props
     */
    confirmProps?: Partial<IButtonProps>;
    /**
     * 确认按钮的 文字
     */
    confirmText?: string;
    /**
     * 点击取消按钮、右上角关闭时的 handler
     */
    onCancel?: (() => void) | null;
    /**
     * 点击确认按钮时的 handler
     */
    onConfirm?: (() => void) | null;
}
export interface IDialogProps extends IStepProps {
    [key: string]: any;
    /**
     * 关闭后（transition 结束后）的 handler
     */
    afterClose?: (() => void) | null;
    /**
     * 设置 body className
     */
    bodyClassName?: string;
    /**
     * 设置 body style
     */
    bodyStyle?: React.CSSProperties;
    /**
     * dialog 打开和关闭时都会更改 document.body.style。可以以此 prop 控制是否修改。使用场景如：浮层内弹出 dialog
     */
    changeBodyStyle?: boolean;
    /**
     * 附加类名，注意 Dialog 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
     */
    className?: string;
    /**
     * 指定当前的 step，仅在使用 steps prop 时有作用
     */
    currentStep?: null | number;
    /**
     * 指定默认的起始 step，仅在使用 steps prop 时有作用
     */
    defaultCurrentStep?: null | number;
    /**
     * 内部驱动：是否默认显示
     */
    defaultVisible?: null | boolean;
    /**
     * 是否每次 visible: false 都销毁 dom
     */
    destroyAfterClose?: boolean;
    /**
     * 是否支持 ESC 关闭
     */
    escapeKeyClosable?: boolean;
    /**
     * 完全自定义 footer 的内容，如果想要改变 footer 父级的样式，使用 footerStyle Prop
     */
    footerElement?: React.ReactNode;
    /**
     * 设置 footer className
     */
    footerClassName?: string;
    /**
     * 设置 footer style
     */
    footerStyle?: React.CSSProperties;
    /**
     * 指定弹出层的父级，默认为 document.body，类似于 Tooltip 的 getPopupContainer
     */
    getContainer?: (() => HTMLElement) | null;
    /**
     * header 标题下的内容
     */
    headerContent?: React.ReactNode;
    /**
     * 完全自定义 header 的内容
     */
    headerElement?: React.ReactNode;
    /**
     * 设置 header className
     */
    headerClassName?: string;
    /**
     * 设置 header style
     */
    headerStyle?: React.CSSProperties;
    /**
     * 点击 mask 是否触发 cancel 事件
     */
    maskClosable?: boolean;
    /**
     * 指定步骤，用以快捷上一步、下一步的需求。
     */
    steps?: Array<IStepProps>;
    /**
     * 附加样式，注意 Dialog 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
     */
    style?: React.CSSProperties;
    /**
     * 对话框标题
     */
    title?: null | React.ReactNode;
    /**
     * confirm 为取消、确认按钮；inform 为只有确认按钮
     */
    type?: "confirm" | "inform";
    /**
     * 外部控制：是否显示
     */
    visible?: null | boolean;
    /**
     * 设置 z-index 层级，默认为 var(--z-index-dialog)
     */
    zIndex?: React.ReactNode;
}
export interface IDialogState {
    visible?: boolean;
    currentStep: number;
    hasEverOpened?: boolean;
}
/**
 * 对话框用于全局性的反馈，通常分为“确认操作”与“告知信息”。
 * 确认操作用于询问用户“操作是否继续进行？”，如大部分的二次确认反馈。告知信息则用于知会用户某个及时反馈，如信息提交成功、失败等。
 */
declare class Dialog extends React.Component<IDialogProps, IDialogState> {
    static propTypes: {
        /**
         * 关闭后（transition 结束后）的 handler
         */
        afterClose: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置 body className
         */
        bodyClassName: PropTypes.Requireable<string>;
        /**
         * 设置 body style
         */
        bodyStyle: PropTypes.Requireable<object>;
        /**
         * 取消按钮的 props，参考 Button Props
         */
        cancelProps: PropTypes.Requireable<object>;
        /**
         * 取消按钮的 文字
         */
        cancelText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * dialog 打开和关闭时都会更改 document.body.style。可以以此 prop 控制是否修改。使用场景如：浮层内弹出 dialog
         */
        changeBodyStyle: PropTypes.Requireable<boolean>;
        /**
         * 子节点
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 附加类名，注意 Dialog 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
         */
        className: PropTypes.Requireable<string>;
        /**
         * 确认按钮的 props，参考 Button Props
         */
        confirmProps: PropTypes.Requireable<object>;
        /**
         * 确认按钮的 文字
         */
        confirmText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 指定当前的 step，仅在使用 steps prop 时有作用
         */
        currentStep: PropTypes.Requireable<number>;
        /**
         * 指定默认的起始 step，仅在使用 steps prop 时有作用
         */
        defaultCurrentStep: PropTypes.Requireable<number>;
        /**
         * 内部驱动：是否默认显示
         */
        defaultVisible: PropTypes.Requireable<boolean>;
        /**
         * 是否每次 visible: false 都销毁 dom
         */
        destroyAfterClose: PropTypes.Requireable<boolean>;
        /**
         * 是否支持 ESC 关闭
         */
        escapeKeyClosable: PropTypes.Requireable<boolean>;
        /**
         * 完全自定义 footer 的内容，如果想要改变 footer 父级的样式，使用 footerStyle Prop
         */
        footerElement: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 设置 footer className
         */
        footerClassName: PropTypes.Requireable<string>;
        /**
         * 设置 footer style
         */
        footerStyle: PropTypes.Requireable<object>;
        /**
         * 指定弹出层的父级，默认为 document.body，类似于 Tooltip 的 getPopupContainer
         */
        getContainer: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * header 标题下的内容
         */
        headerContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 完全自定义 header 的内容
         */
        headerElement: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 设置 header className
         */
        headerClassName: PropTypes.Requireable<string>;
        /**
         * 设置 header style
         */
        headerStyle: PropTypes.Requireable<object>;
        /**
         * 点击 mask 是否触发 cancel 事件
         */
        maskClosable: PropTypes.Requireable<boolean>;
        /**
         * 点击取消按钮、右上角关闭时的 handler
         */
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 点击确认按钮时的 handler
         */
        onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 附加样式，注意 Dialog 所有的属性会附加到内部的内容元素上，而不是包含 mask 的最外层元素
         */
        style: PropTypes.Requireable<object>;
        /**
         * 对话框标题
         */
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * confirm 为取消、确认按钮；inform 为只有确认按钮
         */
        type: PropTypes.Requireable<string>;
        /**
         * 外部控制：是否显示
         */
        visible: PropTypes.Requireable<boolean>;
        /**
         * 设置 z-index 层级，默认为 var(--z-index-dialog)
         */
        zIndex: PropTypes.Requireable<any>;
    };
    static defaultProps: IDialogProps;
    static info: any;
    static success: any;
    static warning: any;
    static danger: any;
    static confirm: any;
    static inform: any;
    static getDerivedStateFromProps: ({ currentStep, visible }: IDialogProps, { hasEverOpened }: IDialogState) => Partial<IDialogState> | null;
    /**
     * 保存节点挂载的对象
     */
    container: HTMLDivElement | null;
    /**
     * 保存页面是否 overflow
     */
    bodyIsOverflowing: boolean;
    /**
     * 保存当前浏览器的滚动条宽度
     */
    scrollbarWidth: number;
    dialog: HTMLDivElement;
    wrapper: HTMLDivElement;
    constructor(props: IDialogProps);
    saveDialog: (node: HTMLDivElement) => void;
    resetScrollbarPadding: () => void;
    setScrollbarPadding: () => void;
    getCancelButton: () => JSX.Element | null;
    getConfirmButton: () => JSX.Element;
    handleKeyDown: (e: React.KeyboardEvent) => void;
    handleCancel: (type?: any) => void;
    handleConfirm: () => void;
    onLeave: () => void;
    getContainer: () => HTMLDivElement;
    handleEnter: () => void;
    getComponent: (options?: {
        visible: boolean;
    } | undefined) => JSX.Element;
    /**
     * didmount 由 portal 的 onChildrenMount，因为 didmount 时 wrapper 可能并不在 dom
     */
    handleChildrenMount: () => void;
    componentDidUpdate: (_: IDialogProps, { visible: visiblePrev }: IDialogState) => void;
    componentWillUnmount: () => void;
    render(): JSX.Element | null;
}
export default Dialog;
