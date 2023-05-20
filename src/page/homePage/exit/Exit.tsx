import useExit from "./useExit";
import ButtonUI from "../../../UI/buttonUI/ButtonUI";

const Exit = () => {
  const { onSubmit } = useExit();
  return <ButtonUI onClick={onSubmit} value="Выход" />;
};

export default Exit;
