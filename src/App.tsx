import React, { useState } from "react";
import { SmartjkcMask } from './inputs/SmartjkcMask';
import { SmartjkcUpDown } from './inputs/SmartjkcUpDown';
import { SmartjkcNumeric } from './inputs/SmartjkcNumeric';
import { SmartjkcVerticalMenu } from './components/SmartjkcVerticalMenu/SmartjkcVerticalMenu';

// import {
//   SmartjkcMask,
//   SmartjkcNumeric,
//   SmartjkcUpDown
// } from 'smartjkc';

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

  const [settings3, setSettings3] = useState<any>({
    json: [
      {
        label: "Main", menus: [
          { name: 'Home', url: '/home', icon: 'fa fa-home' },
          { name: 'Customer', url: '/customer', icon: 'fa fa-user' },
          { name: 'Account', url: '/account', icon: 'fa fa-address-book-o' },
          {
            name: 'Bill', url: '/bill', icon: 'fa fa-book',
            child: [
              { name: 'New Bill', url: '/bill/newbill' },
              { name: 'Approved Bill', url: '/bill/approvedbill' },
              { name: 'Paid Bill', url: '/bill/paidbill' },
              { name: 'Rejected Bill', url: '/bill/rejectedbill' }
            ]
          },
        ]
      },
      {
        label: "Devloper", menus: [
          { name: 'Forms', url: '/forms' },
          { name: 'Button', url: '/button' },
          { name: 'Styles', url: '/style' },
          { name: 'Alert', url: '/alerts' },
          { name: 'Grid', url: '/grid' },
        ]
      }
    ]
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

  const onClick = (event: any) => {

  }
  return (
    <div className="App">
      <div className="row m-5">
        <div className="col-2">
          <SmartjkcVerticalMenu settings={settings3} onClickEvent={onClick}></SmartjkcVerticalMenu>
        </div>
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
