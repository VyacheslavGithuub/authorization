import { useState } from "react";
import { useLoginPageStyle } from "./style";
import AuthFormUI from "../../UI/authFormUI/AuthFormUI";
import LoginForm from "./loginForm/LoginForm";
import RegistrationForm from "./registrationForm/RegistrationForm";

const LoginPage = () => {
  const { LoginPageSC } = useLoginPageStyle();
  const [isEntrance, setEntrance] = useState("Login");

  return (
    <LoginPageSC>
      <AuthFormUI handlerEntrance={(e: any) => setEntrance(e.target.innerText)}>
        {isEntrance === "Login" ? (
          <LoginForm />
        ) : (
          isEntrance === "Sign Up" && <RegistrationForm />
        )}
      </AuthFormUI>
    </LoginPageSC>
  );
};

export default LoginPage;
