import css from "./Button.module.css";

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
