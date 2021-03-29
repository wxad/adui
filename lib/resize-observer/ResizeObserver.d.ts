/**
 * ResizeObserver 会以 class 组件的形式存在，
 * 因为其使用 findDomNode(this) 实现 children 为 fc 时不能给 ref 的情况
 * 如果 ResizeObserver 也是 fc，就没有办法在不添加额外结构的情况下拿到 dom 了
 */
import * as React from "react";
import ResizeObserver from "./ResizeObserverPolyfill";
interface ResizeObserverEntry {
    readonly borderBoxSize: ResizeObserverEntryBoxSize;
    readonly contentBoxSize: ResizeObserverEntryBoxSize;
    readonly contentRect: DOMRectReadOnly;
    readonly target: Element;
}
interface ResizeObserverEntryBoxSize {
    blockSize: number;
    inlineSize: number;
}
interface ResizeObserverProps {
    children: React.ReactNode;
    disabled?: boolean;
    onResize?: (size: {
        width: number;
        height: number;
    }) => void;
}
interface ResizeObserverState {
    height: number;
    width: number;
}
declare type RefNode = React.ReactInstance | HTMLElement | null;
declare class ReactResizeObserver extends React.Component<ResizeObserverProps, ResizeObserverState> {
    static displayName: string;
    resizeObserver: ResizeObserver | null;
    childNode: RefNode;
    currentElement: Element | null;
    state: {
        width: number;
        height: number;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    onComponentUpdated(): void;
    onResize: (entries: ResizeObserverEntry[]) => void;
    setChildNode: (node: RefNode) => void;
    destroyObserver(): void;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>[] | null;
}
export default ReactResizeObserver;
