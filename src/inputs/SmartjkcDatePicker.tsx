import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export interface IInputDatePickerProps {
    name: string;
    settings: ISettingsProps;
    onChangeEvent: any;
    onBlurEvent?: any;
    onFocusEvent?: any;
    onKeyUpEvent?: any;
    onKeyDownEvent?: any;
};

export interface ISettingsProps {
    id: string;
    label: string;
    value: string;
    className: string;
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    iconStyle: React.CSSProperties;
    disabled: boolean;
    readOnly: boolean;
    tabIndex: number;
    placeholder: string;
};

const SmartjkcDatePicker: React.FunctionComponent<IInputDatePickerProps> = props => {

    const { name, settings, onChangeEvent, onBlurEvent, onFocusEvent, onKeyUpEvent, onKeyDownEvent } = props;

    let labelStyle: React.CSSProperties = {
        marginBottom: '0px',
        position: 'absolute',
        paddingLeft: '6px',
        fontSize: '11px',
        fontWeight: '700',
        zIndex: '1'
    };

    let inputStyle: React.CSSProperties = {
        width: '100%',
        height: '40px',
        padding: '10px 0px 0px 5px',
        fontSize: '15px',
        border: '1px solid',
        outline: 'none'
    };

    let iconStyle: React.CSSProperties = {
        position: 'absolute',
        right: '23px',
        top: '11px',
        zIndex: '1'
    }

    return (
        <div>
            <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
            <DatePicker
                id={settings.id ? settings.id : name}
                name={name}
                tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                disabled={settings.disabled ? settings.disabled : false}
                readOnly={settings.readOnly ? settings.readOnly : false}
                value={moment(settings?.value).format('MM/DD/YYYY')}
                customInput={
                    <input type="text" id={settings.id ? settings.id : name}
                        name={name} style={{ ...inputStyle, ...settings.inputStyle }} />
                }
                className={settings?.className}
                onChange={onChangeEvent}
                onBlur={onBlurEvent}
                onFocus={onFocusEvent}
                onKeyDown={onKeyDownEvent}
            ></DatePicker>
            <i className='fa fa-calendar' style={{ ...iconStyle, ...settings.iconStyle }}></i>
        </div>
    );
};

export default SmartjkcDatePicker;