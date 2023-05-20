import { Navigate } from "react-router-dom";
import Exit from "./exit/Exit";
import Files from "./files/Files";

const HomePage = () => {
  const token = sessionStorage.getItem("test");
  return (
    <>
      {/* Если не авторизованный пользователь зайдёт на страницу home то его перенаправит на страницу входа */}
      {token === null && <Navigate replace to="/" />}
      <Exit />
      <Files />
    </>
  );
};

export default HomePage;
