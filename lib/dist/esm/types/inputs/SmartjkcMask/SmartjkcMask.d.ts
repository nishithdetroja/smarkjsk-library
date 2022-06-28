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
    mask: string;
    maskChar: string;
    alwaysShowMask: boolean;
    disabled: boolean;
    readOnly: boolean;
    tabIndex: number;
    placeholder: string;
}
declare const SmartjkcMask: React.FunctionComponent<IInputMaskProps>;
export default SmartjkcMask;
