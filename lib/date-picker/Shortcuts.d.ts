import * as React from "react";
import "./style";
export interface IShortcutsProps {
    [key: string]: any;
    onShortcutClick: (value: Date | [Date | null | undefined, Date | null | undefined]) => void;
    selectedDay?: Date | "" | null;
    selectedDays?: [Date | null | undefined, Date | null | undefined] | null;
    shortcuts?: {
        label: React.ReactNode;
        value: Date | [Date | null | undefined, Date | null | undefined];
    }[];
}
/**
 * 日期选择 Shortcuts
 */
declare const Shortcuts: React.FunctionComponent<IShortcutsProps>;
export default Shortcuts;
