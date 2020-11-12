/**
 * Affix 组件将不会修改成 FunctionComponent，
 * 因为我（Yijie）尝试过发现会一直触发 onChange, affixStyle 明明有，但是在 onChange 时一直是 undefined
 */
import * as React from "react";
import PropTypes from "prop-types";
import "./style";
export interface IAffixProps {
    [key: string]: any;
    children?: React.ReactNode;
    className?: string;
    getContainer?: (() => HTMLElement) | null;
    getTarget?: (() => HTMLElement) | null;
    offsetBottom?: number | null;
    offsetTop?: number;
    onChange?: ((affixed: boolean) => void) | null;
    style?: React.CSSProperties;
}
export interface IAffixState {
    affixStyle?: React.CSSProperties | null;
    placeholderStyle?: React.CSSProperties | null;
}
/**
 * 固钉
 */
export default class Affix extends React.Component<IAffixProps, IAffixState> {
    static propTypes: {
        /**
         * 子节点
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 附加类名
         */
        className: PropTypes.Requireable<string>;
        /**
         * () => HTMLElement 固钉的显示区域，永远会在此方法传回的元素内
         */
        getContainer: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * () => HTMLElement 监听滚动的元素，默认在 window 上
         */
        getTarget: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 距离窗口顶部达到指定偏移量后触发，如果传入了 offsetBottom，Affix 会忽略 offsetTop
         */
        offsetBottom: PropTypes.Requireable<number>;
        /**
         * 距离窗口顶部达到指定偏移量后触发
         */
        offsetTop: PropTypes.Requireable<number>;
        /**
         * 固定状态改变时的 handler
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 附加样式
         */
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: IAffixProps;
    fixedNode: HTMLDivElement;
    placeholderNode: HTMLDivElement;
    private debouncedWindowResize;
    private scrollEventHandler;
    private windowResizeEventHandler;
    constructor(props: IAffixProps);
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    setAffixStyle: (newAffixStyle: React.CSSProperties | null) => void;
    setPlaceholderStyle: (newPlaceholderStyle: React.CSSProperties | null) => void;
    updatePosition: () => void;
    syncPlaceholderStyle: () => void;
    savePlaceholderNode: (node: HTMLDivElement) => void;
    saveFixedNode: (node: HTMLDivElement) => void;
    render(): JSX.Element;
}
