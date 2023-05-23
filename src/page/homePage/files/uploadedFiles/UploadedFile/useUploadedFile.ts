import React, { useEffect, useState } from "react";
import { downLoadFile } from "../../../../../module/downLoadFile";

export const useUploadedFile = (createdAt: string) => {
  const [time, setTime] = useState("");

  const creatNewFile = (createdAt: string) => {
    const data = new Date(createdAt);
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const date = data.getDate();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    const result =
      +year +
      "." +
      month +
      "." +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    setTime(result);
  };
  useEffect(() => {
    creatNewFile(createdAt);
  }, []);

  const downloadClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string,
    fileName: string
  ) => {
    e.stopPropagation();
    downLoadFile(url, fileName);
  };
  return {
    time,
    downloadClickHandler,
  };
};
