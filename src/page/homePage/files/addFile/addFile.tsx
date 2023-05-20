import React, { useEffect, useState } from "react";
import { fileApi } from "../../../../store/services/fileServices/fileServices";
import File from "../file/File";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../store/hooks/hooks";
import { setFilesAction } from "../../../../store/slice/fileSlice";
import { useAddFileStyle } from "./style";

const AddFile = () => {
  const dispatch = useDispatch();
  const { AddFileSC, AddFileWrapSC } = useAddFileStyle();
  const { files } = useAppSelector((state) => state.fileSlice);
  // Запрос на добавление
  const [addFileApi, { error }] = fileApi.useAddFileApiMutation();

  // Функция для формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    // Итерируемся по мвссиву с файлами
    for (const file of files) {
      // создаём массив файлов путём повторного объявления append
      formData.append("files[]", file);
    }
    // Отправляеми formData на сервер
    await addFileApi(formData);
  };

  const handleOnChange = (e: any) => {
    e.preventDefault();
    console.log(e.target.files);

    // Достаём файлы из поля input
    const arrFiles = Array.from(e.target.files);
    // Добавляем файлы в state
    dispatch(setFilesAction(arrFiles));
  };

  return (
    <AddFileWrapSC>
      {error && <h2>Максимальный объем для запроса 1мб</h2>}

      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleOnChange} multiple />
        <input type="submit" value="Загрузить файл" />
      </form>

      <AddFileSC>
        {files?.map((value: any, index: number) => (
          <File file={value} key={index} id={index} />
        ))}
      </AddFileSC>
    </AddFileWrapSC>
  );
};

export default AddFile;

// const [image, setImage] = useState<any>();
// const [imageURL, setImageURL] = useState<any>();
// const fileReader = new FileReader();
// fileReader.onloadend = () => {
//   setImageURL(fileReader.result);
// };

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   // console.log(fileComponent.current.files[0]);
// };
// const handleOnChange = (e: any) => {
//   e.preventDefault();
//   if (e.target.files && e.target.files.length) {
//     // const arrFiles = Array.from(e.target.files);
//     const file = e.target.files[0];
//     setImage(file);
//     fileReader.readAsDataURL(file);
//   }
// };
