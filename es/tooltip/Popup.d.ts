import React from "react";
import { ITrigger } from "../pop-trigger";
import "./style";
export interface IPopupProps {
    [key: string]: any;
    content?: React.ReactNode;
    trigger?: ITrigger;
}
declare const Popup: React.FC<IPopupProps>;
export default Popup;
