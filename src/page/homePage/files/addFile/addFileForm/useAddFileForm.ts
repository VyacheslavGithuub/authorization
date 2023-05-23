import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../../store/hooks/hooks";
import { fileApi } from "../../../../../store/services/fileServices/fileServices";
import { setFilesAction } from "../../../../../store/slice/fileSlice";

export const useAddFileForm = () => {
  // Достаём файлы из state
  const { files } = useAppSelector((state) => state.fileSlice);
  const dispatch = useDispatch();
  // Запрос на добавление
  const [addFileApi, { error, isLoading }] = fileApi.useAddFileApiMutation();

  // Функция для формы
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    // Итерируемся по мвссиву с файлами
    for (const file of files) {
      // создаём массив файлов путём повторного объявления append
      formData.append("files[]", file);
    }
    // Отправляеми formData на сервер
    addFileApi(formData);
    dispatch(setFilesAction(null));
  };

  const handleOnChange = (e: any) => {
    e.preventDefault();
    // Достаём файлы из поля input
    const arrFiles = Array.from(e.target.files);
    // Добавляем файлы в state
    dispatch(setFilesAction(arrFiles));
  };

  return {
    error,
    files,
    isLoading,
    handleOnChange,
    handleSubmit,
  };
};
