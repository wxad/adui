import React from "react";
import { ITrigger } from "../pop-trigger";
import "./style";
export interface IPopupProps {
    [key: string]: any;
    content?: React.ReactNode;
    trigger?: ITrigger;
}
declare const Popup: React.FunctionComponent<IPopupProps>;
export default Popup;
