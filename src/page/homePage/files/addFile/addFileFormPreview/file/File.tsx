import { bytesToSize } from "../../../../../../module/bytesToSize";
import { useFileStyle } from "./style";
import { IFile } from "./type";
import { useFile } from "./useFile";

const File = ({ file, id }: IFile) => {
  const { FileWrapSC, FileBinSC, FileSC, FileDescriptionSC, FileNameSC } =
    useFileStyle();
  const { handleDeleteFile, ImageURL } = useFile(file);
  return (
    <FileWrapSC>
      <FileBinSC onClick={() => handleDeleteFile(id)}>&times;</FileBinSC>
      <FileSC src={ImageURL} />
      <FileDescriptionSC>
        <FileNameSC>{file.name}</FileNameSC>
        {bytesToSize(file.size)}
      </FileDescriptionSC>
    </FileWrapSC>
  );
};

export default File;
