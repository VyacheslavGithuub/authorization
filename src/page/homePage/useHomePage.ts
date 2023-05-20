import { useAppSelector } from "../../store/hooks/hooks";

const useHomePage = () => {
  // достаём токен
  const { token } = useAppSelector((state) => state.auth);
  return { token };
};

export default useHomePage;
