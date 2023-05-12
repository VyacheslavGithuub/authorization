import InputUI from "../../../UI/InputUI/InputUI";
import ButtonUI from "../../../UI/buttonUI/buttonUI";
import { useRegistrationFormStyle } from "./style";

const RegistrationForm = () => {
  const { RegistrationFormSC } = useRegistrationFormStyle();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // отменяем поведение формы установленное по умолчанию
    e.preventDefault();
    // Создаём новый объект FormData
    const formData = new FormData(e.currentTarget);
    // Проверка на сходство паролей
    if (formData.get("password") !== formData.get("repeatPassword")) return;
    // Если пароли сходятся отправляем данные на сервер
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <RegistrationFormSC action="" method="" onSubmit={onSubmit}>
      <InputUI label="Email" type="email" name="email" />
      <InputUI label="Login" name="login" />
      <InputUI label="Password" type="password" name="password" />
      <InputUI label="Repeat password" type="password" name="repeatPassword" />
      <ButtonUI />
    </RegistrationFormSC>
  );
};

export default RegistrationForm;
