import styled from "styled-components";

const InputLabelUISC = styled.label`
  color: white;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1px;
  margin-top: 10px;
`;
const InputUISC = styled.input`
  width: 100%;
  outline: none;
  background-color: #fffff7;
  border: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
  color: black;
  margin-top: 3px;
  opacity: 0.8;
  &:focus {
    opacity: 0.9;
  }
`;

export const useInputUIStyle = () => ({
  InputLabelUISC,
  InputUISC,
});
