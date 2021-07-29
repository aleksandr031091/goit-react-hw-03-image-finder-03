import css from "./Loader.module.css";
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
  //other logic
  return (
    <div className={css.loaderBox}>
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default LoaderSpinner;
