const Button = ({ children, disabled, styles="" }) => {
  return (
    <button disabled={disabled} className={`${styles} px-5 py-2 bg-white text-color hover-text-color rounded-md font-bold disabled:bg-gray-700 disabled:cursor-not-allowed`}>
      {children}
    </button>
  );
};

export default Button;
