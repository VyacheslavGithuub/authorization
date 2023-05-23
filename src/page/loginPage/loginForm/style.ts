import styled from "styled-components";

const LoginFormSC = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LoginFormButtonSC = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 25px;

  button {
    width: 150px;
  }
`;

export const useLoginFormSCStyle = () => ({
  LoginFormSC,
  LoginFormButtonSC,
});
