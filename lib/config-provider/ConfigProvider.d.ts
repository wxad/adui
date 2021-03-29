import * as React from "react";
declare type sizeType = "mini" | "small" | "medium" | "large";
export interface IConfigConsumerProps {
    /**
     * 指定气泡提示的父级，默认为 document.body
     */
    getPopupContainer?: null | ((node: HTMLElement) => HTMLElement);
    /**
     * 设置所有组件的 size
     */
    size?: sizeType;
}
export interface IConfigProviderProps extends IConfigConsumerProps {
    /**
     * 子节点
     */
    children: React.ReactNode;
}
export declare const ConfigContext: React.Context<IConfigConsumerProps>;
export declare const ConfigConsumer: React.Consumer<IConfigConsumerProps>;
/**
 * 三个 param，权重依次递减
 */
export declare const getComputedSize: (size0?: sizeType | undefined, size1?: sizeType | undefined, size2?: sizeType | undefined) => sizeType;
declare const ConfigProvider: React.FC<IConfigProviderProps>;
export default ConfigProvider;
