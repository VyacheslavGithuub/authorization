import { useEffect } from "react";
import { fileApi } from "../../../store/services/fileServices/fileServices";
import AddFile from "./addFile/addFile";

const Files = () => {
  const { data, refetch } = fileApi.useGettingFilesQuery("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <AddFile />
    </>
  );
};

export default Files;
