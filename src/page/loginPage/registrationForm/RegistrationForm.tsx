import InputUI from "../../../UI/InputUI/InputUI";
import ButtonUI from "../../../UI/buttonUI/ButtonUI";
import Loader from "../../../UI/loaderUI/Loader";
import { useRegistrationFormStyle } from "./style";
import useRegistrationForm from "./useRegistrationForm";

const RegistrationForm = () => {
  const { RegistrationFormSC } = useRegistrationFormStyle();
  const { isLoading, onSubmit, errorPassword } = useRegistrationForm();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <RegistrationFormSC
          method="post"
          action="/api/subscribe/"
          onSubmit={onSubmit}
        >
          <InputUI label="Email" type="email" name="email" />
          <InputUI label="Login" name="name" />
          <InputUI label="Password" type="password" name="password" />
          <h5></h5>
          <InputUI
            label={errorPassword}
            type="password"
            name="repeatPassword"
          />
          <ButtonUI />
        </RegistrationFormSC>
      )}
    </>
  );
};

export default RegistrationForm;
