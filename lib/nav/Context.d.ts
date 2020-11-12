import * as React from "react";
declare type ContextProps = {
    /**
     * 点击 Nav.Item 时的 handler，参数：index
     */
    onChange?: (index: React.ReactText) => void;
    /**
     * Sub 收起 / 展开 时的 handler，参数：index
     */
    onOpenChange?: (index: React.ReactText) => void;
    /**
     * 外部控制：展开的 SubNav indexes，请确保数组项合法，Nav 不会做过多验证
     */
    openIndexes?: React.ReactText[] | null;
    /**
     * 外部控制：选中的 Nav.Item index
     */
    selectedIndex?: React.ReactText | null;
};
export declare const NavContext: React.Context<ContextProps>;
export {};
