import styled from "styled-components";

const RegistrationFormSC = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RegistrationFormButtonSC = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 25px;

  button {
    width: 150px;
  }
`;

export const useRegistrationFormStyle = () => ({
  RegistrationFormSC,
  RegistrationFormButtonSC,
});
