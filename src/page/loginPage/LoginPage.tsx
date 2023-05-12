import React, { useState } from "react";
import { useLoginPageStyle } from "./style";
import AuthFormUI from "../../UI/authFormUI/AuthFormUI";
import LoginForm from "./loginForm/LoginForm";
import RegistrationForm from "./registrationForm/RegistrationForm";

const LoginPage = () => {
  const { LoginPageSC } = useLoginPageStyle();
  const [isEntrance, setEntrance] = useState("Login");
  const handlerEntrance = (e: any) => {
    setEntrance(e.target.innerText);
  };
  return (
    <LoginPageSC>
      <AuthFormUI handlerEntrance={handlerEntrance}>
        {isEntrance === "Login" ? <LoginForm /> : <RegistrationForm />}
      </AuthFormUI>
    </LoginPageSC>
  );
};

export default LoginPage;
