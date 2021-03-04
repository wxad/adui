import * as React from "react";
export interface OptGroupProps {
    children?: React.ReactNode;
    key?: React.ReactText;
    label?: React.ReactNode;
    options?: {
        key?: React.ReactText;
        disabled?: boolean;
        value: React.ReactText;
        title?: string;
        className?: string;
        style?: React.CSSProperties;
        label?: React.ReactNode;
        /** @deprecated Only works when use `children` as option data */
        children?: React.ReactNode;
    }[];
    className?: string;
    style?: React.CSSProperties;
    /** Save for customize data */
    [prop: string]: any;
}
export interface OptionGroupFC extends React.FC<OptGroupProps> {
    /** Legacy for check if is a Option Group */
    isSelectOptGroup: boolean;
}
/**
 * Select.OptGroup
 */
declare const OptGroup: OptionGroupFC;
export default OptGroup;
