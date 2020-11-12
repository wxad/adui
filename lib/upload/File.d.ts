import React from "react";
import { IconNames } from "../icon";
import "./style";
export interface IFileProps {
    [key: string]: any;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 指定右图标
     */
    icon?: IconNames;
    /**
     * 文件名，此 Prop 会控制 Upload.File 显示与否
     */
    name?: string;
    /**
     * 右图标点击时的 handler
     */
    onIconClick?: () => void;
    /**
     * 进度，传入 null 时表示不显示进度条
     */
    progress?: number | null;
    /**
     * 上传成功后的文件地址，传入后文字会变为链接样式
     */
    src?: string;
}
/**
 * 旋转加载用于告知用户信息内容的加载状态，通常是即时、短时的。
 */
declare const File: React.ForwardRefExoticComponent<IFileProps & React.RefAttributes<any>>;
export default File;
