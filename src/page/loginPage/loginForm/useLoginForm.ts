import { userApi } from "../../../store/services/userServices/userServices";
import getFormValues from "../../../module/getFormValues";
import { useNavigate } from "react-router-dom";
import { token } from "../../../module/token";

const useLoginForm = () => {
  // loginUser запрос для авторизации
  const [loginUser, { data, error, isLoading }] =
    userApi.useLoginUserMutation();
  // Отправляем данные с формы на сервер
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Отменяем поведение формы установленное по умолчанию
    e.preventDefault();
    // Вызываем функцию для создания нового объекта FormData
    const formData = getFormValues(e.currentTarget);
    // Отправляем данные на сервер
    await loginUser(formData);
  };
  // Обрабатываем сценарий ошибки полученной во время запроса
  error && console.log("неправильный email или пароль");
  // Если запрос прошёл успешно добавляем токен в стейт и перенаправляем на home page
  const navigate = useNavigate();
  if (data?.status === "ok") {
    token(data.token);
    navigate("home");
  }
  return {
    isLoading,
    onSubmit,
  };
};

export default useLoginForm;
