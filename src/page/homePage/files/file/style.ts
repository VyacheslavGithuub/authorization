import styled from "styled-components";

const FileWrapSC = styled.div`
  position: relative;
  &:hover {
    div {
      opacity: 1;
    }
  }
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
  transition: opacity 0.25s;
`;
const FileSC = styled.img`
  width: 200px;
  height: 120px;
  /* border-radius: 10px; */
  /* margin-bottom: 10px; */
`;
const FileDescriptionSC = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  height: 25px;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  transition: bottom 0.25s;
`;

export const useFileStyle = () => ({
  FileDescriptionSC,
  FileWrapSC,
  FileBinSC,
  FileSC,
});
