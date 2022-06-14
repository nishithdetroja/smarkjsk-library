import React, { useEffect } from 'react';
import "./SmartjkcCheckbox.css";

export interface IInputCheckboxProps {
    name: string;
    settings: ISettingsProps;
    onChangeEvent?: any;
};

export interface ISettingsProps {
    id: string;
    label: string;
    value: string;
    className: string;
    inline: boolean;
    json: any[];
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    pointerColor: string;
};

const SmartjkcCheckbox: React.FunctionComponent<IInputCheckboxProps> = props => {

    const { name, settings, onChangeEvent } = props;

    let labelStyle: React.CSSProperties = {
        marginBottom: '0px',
        position: 'absolute',
        paddingLeft: '6px',
        fontSize: '11px',
        fontWeight: '700'
    };

    let inputStyle: React.CSSProperties = {
        width: '100%',
        height: 'auto',
        minHeight: '40px',
        padding: '10px 0px 0px 5px',
        fontSize: '15px',
        border: '1px solid',
        outline: 'none'
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--smartjkc-radio-checked-color', settings.pointerColor);
    }, [])

    return (
        <div>
            <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
            <div style={{ ...inputStyle, ...settings.inputStyle }} >
                {
                    settings.json.map((element: any, i: any) => {
                        return (
                            <div className="samrtjkcCheckboxbutton" key={i} style={settings.inline ? { display: 'inline-block' } : { display: 'block' }} >
                                <input
                                    type="checkbox"
                                    className={settings.className}
                                    name={element.value}
                                    onChange={onChangeEvent}
                                    checked={element.checked}
                                    value={element.value}
                                    id={element.value} />
                                <label htmlFor={element.value}>{element.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SmartjkcCheckbox;