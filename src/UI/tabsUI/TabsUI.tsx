import React, { useEffect, useRef } from "react";
import { useTabsUIStyle } from "./style";

interface ITabsUI {
  children: React.ReactNode;
}
const TabsUI = ({ children }: ITabsUI) => {
  const { TabsUISC } = useTabsUIStyle();
  // let sumTabs: number = 1;

  return <TabsUISC isActiveIndex={1}>{children}</TabsUISC>;
};

export default TabsUI;
