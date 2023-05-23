import styled from "styled-components";

const UploadedFileSC = styled.div`
  width: 182px;
  border: 2px solid #bf4f74;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 0px 15px 15px 0px;
`;
const UploadedFileNameSC = styled.div`
  font-size: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const UploadedFileIconSC = styled.img`
  width: 150px;
  height: 150px;
  margin: 5px 0px 15px 0px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const UploadedFileButtonSC = styled.button`
  width: 150px;
  height: 30px;
  cursor: pointer;
`;
const UploadedFileIconDownloadSC = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;
  fill: #ababab;
  opacity: 0;
`;
const UploadedFileDownloadC = styled.div`
  position: relative;
  cursor: pointer;
  div:hover {
    opacity: 1;
  }
`;
const UploadedFileTimeSC = styled.span`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.5;
`;

export const useUploadedFileStyle = () => ({
  UploadedFileSC,
  UploadedFileIconSC,
  UploadedFileNameSC,
  UploadedFileTimeSC,
  UploadedFileButtonSC,
  UploadedFileDownloadC,
  UploadedFileIconDownloadSC,
});
