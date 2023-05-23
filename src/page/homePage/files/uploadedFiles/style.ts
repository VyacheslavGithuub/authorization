import styled from "styled-components";

const UploadedFilesWrapSC = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: #d6d6d6;
  margin-top: 5px;
  padding: 15px 0px 0px 15px;
  border-radius: 0px 0px 15px 15px;
`;
const UploadedFilesSC = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;
const UploadedFilesHeaderSC = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
`;
const UploadedFilesHeaderBtnSC = styled.button`
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  background-color: red;
  font-size: 14px;
`;

export const useUploadedFilesStyle = () => ({
  UploadedFilesHeaderBtnSC,
  UploadedFilesHeaderSC,
  UploadedFilesWrapSC,
  UploadedFilesSC,
});
