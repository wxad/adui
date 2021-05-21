import * as React from "react";
export interface IPortalProps {
    /**
     * 附加类名，此类名会增加到最外层的包含块上
     */
    className?: string;
    /**
     * 当 Portal 的 children 被加入到 DOM 时的钩子
     */
    onChildrenMount?: () => void;
    /**
     * children mounted to
     * @default document.body
     */
    container?: HTMLElement;
}
export interface IPortalState {
    hasMounted: boolean;
}
/**
 * Portal 将子组件从组件层级（component hierarchy）中分离，并添加到指定的 container 中
 * 你应该用于那些受 z-index、overflow、position:absolute 等约束的组件中
 */
export default class Portal extends React.Component<IPortalProps, IPortalState> {
    static displayName: string;
    static defaultProps: IPortalProps;
    state: IPortalState;
    private portalElement;
    render(): React.ReactPortal | null;
    shouldComponentUpdate: (nextProps: IPortalProps, nextState: IPortalState) => boolean;
    componentDidMount: () => void;
    componentDidUpdate: ({ className: prevClassName }: IPortalProps) => void;
    componentWillUnmount(): void;
    private createContainerElement;
    private unstableRenderNoPortal;
}
