import React, { useState } from "react";
// import { SmartjkcMask } from './inputs/SmartjkcMask';
// import { SmartjkcUpDown } from './inputs/SmartjkcUpDown';
import { SmartjkcNumeric } from './inputs/SmartjkcNumeric';

import {
  SmartjkcMask,
  SmartjkcUpDown
} from 'smartjkc';

import "./App.css";

function App() {
  const [settings, setSettings] = useState<any>({
    label: "Date Of Birth",
    value: "02/26/1992",
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" },
    mask: "99/99/9999",
    maskPlaceholder: "#",
    alwaysShowMask: true,
  });

  const [settings1, setSettings1] = useState<any>({
    label: "Salary",
    value: '25000',
    prefix: '$',
    decimalSeparator: '.',
    decimalsLimit: 2,
    decimalScale: 2,
    step: 1,
    disableGroupSeparators: true,
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" }
  });

  const [settings2, setSettings2] = useState<any>({
    label: "Percentages",
    value: "40",
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" },
    min: 40,
    max: 100,
    step: 0.5,
    precision: 2
  });

  const onChange = (event: any) => {
    setSettings((prevState: any) => {
      return { ...prevState, value: event.target.value };
    });
  };

  const onChange1 = (event: any) => {
    setSettings1((prevState: any) => {
      return { ...prevState, value: event };
    });
  };

  const onChange2 = (event: any) => {
    setSettings2((prevState: any) => {
      return { ...prevState, value: event };
    });
  };

  return (
    <div className="App">
      <div className="row m-5">
        <div className="col-3">
          <SmartjkcMask name={"dob"} settings={settings} onChangeEvent={onChange}></SmartjkcMask>
        </div>
        <div className="col-3">
          <SmartjkcNumeric name={"salary"} settings={settings1} onChangeEvent={onChange1}></SmartjkcNumeric>
        </div>
        <div className="col-3">
          <SmartjkcUpDown name={"Age"} settings={settings2} onChangeEvent={onChange2}></SmartjkcUpDown>
        </div>
      </div>
    </div>
  );
}

export default App;
