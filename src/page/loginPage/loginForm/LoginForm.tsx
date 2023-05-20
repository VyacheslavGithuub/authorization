import InputUI from "../../../UI/InputUI/InputUI";
import { useLoginFormSCStyle } from "./style";
import ButtonUI from "../../../UI/buttonUI/ButtonUI";
import Loader from "../../../UI/loaderUI/Loader";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
  const { LoginFormSC } = useLoginFormSCStyle();
  const { isLoading, onSubmit } = useLoginForm();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <LoginFormSC onSubmit={onSubmit}>
          <InputUI label="Email" type="email" name="email" />
          <InputUI label="Password" type="password" name="password" />
          <ButtonUI />
        </LoginFormSC>
      )}
    </>
  );
};

export default LoginForm;
