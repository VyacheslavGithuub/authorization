import { useSelector } from "react-redux";
import LoginPage from "./loginPage/LoginPage";
import { RootState } from "../store/store";
import HomePage from "./homePage/HomePage";

function MainPage() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return <>{isAuth ? <HomePage /> : <LoginPage />}</>;
}

export default MainPage;
