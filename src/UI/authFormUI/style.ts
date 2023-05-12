import styled from "styled-components";

const AuthFormUISC = styled.div`
  width: 100%;
  max-width: 365px;
  padding: 30px;
  border-radius: 15px;
  /* other styles */
  background: rgba(0, 0, 0, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

export const useAuthFormUIStyle = () => ({
  AuthFormUISC,
});
