import React from 'react';
import "./SmartjkcCheckbox.css";
export interface IInputCheckboxProps {
    name: string;
    settings: ISettingsProps;
    onChangeEvent?: any;
}
export interface ISettingsProps {
    id: string;
    label: string;
    value: string;
    className: string;
    inline: boolean;
    json: any[];
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    checkboxLabelStyle: React.CSSProperties;
    pointerColor: string;
    pointerWidth: string;
    pointerHeight: string;
    pointerMargin: string;
    checkboxCheckedBorderColor: string;
    checkboxUncheckedBorderColor: string;
    checkboxRadius: string;
    checkboxCheckedBgColor: string;
    checkboxUncheckedBgColor: string;
    checkboxBorder: string;
    checkboxHeight: string;
    checkboxWidth: string;
}
declare const SmartjkcCheckbox: React.FunctionComponent<IInputCheckboxProps>;
export default SmartjkcCheckbox;
