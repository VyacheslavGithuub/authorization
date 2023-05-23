import { token } from "../../../module/token";
import { userApi } from "../../../store/services/userServices/userServices";
import { useNavigate } from "react-router-dom";

const useExit = () => {
  // exitUser запрос на выход из аккаунта
  const [exitUser] = userApi.useExitUserMutation();

  // для перенаправления на страницу login page
  const navigate = useNavigate();

  // обрабатываем событие выхода
  const onSubmit = () => {
    // если токен не null тогда отправляем запрос на выход
    if (token()) {
      exitUser(token());
      // чистим токен
      token("");
      //перенаправляем на страницу с авторизацией
      navigate("/");
    }
  };
  return {
    onSubmit,
    token,
  };
};

export default useExit;
