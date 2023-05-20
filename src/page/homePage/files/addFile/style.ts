import styled from "styled-components";

const AddFileWrapSC = styled.div`
  background-color: #ffe79f;
  padding: 35px;
  border-radius: 10px;
`;
const AddFileSC = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const useAddFileStyle = () => ({
  AddFileWrapSC,
  AddFileSC,
});
