import React, { useState } from "react";
// import { SmartjkcMask } from './inputs/SmartjkcMask';
// import { SmartjkcUpDown } from './inputs/SmartjkcUpDown';
// import { SmartjkcNumeric } from './inputs/SmartjkcNumeric';
// import { default as SmartjkcColorPicker } from './inputs/SmartjkcColorPicker';
// import { default as SmartjkcDatePicker } from './inputs/SmartjkcDatePicker';
// import { SmartjkcVerticalMenu } from './components/SmartjkcVerticalMenu/SmartjkcVerticalMenu';

import {
  SmartjkcMask,
  SmartjkcNumeric,
  SmartjkcUpDown,
  SmartjkcColorPicker,
  SmartjkcDatePicker,
  SmartjkcVerticalMenu
} from 'smartjkc';

import "./App.css";

const App = () => {
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
          {
            name: 'Button', url: '/button', child: [
              { name: 'Primary Button', url: '/button/primary' },
              { name: 'Secondory Button', url: '/button/secondory' },
              { name: 'Danger Button', url: '/button/danger' },
            ]
          },
          { name: 'Styles', url: '/style' },
          { name: 'Alert', url: '/alerts' },
          { name: 'Grid', url: '/grid' },
        ]
      }
    ]
  });
  const [settings4, setSettings4] = useState<any>({
    label: "Color Favourite",
    value: "#3EB489",
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" }
  });
  const [settings5, setSettings5] = useState<any>({
    label: "Policy Date",
    value: new Date(),
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" }
  });
  const [settings6, setSettings6] = useState<any>({
    label: "Metting Time",
    value: new Date(),
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" },
    dateFormat: "h:mm aa",
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeCaption: "Time",
    timeIntervals: 10,
    popperPlacement: 'bottom'
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
  const onChange4 = (event: any) => {
    setSettings4((prevState: any) => {
      return { ...prevState, value: event.target.value };
    });
  };
  const onChange5 = (event: any) => {
    setSettings5((prevState: any) => {
      return { ...prevState, value: event };
    });
  };
  const onChange6 = (event: any) => {
    setSettings6((prevState: any) => {
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
        <div className="col-10">
          <div className="row">
            <div className="col-3">
              <SmartjkcMask name={"dob"} settings={settings} onChangeEvent={onChange}></SmartjkcMask>
            </div>
            <div className="col-3">
              <SmartjkcNumeric name={"salary"} settings={settings1} onChangeEvent={onChange1}></SmartjkcNumeric>
            </div>
            <div className="col-3">
              <SmartjkcUpDown name={"Age"} settings={settings2} onChangeEvent={onChange2}></SmartjkcUpDown>
            </div>
            <div className="col-3">
              <SmartjkcColorPicker name={"Color"} settings={settings4} onChangeEvent={onChange4}></SmartjkcColorPicker>
            </div>
            <div className="col-3 mt-2">
              <SmartjkcDatePicker name={"Policy Date"} settings={settings5} onChangeEvent={onChange5}></SmartjkcDatePicker>
            </div>
            <div className="col-3 mt-2">
              <SmartjkcDatePicker name={"Mettings Time"} settings={settings6} onChangeEvent={onChange6}></SmartjkcDatePicker>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
