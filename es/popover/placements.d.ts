interface IPlacementOption {
    alignEdge?: boolean;
    autoAdjustPlacement?: boolean;
}
declare const getPlacements: (options: IPlacementOption) => any;
export default getPlacements;
