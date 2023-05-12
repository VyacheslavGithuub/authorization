import styled from "styled-components";
import { ITabsUIProps } from "./types";

const TabsUISC = styled.div<ITabsUIProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    width: 100%;
    padding-bottom: 10px;
    color: white;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    border-bottom: 1px solid white;

    /* &:nth-child(${1}) {
      color: red;
    } */
  }
`;

export const useTabsUIStyle = () => ({
  TabsUISC,
});
