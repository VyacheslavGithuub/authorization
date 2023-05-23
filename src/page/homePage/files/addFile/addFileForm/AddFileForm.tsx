import { useAddFileFormStyle } from "./style";
import Exit from "../../../exit/Exit";
import ButtonUI from "../../../../../UI/buttonUI/ButtonUI";
import { useAddFileForm } from "./useAddFileForm";

const AddFileForm = () => {
  const {
    AddFileFormFileSC,
    AddFileFormLabelSC,
    AddFileFormSC,
    AddFileFormTopSC,
    AddFileFormLoadingSC,
  } = useAddFileFormStyle();
  const { error, files, isLoading, handleOnChange, handleSubmit } =
    useAddFileForm();
  return (
    <>
      <AddFileFormSC onSubmit={handleSubmit}>
        <AddFileFormTopSC>
          <div>
            <AddFileFormLabelSC>
              Открыть
              <AddFileFormFileSC
                type="file"
                onChange={handleOnChange}
                multiple
              />
            </AddFileFormLabelSC>
            {files && <ButtonUI value="Загрузить файл" bgColor="green" />}
          </div>
          <Exit />
        </AddFileFormTopSC>
        {error && <h3>Максимальный объем для запроса 1мб</h3>}
        <AddFileFormLoadingSC>
          {isLoading && <h1>Loadin...</h1>}
        </AddFileFormLoadingSC>
      </AddFileFormSC>
    </>
  );
};

export default AddFileForm;
