import Loader from "../../../../UI/loaderUI/Loader";
import { fileApi } from "../../../../store/services/fileServices/fileServices";
import UploadedFile from "./UploadedFile/UploadedFile";
import { useUploadedFilesStyle } from "./style";
import { useUploadedFiles } from "./useUploadedFiles";

const UploadedFiles = () => {
  const {
    UploadedFilesSC,
    UploadedFilesWrapSC,
    UploadedFilesHeaderSC,
    UploadedFilesHeaderBtnSC,
  } = useUploadedFilesStyle();
  const {
    data,
    files,
    isLoading,
    filesLength,
    handleDelete,
    handleDeleteAllFiles,
  } = useUploadedFiles();

  return (
    <UploadedFilesWrapSC>
      {isLoading && <Loader />}
      <UploadedFilesHeaderSC>
        <h3>Всего загруженных файлов: {filesLength}</h3>
        {filesLength > 0 && (
          <UploadedFilesHeaderBtnSC onClick={() => handleDeleteAllFiles(data)}>
            Удалить все файлы
          </UploadedFilesHeaderBtnSC>
        )}
      </UploadedFilesHeaderSC>
      <UploadedFilesSC>
        {files?.map((value: any, index: number) => (
          <UploadedFile file={value} key={index} deleteFile={handleDelete} />
        ))}
      </UploadedFilesSC>
    </UploadedFilesWrapSC>
  );
};

export default UploadedFiles;
