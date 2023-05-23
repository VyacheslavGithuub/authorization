import { useButtonUIStyle } from "./style";

interface IButtonUI {
  value: string;
  bgColor?: string;
  onClick?: () => void;
}
const ButtonUI = ({ value, onClick, bgColor }: IButtonUI) => {
  const { ButtonUISC } = useButtonUIStyle();
  return (
    <ButtonUISC type="submit" onClick={onClick} bgColor={bgColor}>
      {(value = value ? value : "Кнопка")}
    </ButtonUISC>
  );
};

export default ButtonUI;
