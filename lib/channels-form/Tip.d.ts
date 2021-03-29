import * as React from "react";
import PropTypes from "prop-types";
import "./style";
export interface ITipProps {
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
     * 设置类型
     */
    intent?: "normal" | "primary" | "success" | "warning" | "danger";
}
/**
 * 表单 tip
 */
declare const Tip: {
    (props: ITipProps): JSX.Element;
    propTypes: {
        /**
         * 子节点
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 附加类名
         */
        className: PropTypes.Requireable<string>;
        /**
         * 设置类型
         */
        intent: PropTypes.Requireable<string>;
    };
    defaultProps: {
        children: null;
        className: null;
        intent: string;
    };
};
export default Tip;
