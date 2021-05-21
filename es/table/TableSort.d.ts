import React from "react";
import "./style";
export interface ITableSortProps {
    onSort?: ((order: "asc" | "desc" | "") => void) | null;
    sortOrder?: null | "" | "asc" | "desc";
    title?: React.ReactNode;
}
/**
 * 表格排序
 */
declare const TableSort: React.FC<ITableSortProps>;
export default TableSort;
