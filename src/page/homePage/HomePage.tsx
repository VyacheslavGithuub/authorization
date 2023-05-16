import { useDispatch } from "react-redux";
import { exit } from "../../store/slice/authSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(exit());
  };
  return (
    <>
      <button onClick={onSubmit}>Выход</button>
    </>
  );
};

export default HomePage;
