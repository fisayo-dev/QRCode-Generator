const Button = ({ children, disabled, styles = "", onClick = () => { } }) => {
  return (
    <button disabled={disabled} className={`${styles} px-5 py-2 bg-slate-200 hover:bg-white text-color hover-text-color rounded-md font-bold disabled:bg-gray-700 disabled:cursor-not-allowed`}
    onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
