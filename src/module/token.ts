import React from "react";

export const token = (parameter?: string) =>
  parameter
    ? sessionStorage.setItem("token", parameter)
    : sessionStorage.getItem("token");
