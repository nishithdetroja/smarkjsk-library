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
    value: any;
    className: string;
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    disabled: boolean;
    readOnly: boolean;
    tabIndex: number;
    placeholder: string;
    allowDecimals: boolean;
    allowNegativeValue: boolean;
    decimalsLimit: number;
    decimalScale: number;
    fixedDecimalLength: number;
    prefix: string;
    suffix: string;
    decimalSeparator: string;
    groupSeparator: string;
    intlConfig: object;
    disableAbbreviations: boolean;
    disableGroupSeparators: boolean;
    maxLength: number;
    step: number;
}
declare const SmartjkcNumeric: React.FunctionComponent<IInputMaskProps>;
export default SmartjkcNumeric;
