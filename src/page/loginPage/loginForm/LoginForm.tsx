import InputUI from "../../../UI/InputUI/InputUI";
import ButtonUI from "../../../UI/buttonUI/buttonUI";
import { useLoginFormSCStyle } from "./style";

const LoginForm = () => {
  const { LoginFormSC } = useLoginFormSCStyle();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Отменяем поведение формы установленное по умолчанию
    e.preventDefault();
    // Создаём новый объект FormData
    const formData = new FormData(e.currentTarget);
    // const email = formData.get("email");
    const data = Object.fromEntries(formData);
    // Отправляем данные на сервер
    console.log(data);
  };
  return (
    <LoginFormSC action="" method="" onSubmit={onSubmit}>
      <InputUI label="Email" type="email" name="email" />
      <InputUI label="Password" type="password" name="password" />
      <ButtonUI />
    </LoginFormSC>
  );
};

export default LoginForm;
