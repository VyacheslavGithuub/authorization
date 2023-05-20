import { useButtonUIStyle } from "./style";

interface IButtonUI {
  value: string;
  onClick?: () => void;
}
const ButtonUI = ({ value, onClick }: IButtonUI) => {
  const { ButtonUISC } = useButtonUIStyle();
  return (
    <ButtonUISC type="submit" onClick={onClick}>
      {(value = value ? value : "Кнопка")}
    </ButtonUISC>
  );
};

export default ButtonUI;
