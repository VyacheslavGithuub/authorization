import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import MainPage from "./page/MainPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
