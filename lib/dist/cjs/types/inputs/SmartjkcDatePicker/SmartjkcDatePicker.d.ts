import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "./SmartjkcDatePicker.css";
export interface IInputDatePickerProps {
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
    value: Date;
    className: string;
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    iconStyle: React.CSSProperties;
    dateFormat: string;
    minDate: Date;
    maxDate: Date;
    disabled: boolean;
    readOnly: boolean;
    tabIndex: number;
    placeholder: string;
    popperClassName: string;
    popperPlacement: any;
    showTimeSelect: boolean;
    showTimeSelectOnly: boolean;
    timeIntervals: number;
    timeCaption: string;
}
declare const SmartjkcDatePicker: React.FunctionComponent<IInputDatePickerProps>;
export default SmartjkcDatePicker;
