import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import MainPage from "./page/MainPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MainPage />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
