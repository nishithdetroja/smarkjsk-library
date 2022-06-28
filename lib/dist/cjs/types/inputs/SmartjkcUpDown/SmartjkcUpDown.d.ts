import React from 'react';
export interface IInputMaskProps {
    name: string;
    settings: ISettingsProps;
    onChangeEvent: any;
    onBlurEvent?: any;
    onFocusEvent?: any;
    onKeyUpEvent?: any;
    onKeyDownEvent?: any;
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
    min: number;
    max: number;
    step: number;
    precision: number;
    size: number;
}
declare const SmartjkcUpDown: React.FunctionComponent<IInputMaskProps>;
export default SmartjkcUpDown;
