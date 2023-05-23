import File from "./file/File";
import { useAppSelector } from "../../../../../store/hooks/hooks";
import { useAddFileFormPreviewStyle } from "./style";

const AddFileFormPreview = () => {
  const { files } = useAppSelector((state) => state.fileSlice);
  const { AddFileFormPreviewSC } = useAddFileFormPreviewStyle();
  return (
    <AddFileFormPreviewSC>
      {files?.map((value: any, index: number) => (
        <File file={value} key={index} id={index} />
      ))}
    </AddFileFormPreviewSC>
  );
};

export default AddFileFormPreview;
