import * as React from "react";
import "./style";
export interface INavbarProps {
    [key: string]: any;
    maxDate: Date;
    minDate: Date;
    month: Date | null;
    nextMonth: Date | null;
    onNextClick: () => void;
    onPreviousClick: () => void;
    onManuallyChangeMonth?: () => void;
}
/**
 * 日期选择 Navbar
 */
declare const Navbar: React.FC<INavbarProps>;
export default Navbar;
