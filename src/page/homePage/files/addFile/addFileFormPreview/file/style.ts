import styled from "styled-components";

const FileWrapSC = styled.div`
  position: relative;

  &:hover {
    div {
      opacity: 1;
    }
  }
`;
const FileSC = styled.img`
  width: 186px;
  height: 120px;
`;
const FileBinSC = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s ease-out;
`;
const FileDescriptionSC = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 4px;
  right: 0px;
  left: 0px;
  height: 25px;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  transition: all 0.2s ease-out;
`;
const FileNameSC = styled.span`
  width: 100%;
  max-width: 100px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
export const useFileStyle = () => ({
  FileDescriptionSC,
  FileWrapSC,
  FileNameSC,
  FileBinSC,
  FileSC,
});
