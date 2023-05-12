import React from "react";
import { useInputUIStyle } from "./style";

interface IInputUI {
  type?: string;
  label?: string;
  name: string;
}
const InputUI = ({ type, label, name }: IInputUI) => {
  const { InputUISC, InputLabelUISC } = useInputUIStyle();
  return (
    <>
      <InputLabelUISC>{label}</InputLabelUISC>
      <InputUISC name={name} type={type ? type : "text"} required />
    </>
  );
};

export default InputUI;
