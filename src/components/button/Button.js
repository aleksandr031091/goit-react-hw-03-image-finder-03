import css from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onHandleClickLoadMore }) => {
  return (
    <>
      <button
        className={css.button}
        type="button"
        onClick={onHandleClickLoadMore}
      >
        Load more
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  onHandleClickLoadMore: PropTypes.func.isRequired,
};
