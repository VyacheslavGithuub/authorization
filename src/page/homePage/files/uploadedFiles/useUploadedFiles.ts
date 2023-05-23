import { fileApi } from "../../../../store/services/fileServices/fileServices";

export const useUploadedFiles = () => {
  const { data, isLoading } = fileApi.useGettingFilesQuery("");

  const files = data && data.files;
  const filesLength = files ? files.length : 0;

  const [deleteFile] = fileApi.useDeleteFileMutation();
  // Функция для удаления одного файла
  const handleDelete = (id: string) => {
    deleteFile(id);
  };
  // Функция для удаления всех файлов
  const handleDeleteAllFiles = (data: any) => {
    const arrFile = data.files;
    for (let i = 0; i < arrFile.length; i++) {
      handleDelete(arrFile[i].id);
    }
  };
  return {
    data,
    files,
    isLoading,
    filesLength,
    handleDelete,
    handleDeleteAllFiles,
  };
};
