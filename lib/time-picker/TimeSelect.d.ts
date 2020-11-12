import React from "react";
import "./style";
export interface ITimeSelectProps {
    [key: string]: any;
    currentHour?: number | null;
    disabledHours?: (hour?: string | null) => boolean | void;
    disabledMinutes?: (minute?: string | null) => boolean | void;
    maxTime?: string | null;
    minTime?: string | null;
    onChange: (value: string, type: "hour" | "minute") => void;
    onlyHour?: boolean;
    size?: "mini" | "small" | "medium" | "large";
    selectedValue?: null | string;
    type: "hour" | "minute";
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ITimeSelectProps & React.RefAttributes<any>>>;
export default _default;
