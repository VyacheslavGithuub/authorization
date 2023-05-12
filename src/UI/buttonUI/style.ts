import styled from "styled-components";

const ButtonUISC = styled.button`
  width: 50%;
  background-color: #588686;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px;
  letter-spacing: 1px;
  margin-top: 20px;
  cursor: pointer;
  position: relative;
  top: 0px;
  left: 25%;

  &:active {
    background-color: #74a4a4;
  }
`;

export const useButtonUIStyle = () => ({
  ButtonUISC,
});
