import React, { useState } from "react";
import { useAuthFormUIStyle } from "./style";
import TabsUI from "../tabsUI/TabsUI";
interface IAuthFormUI {
  children: React.ReactNode;
  handlerEntrance: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const AuthFormUI = ({ children, handlerEntrance }: IAuthFormUI) => {
  const { AuthFormUISC } = useAuthFormUIStyle();
  return (
    <AuthFormUISC>
      <TabsUI>
        <div
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handlerEntrance(e)
          }
        >
          Login
        </div>
        <div
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handlerEntrance(e)
          }
        >
          Sign Up
        </div>
      </TabsUI>
      {children}
    </AuthFormUISC>
  );
};

export default AuthFormUI;
