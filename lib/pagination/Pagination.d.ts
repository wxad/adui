import React from "react";
import "./style";
export interface IPaginationProps {
    [key: string]: any;
    /**
     * 对齐方式
     */
    align?: "left" | "center" | "right";
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 当前页数
     */
    current?: number | null;
    /**
     * 默认的当前页数
     */
    defaultCurrent?: number;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 只有一页时 return null
     */
    hideWhenSinglePage?: boolean;
    /**
     * 当前页变化时的 handler
     */
    onChange?: (newPage: number, pageSize?: number) => void;
    /**
     * 设置每页条数，默认 10 条
     */
    pageSize?: number;
    /**
     * 是否显示首页尾页跳转按钮
     */
    showButtonJumper?: boolean;
    /**
     * 是否显示跳转输入框
     */
    showInputJumper?: boolean;
    /**
     * 设置尺寸
     */
    size?: "mini" | "small" | "medium" | "large";
    /**
     * 设置主题
     */
    theme?: null | "light";
    /**
     * 数据总数
     */
    total?: number;
}
/**
 * 分页器用于将大量内容以分页形式间隔，切换选择查看。
 */
declare const Pagination: React.FunctionComponent<IPaginationProps>;
export default Pagination;
