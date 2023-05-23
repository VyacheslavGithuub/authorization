import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFileAction } from "../../../../../../store/slice/fileSlice";

export const useFile = (file: any) => {
  const dispatch = useDispatch();

  // Храним URL картинки
  const [ImageURL, setImageURL] = useState<any>();
  // объявляем новый объект fileReader
  const fileReader = new FileReader();

  // Обработчик для события loadend срабатывает каждый раз по окончании процесса чтения
  fileReader.onloadend = () => setImageURL(fileReader.result);
  fileReader.readAsDataURL(file);

  const handleDeleteFile = (id: number) => {
    dispatch(deleteFileAction(id));
  };

  return {
    handleDeleteFile,
    ImageURL,
  };
};
