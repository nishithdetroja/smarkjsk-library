import React from 'react';
import "./SmartjkcRadio.css";
export interface IInputRadioProps {
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
    radioLabelStyle: React.CSSProperties;
    pointerColor: string;
    radioCheckedBorderColor: string;
    radioUncheckedBorderColor: string;
    radioBorder: string;
    radioHeight: string;
    radioWidth: string;
}
declare const SmartjkcRadio: React.FunctionComponent<IInputRadioProps>;
export default SmartjkcRadio;
