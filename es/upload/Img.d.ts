import React from "react";
import { IconNames } from "../icon";
import "./style";
export interface IImgProps {
    [key: string]: any;
    /**
     * 附加类名
     */
    className?: string;
    /**
     * 鼠标 hover 时的操作显示
     */
    hoverOperations?: {
        [key: string]: any;
        text: string;
        onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    }[];
    /**
     * 指定右上角图标
     */
    icon?: IconNames;
    /**
     * 右上角图标点击时的 handler
     */
    onIconClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
    /**
     * 触发上传
     */
    onUpload?: () => void;
    /**
     * 禁止点击图片预览
     */
    previewDisabled?: boolean;
    /**
     * 进度，传入 null 时表示不显示进度条
     */
    progress?: number | null;
    /**
     * 上传成功后的图片地址
     */
    src?: string;
}
export interface IImgState {
    previewing: boolean;
}
/**
 * 旋转加载用于告知用户信息内容的加载状态，通常是即时、短时的。
 */
declare const Img: React.ForwardRefExoticComponent<IImgProps & React.RefAttributes<any>>;
export default Img;
