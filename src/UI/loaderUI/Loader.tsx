import { useLoaderStyle } from "./style";

const Loader = () => {
  const { LoaderSC } = useLoaderStyle();

  return (
    <div>
      <LoaderSC>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderSC>
    </div>
  );
};

export default Loader;
