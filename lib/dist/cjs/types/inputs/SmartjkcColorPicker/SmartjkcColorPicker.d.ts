import React from 'react';
export interface IInputColorPickerProps {
    name: string;
    settings: ISettingsProps;
    onChangeEvent: any;
}
export interface ISettingsProps {
    id: string;
    label: string;
    value: string;
    className: string;
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    disabled: boolean;
    readOnly: boolean;
    tabIndex: number;
    placeholder: string;
}
declare const SmartjkcColorPicker: React.FunctionComponent<IInputColorPickerProps>;
export default SmartjkcColorPicker;
