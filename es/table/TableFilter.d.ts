import React from "react";
import { IPopoverProps } from "../popover";
import "./style";
export interface ITableFilterProps {
    [key: string]: any;
    filteredValue?: Array<React.ReactText> | null;
    filterMultiple?: boolean;
    filterPopoverProps?: IPopoverProps;
    filters?: Array<{
        text: string;
        value: React.ReactText;
    }> | null;
    filterVisible?: boolean | null;
    onFilter?: ((value: Array<React.ReactText>) => void) | null;
    onFilterVisibleChange?: ((visible: boolean) => void) | null;
    title?: React.ReactNode;
}
/**
 * 表格筛选
 */
declare const TableFilter: React.FC<ITableFilterProps>;
export default TableFilter;
