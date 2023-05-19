import { useDispatch } from "react-redux";
import { userApi } from "../../../store/services/userServices";
import getFormValues from "../../../utils/getFormValues";
import { useNavigate } from "react-router-dom";
import { addToken } from "../../../store/slice/authSlice";

const useLoginForm = () => {
  // достаём стили
  const dispatch = useDispatch();
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
  error && console.log(error);
  // Если запрос прошёл успешно добавляем токен в стейт и перенаправляем на home page
  const navigate = useNavigate();
  if (data?.status === "ok") {
    dispatch(addToken(data.token));
    navigate("home");
  }
  return {
    isLoading,
    onSubmit,
  };
};

export default useLoginForm;
