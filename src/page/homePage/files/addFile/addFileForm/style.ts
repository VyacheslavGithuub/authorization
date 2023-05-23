import styled from "styled-components";

const AddFileFormSC = styled.form`
  margin-bottom: 30px;
`;
const AddFileFormLabelSC = styled.label`
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  background-color: orange;
  font-size: 14px;
  margin-right: 15px;
`;
const AddFileFormFileSC = styled.input`
  display: none;
`;

const AddFileFormLoadingSC = styled.div`
  position: relative;
  top: 50px;
  left: 0px;
`;
const AddFileFormTopSC = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const useAddFileFormStyle = () => ({
  AddFileFormSC,
  AddFileFormFileSC,
  AddFileFormTopSC,
  AddFileFormLabelSC,
  AddFileFormLoadingSC,
});
