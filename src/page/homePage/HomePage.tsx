import { Navigate } from "react-router-dom";
import Files from "./files/Files";
import { token } from "../../module/token";

const HomePage = () => {
  return (
    <>
      {/* Если не авторизованный пользователь зайдёт на страницу home то его перенаправит на страницу входа */}
      {token() === null && <Navigate replace to="/" />}
      <Files />
    </>
  );
};

export default HomePage;
