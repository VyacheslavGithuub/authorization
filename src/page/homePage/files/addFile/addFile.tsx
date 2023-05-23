import { useAddFileStyle } from "./style";
import AddFileForm from "./addFileForm/AddFileForm";
import AddFileFormPreview from "./addFileFormPreview/AddFileFormPreview";

const AddFile = () => {
  const { AddFileWrapSC } = useAddFileStyle();
  // const [totalFileSize, setTotalFileSize] = useState<number>(0);

  return (
    <AddFileWrapSC>
      {/* <span>Общий объём файлов: {bytesToSize(totalFileSize)}</span> */}
      <AddFileForm />
      <AddFileFormPreview />
    </AddFileWrapSC>
  );
};

export default AddFile;
