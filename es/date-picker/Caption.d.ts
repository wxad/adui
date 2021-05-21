import * as React from "react";
import "./style";
export interface ICaptionProps {
    [key: string]: any;
    date: Date;
    maxDate: Date;
    minDate: Date;
    onDateChange: (date: Date, e: React.FormEvent<HTMLSelectElement>) => void;
}
/**
 * 日期选择 Caption
 */
declare const Caption: React.FC<ICaptionProps>;
export default Caption;
