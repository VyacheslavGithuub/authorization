import styled from "styled-components";

const ButtonUISC = styled.button<{ bgColor?: string }>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#BF4F74")};
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`;

export const useButtonUIStyle = () => ({
  ButtonUISC,
});
