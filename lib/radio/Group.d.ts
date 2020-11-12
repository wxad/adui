import React from "react";
import PropTypes from "prop-types";
import "./style";
declare type ValueType = React.ReactText;
export interface IRadioGroupProps<T extends ValueType> {
    [key: string]: any;
    /**
     * 子节点
     */
    children?: React.ReactNode;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 默认已选中的值
     */
    defaultValue?: null | T;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 选中态变化时的 handler
     */
    onChange?: null | ((value: T) => void);
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 已选中的值
     */
    value?: null | T;
}
/**
 * 单选组，用以统一地管理内部单选状态。
 */
declare function Group<T extends ValueType>({ children, className, defaultValue, disabled, onChange, size, value: valueProp, ...otherProps }: IRadioGroupProps<T>): JSX.Element;
declare namespace Group {
    var propTypes: {
        /**
         * 子节点
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 附加类名
         */
        className: PropTypes.Requireable<string>;
        /**
         * 默认已选中的值
         */
        defaultValue: PropTypes.Requireable<React.ReactText>;
        /**
         * 是否禁用
         */
        disabled: PropTypes.Requireable<boolean>;
        /**
         * 选中态变化时的 handler
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 设置尺寸
         */
        size: PropTypes.Requireable<string>;
        /**
         * 已选中的值
         */
        value: PropTypes.Requireable<React.ReactText>;
    };
    var defaultProps: {
        children: null;
        className: undefined;
        defaultValue: null;
        disabled: boolean;
        onChange: null;
        size: string;
        value: null;
    };
}
export default Group;
