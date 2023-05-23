import styled from "styled-components";

const AddFileWrapSC = styled.div`
  background-color: #d6d6d6;
  padding: 35px;
  border-radius: 10px;
  min-height: 265px;
  border-radius: 15px 15px 0px 0px;
  margin-top: 15px;
`;
const AddFileSC = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const useAddFileStyle = () => ({
  AddFileWrapSC,
  AddFileSC,
});
