declare const omit: (obj: {
    [key: string]: any;
}, fields: string[]) => {
    [x: string]: any;
};
export default omit;
