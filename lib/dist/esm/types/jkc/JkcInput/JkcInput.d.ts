import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "./SmartjkcDatePicker.css";
import "./SmartjkcColorPicker.css";
import "./SmartjkcCheckbox.css";
import "./SmartjkcRadio.css";
import "./SmartjkcSelect.css";
export interface IInputMaskProps {
    type: string;
    name: string;
    settings: ISettingsProps;
    onChangeEvent?: any;
    onBlurEvent?: any;
    onFocusEvent?: any;
    onKeyUpEvent?: any;
    onKeyDownEvent?: any;
    onClickEvent?: any;
}
export interface ISettingsProps {
    id?: string;
    label?: string;
    value?: any;
    className?: string;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: number;
    placeholder?: string;
    allowDecimals?: boolean;
    allowNegativeValue?: boolean;
    decimalsLimit?: number;
    decimalScale?: number;
    fixedDecimalLength?: number;
    prefix?: string;
    suffix?: string;
    decimalSeparator?: string;
    groupSeparator?: string;
    intlConfig?: object;
    disableAbbreviations?: boolean;
    disableGroupSeparators?: boolean;
    maxLength?: number;
    minLength?: number;
    step?: number;
    inline?: boolean;
    json?: any[];
    checkboxLabelStyle?: React.CSSProperties;
    pointerColor?: string;
    pointerWidth?: string;
    pointerHeight?: string;
    pointerMargin?: string;
    checkboxCheckedBorderColor?: string;
    checkboxUncheckedBorderColor?: string;
    checkboxRadius?: string;
    checkboxCheckedBgColor?: string;
    checkboxUncheckedBgColor?: string;
    checkboxBorder?: string;
    checkboxHeight?: string;
    checkboxWidth?: string;
    iconStyle?: React.CSSProperties;
    iconToggleStyle?: React.CSSProperties;
    iconClass?: string;
    iconShow?: boolean;
    iconShowHideToggle?: boolean;
    isShowPassword?: boolean;
    dateFormat?: string;
    minDate?: Date;
    maxDate?: Date;
    popperClassName?: string;
    popperPlacement?: any;
    showTimeSelect?: boolean;
    showTimeSelectOnly?: boolean;
    timeIntervals?: number;
    timeCaption?: string;
    mask?: string;
    maskChar?: string;
    alwaysShowMask?: boolean;
    radioLabelStyle?: React.CSSProperties;
    radioCheckedBorderColor?: string;
    radioUncheckedBorderColor?: string;
    radioBorder?: string;
    radioHeight?: string;
    radioWidth?: string;
    min?: number;
    max?: number;
    precision?: number;
    size?: number;
}
declare const JkcInput: React.FunctionComponent<IInputMaskProps>;
export default JkcInput;
