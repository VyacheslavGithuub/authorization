import React, { useState } from "react";
import { useFileStyle } from "./style";
import { useDispatch } from "react-redux";
import { deleteFileAction } from "../../../../store/slice/fileSlice";
import IconBin from "../../../../icon/IconBin";

interface IFile {
  file: any;
  id: number;
}

const File = ({ file, id }: IFile) => {
  const { FileWrapSC, FileBinSC, FileSC, FileDescriptionSC } = useFileStyle();
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
  return (
    <FileWrapSC>
      <FileBinSC onClick={() => handleDeleteFile(id)}>&times;</FileBinSC>
      <FileSC src={ImageURL} alt="" />
      <FileDescriptionSC>
        <span>{file.name}</span>
        {file.size}
      </FileDescriptionSC>
    </FileWrapSC>
  );
};

export default File;
