import * as React from "react";
declare type ContextProps = {
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 值改变的 handler，传递下去由子组件触发
     */
    handleGroupValueChange?: (radioValue: React.ReactText) => void;
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 已选中的值
     */
    value?: null | React.ReactText;
};
export declare const GroupContext: React.Context<ContextProps>;
export {};
