import { useButtonUIStyle } from "./style";

const ButtonUI = () => {
  const { ButtonUISC } = useButtonUIStyle();
  return <ButtonUISC type="submit">SEND</ButtonUISC>;
};

export default ButtonUI;
