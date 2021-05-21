import * as React from "react";
import Item from "./Item";
import Tip from "./Tip";
import "./style";
export interface IFormProps {
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
     * item style
     */
    itemStyle?: React.CSSProperties;
    /**
     * label 字符对齐方式
     */
    labelAlign?: "left" | "center" | "right" | null;
    /**
     * label 字符数，Form 会以 em 单位设置 label 宽度
     */
    labelSize?: number | null;
    /**
     * label style
     */
    labelStyle?: React.CSSProperties;
}
/**
 * 表单，包含表单项标题、输入内容、行动按钮等数据采集的集合形态。通常服务于大量需要收集用户信息场景。
 */
declare const Form: React.FC<IFormProps> & {
    Item: typeof Item;
    Tip: typeof Tip;
};
export default Form;
