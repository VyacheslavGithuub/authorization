import LoginPage from "./loginPage/LoginPage";
import HomePage from "./homePage/HomePage";
import { useMainPageStyle } from "./style";
import { Navigate, Route, Routes } from "react-router-dom";

function MainPage() {
  const { MainPageSC } = useMainPageStyle();
  return (
    <MainPageSC>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainPageSC>
  );
}

export default MainPage;
