interface IBaseObject {
    [key: string]: any;
}
export default class ColumnManager {
    cached: any;
    columns: IBaseObject[];
    constructor(elements: IBaseObject[]);
    isAnyColumnsFixed: () => any;
    isAnyColumnsLeftFixed: () => any;
    isAnyColumnsRightFixed: () => any;
    getLeftColumns: () => any;
    getMainColumns: () => any;
    getRightColumns: () => any;
    getColumns: () => any[];
    getLeftColumnsWidth: () => any;
    getRightColumnsWidth: () => any;
    getGroupColumnsDepth: () => any;
    getColumnsWidthBase: (columns: IBaseObject[]) => string;
    normalize: (elementsParam: IBaseObject[]) => IBaseObject[];
    reset: (elements: IBaseObject[]) => void;
    cache: (name: string, fn: () => void) => any;
}
export {};
