import { useDispatch } from "react-redux";
import { userApi } from "../../store/services/userServices";
import { useAppSelector } from "../../store/hooks/hooks";
import { Navigate, useNavigate } from "react-router-dom";
import { resetToken } from "../../store/slice/authSlice";

const useHomePage = () => {
  const dispatch = useDispatch();
  // exitUser запрос на выход из аккаунта
  const [exitUser] = userApi.useExitUserMutation();
  // достаём токен
  const { token } = useAppSelector((state) => state.auth);
  // для перенаправления на страницу login page
  const navigate = useNavigate();

  // обрабатываем событие выхода
  const onSubmit = () => {
    // если токен не null тогда отправляем запрос на выход
    token && exitUser(token);
    // присваиваем токену null
    dispatch(resetToken());
    //
    navigate("/");
  };
  return {
    onSubmit,
    token,
  };
};

export default useHomePage;
