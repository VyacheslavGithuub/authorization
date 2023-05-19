import LoginPage from "./loginPage/LoginPage";
import HomePage from "./homePage/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";

function MainPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default MainPage;
