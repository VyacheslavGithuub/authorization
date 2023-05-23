import React from "react";
import { token } from "./token";

export async function downLoadFile(url: string, fileName: string) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });
  if (response.status === 200) {
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  }
}
