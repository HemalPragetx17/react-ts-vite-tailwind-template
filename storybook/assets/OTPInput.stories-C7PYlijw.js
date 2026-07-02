import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-DDzTVtu_.js";import{t as r}from"./iframe-BzRfQavU.js";import{O as i,t as a}from"./ui-sUaI0YKE.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/OTPInput`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{numInputs:{control:{type:`number`,min:1,max:10}},onChange:{action:`changed`}}},l={render:e=>{let[t,n]=o.useState(``);return(0,s.jsx)(i,{...e,value:t,onChange:t=>{let r=t.target.value;n(r),e.onChange?.(r)}})},args:{label:`Enter OTP`,numInputs:6}},u={render:e=>{let[t,n]=o.useState(``);return(0,s.jsx)(i,{...e,value:t,onChange:t=>{let r=t.target.value;n(r),e.onChange?.(r)}})},args:{label:`Enter 4-digit code`,numInputs:4}},d={render:e=>{let[t,n]=o.useState(``),[r,a]=o.useState(``),[c,l]=o.useState(``);return(0,s.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,s.jsx)(i,{...e,label:`Small Size`,size:`sm`,value:t,onChange:e=>n(e.target.value)}),(0,s.jsx)(i,{...e,label:`Medium Size`,size:`md`,value:r,onChange:e=>a(e.target.value)}),(0,s.jsx)(i,{...e,label:`Large Size`,size:`lg`,value:c,onChange:e=>l(e.target.value)})]})},args:{numInputs:6}},f={render:e=>{let[t,n]=o.useState(``);return(0,s.jsx)(i,{...e,value:t,onChange:e=>n(e.target.value)})},args:{label:`OTP with error`,numInputs:6,error:`Invalid OTP code`,touched:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("");
    return <OTPInput {...args} value={value} onChange={(e: any) => {
      const val = e.target.value;
      setValue(val);
      args.onChange?.(val);
    }} />;
  },
  args: {
    label: "Enter OTP",
    numInputs: 6
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("");
    return <OTPInput {...args} value={value} onChange={(e: any) => {
      const val = e.target.value;
      setValue(val);
      args.onChange?.(val);
    }} />;
  },
  args: {
    label: "Enter 4-digit code",
    numInputs: 4
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [valueSm, setValueSm] = React.useState("");
    const [valueMd, setValueMd] = React.useState("");
    const [valueLg, setValueLg] = React.useState("");
    return <div className="flex flex-col gap-6">
        <OTPInput {...args} label="Small Size" size="sm" value={valueSm} onChange={(e: any) => setValueSm(e.target.value)} />
        <OTPInput {...args} label="Medium Size" size="md" value={valueMd} onChange={(e: any) => setValueMd(e.target.value)} />
        <OTPInput {...args} label="Large Size" size="lg" value={valueLg} onChange={(e: any) => setValueLg(e.target.value)} />
      </div>;
  },
  args: {
    numInputs: 6
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState("");
    return <OTPInput {...args} value={value} onChange={(e: any) => setValue(e.target.value)} />;
  },
  args: {
    label: "OTP with error",
    numInputs: 6,
    error: "Invalid OTP code",
    touched: true
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`FourDigits`,`Sizes`,`WithError`]}))();export{l as Default,u as FourDigits,d as Sizes,f as WithError,p as __namedExportsOrder,c as default};