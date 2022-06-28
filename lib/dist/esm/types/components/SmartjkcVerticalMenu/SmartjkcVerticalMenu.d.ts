import React from 'react';
import "./SmartjkcVerticalmenu.css";
export interface IVerticalMenuProps {
    settings: ISettingsProps;
    onClickEvent?: any;
}
export interface ISettingsProps {
    json: any[];
    navStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    menuStyle: React.CSSProperties;
    activeStyle: React.CSSProperties;
    subMenuStyle: React.CSSProperties;
    activeStyleSubMenu: React.CSSProperties;
    iconStyle: React.CSSProperties;
    iconStyleSubMenu: React.CSSProperties;
}
declare const SmartjkcVerticalMenu: React.FunctionComponent<IVerticalMenuProps>;
export default SmartjkcVerticalMenu;
