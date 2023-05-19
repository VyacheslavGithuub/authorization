import { Navigate } from "react-router-dom";
import useHomePage from "./useHomePage";

const HomePage = () => {
  const { onSubmit, token } = useHomePage();
  return (
    <>
      {/* Если не авторизованный пользователь зайдёт на страницу home то его перенаправит на страницу входа */}
      {token === null && <Navigate replace to="/" />}
      <button onClick={onSubmit}>Выход</button>
    </>
  );
};

export default HomePage;
