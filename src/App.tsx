import React, { useState } from "react";
import { SmartjkcVerticalMenu } from './components/SmartjkcVerticalMenu/SmartjkcVerticalMenu';
import "./App.css";
import { JkcInput } from "smartjkc";

const App = () => {
  const [settings, setSettings] = useState<any>({
    label: "Phone Number",
    value: "(123)-456-7890",
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" },
    mask: "(999)-999-9999",
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
  const [settings7, setSettings7] = useState<any>({
    label: "Gender",
    value: "M",
    inline: true,
    json: [
      {
        name: 'Male',
        value: 'M'
      },
      {
        name: 'Female',
        value: 'F'
      },
      {
        name: 'Other',
        value: 'O'
      }
    ],
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" },
    // radioLabelStyle: {padding: '5px 10px 5px 10px',verticalAlign: 'top'},
    pointerColor: "#3EB489",
    // pointerHeight: '20px',
    // pointerWidth: '20px'
  });
  const [settings8, setSettings8] = useState<any>({
    label: "Hobbies",
    value: "cricket",
    inline: true,
    json: [
      {
        name: 'Circket',
        value: 'cricket',
        checked: true,
      },
      {
        name: 'Football',
        value: 'football',
        checked: false,
      },
      {
        name: 'Chess',
        value: 'chess',
        checked: false
      }
    ],
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" },
    pointerColor: "#3EB489"
  });
  const [settings9, setSettings9] = useState<any>({
    label: "Gender",
    value: "M1",
    inline: true,
    json: [
      {
        name: 'Male',
        value: 'M1'
      },
      {
        name: 'Female',
        value: 'F1'
      },
      {
        name: 'Unisex',
        value: 'U1'
      }
    ],
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" },
    radioLabelStyle: { padding: '5px 10px 5px 10px', verticalAlign: 'top' },
    pointerColor: "#3EB489",
    radioHeight: '20px',
    radioWidth: '20px'
  });
  const [settings10, setSettings10] = useState<any>({
    label: "Hobbies",
    value: "cricket",
    inline: true,
    json: [
      {
        name: 'Circket',
        value: 'cricket1',
        checked: true,
      },
      {
        name: 'Football',
        value: 'football1',
        checked: true,
      },
      {
        name: 'Chess',
        value: 'chess1',
        checked: false
      }
    ],
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" },
    checkboxLabelStyle: { padding: '5px 10px 5px 10px', verticalAlign: 'middle' },
    pointerColor: "#3EB489",
    pointerHeight: "14px",
    pointerWidth: "7px",
    pointerMargin: "1px 7px",
    checkboxHeight: '20px',
    checkboxWidth: '20px'
  });
  const [settings11, setSettings11] = useState<any>({
    label: "Country",
    value: "India",
    json: [
      {
        value: 'India',
        label: 'India'
      },
      {
        value: 'USA',
        label: 'USA'
      },
      {
        value: 'UK',
        label: 'UK'
      }
    ],
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" },
    placeholder: "Select Country"
  });
  const [settings12, setSettings12] = useState<any>({
    label: "Full Name",
    value: "Smart Name",
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" }
  });
  const [settings13, setSettings13] = useState<any>({
    label: "User Name",
    value: "Smartjkc",
    iconShow: true,
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" }
  });
  const [settings14, setSettings14] = useState<any>({
    label: "Password",
    value: "Smartjkc",
    iconShow: false,
    maxLength: 16,
    iconShowHideToggle: true,
    isShowPassword: false,
    iconToggleStyle: {
      position: 'absolute',
      right: '24px',
      top: '11px',
      zIndex: '1'
    },
    className: "",
    inputStyle: { borderColor: "#3EB489" },
    labelStyle: { color: "#3EB489" }
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
  const onChange7 = (event: any) => {
    setSettings7((prevState: any) => {
      return { ...prevState, value: event.target.value };
    });
  };
  const onChange8 = (event: any) => {
    let json = [...settings8.json];
    json.map(res => {
      if (res.value == event.target.value)
        res.checked = event.target.checked;
    })
    setSettings8((prevState: any) => {
      return { ...prevState, json: json };
    });
  };
  const onChange9 = (event: any) => {
    setSettings9((prevState: any) => {
      return { ...prevState, value: event.target.value };
    });
  };
  const onChange10 = (event: any) => {
    let json = [...settings10.json];
    json.map(res => {
      if (res.value == event.target.value)
        res.checked = event.target.checked;
    })
    setSettings10((prevState: any) => {
      return { ...prevState, json: json };
    });
  };
  const onChange11 = (event: any) => {
    setSettings11((prevState: any) => {
      return { ...prevState, value: event.target.value };
    });
  };
  const onChange12 = (event: any) => {
    setSettings12((prevState: any) => {
      return { ...prevState, value: event.target.value };
    });
  };
  const onChange13 = (event: any) => {
    setSettings13((prevState: any) => {
      return { ...prevState, value: event.target.value };
    });
  };
  const onChange14 = (event: any) => {
    setSettings14((prevState: any) => {
      return { ...prevState, value: event.target.value };
    });
  };
  const onClick1 = (event: any) => {
  }
  const onClick = (event: any) => {
    setSettings14((prevState: any) => {
      return { ...prevState, isShowPassword: event };
    });
  }
  return (
    <div className="App">
      <div className="row m-5">
        <div className="col-2">
          <SmartjkcVerticalMenu settings={settings3} onClickEvent={onClick1}></SmartjkcVerticalMenu>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-3 mt-2">
              <JkcInput type={'text'} name={"firstName"} settings={settings12} onChangeEvent={onChange12}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'mask'} name={"dob"} settings={settings} onChangeEvent={onChange}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'number'} name={"salary"} settings={settings1} onChangeEvent={onChange1}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'updown'} name={"Age"} settings={settings2} onChangeEvent={onChange2}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'color'} name={"Color"} settings={settings4} onChangeEvent={onChange4}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'date'} name={"PolicyDate"} settings={settings5} onChangeEvent={onChange5}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'date'} name={"Mettings Time"} settings={settings6} onChangeEvent={onChange6}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'radio'} name={"gender"} settings={settings7} onChangeEvent={onChange7}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'checkbox'} name={"gender"} settings={settings8} onChangeEvent={onChange8}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'select'} name={"country"} settings={settings11} onChangeEvent={onChange11}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'username'} name={"username"} settings={settings13} onChangeEvent={onChange13}></JkcInput>
            </div>
            <div className="col-3 mt-2">
              <JkcInput type={'password'} name={"password"} settings={settings14} onClickEvent={onClick} onChangeEvent={onChange14}></JkcInput>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
