import ButtonUI from "../../../../../UI/buttonUI/ButtonUI";
import IconDownload from "../../../../../icon/IconDownload";
import { IUploadedFile } from "./type";
import { useUploadedFileStyle } from "./style";
import { useUploadedFile } from "./useUploadedFile";

const UploadedFile = ({ file, deleteFile }: IUploadedFile) => {
  const {
    UploadedFileSC,
    UploadedFileIconSC,
    UploadedFileNameSC,
    UploadedFileDownloadC,
    UploadedFileIconDownloadSC,
    UploadedFileTimeSC,
  } = useUploadedFileStyle();
  const { downloadClickHandler, time } = useUploadedFile(file.createdAt);

  return (
    <UploadedFileSC>
      <UploadedFileNameSC>{file.fileName}</UploadedFileNameSC>
      <UploadedFileTimeSC>{time}</UploadedFileTimeSC>
      <UploadedFileDownloadC
        onClick={(e) => downloadClickHandler(e, file.url, file.fileName)}
      >
        <UploadedFileIconSC
          src="https://smartlanding.biz/wp-content/uploads/2015/03/kartinki-zaglushki.png"
          alt="no photo"
        />
        <UploadedFileIconDownloadSC>
          <IconDownload />
        </UploadedFileIconDownloadSC>
      </UploadedFileDownloadC>
      <ButtonUI onClick={() => deleteFile(file.id)} value="Удалить файл" />
    </UploadedFileSC>
  );
};

export default UploadedFile;
