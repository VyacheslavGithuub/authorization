import InputUI from "../../../UI/InputUI/InputUI";
import { useLoginFormSCStyle } from "./style";
import ButtonUI from "../../../UI/buttonUI/ButtonUI";
import Loader from "../../../UI/loaderUI/Loader";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
  const { LoginFormSC, LoginFormButtonSC } = useLoginFormSCStyle();
  const { isLoading, onSubmit } = useLoginForm();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <LoginFormSC onSubmit={onSubmit}>
          <InputUI label="Email" type="email" name="email" />
          <InputUI label="Password" type="password" name="password" />
          <LoginFormButtonSC>
            <ButtonUI value="Отправить" />
          </LoginFormButtonSC>
        </LoginFormSC>
      )}
    </>
  );
};

export default LoginForm;
