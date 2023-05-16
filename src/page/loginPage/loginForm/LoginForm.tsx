import InputUI from "../../../UI/InputUI/InputUI";
import { useLoginFormSCStyle } from "./style";
import { useDispatch } from "react-redux";
import ButtonUI from "../../../UI/buttonUI/ButtonUI";
import { entrance } from "../../../store/slice/authSlice";
import { userApi } from "../../../store/services/user";
import getFormValues from "../../../utils/getFormValues";

const LoginForm = () => {
  const { LoginFormSC } = useLoginFormSCStyle();
  const dispatch = useDispatch();
  const [loginUser, { data }] = userApi.useLoginUserMutation();
  // console.log(process.env.REACT_APP_BASEURL);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Отменяем поведение формы установленное по умолчанию
    e.preventDefault();
    // Вызываем утилиту для создания нового объекта FormData
    const formData = getFormValues(e.currentTarget);
    // Отправляем данные на сервер
    loginUser(formData);
    console.log(data);

    // dispatch(entrance());
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
