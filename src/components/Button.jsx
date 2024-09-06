const Button = ({ children, styles="" }) => {
  return (
    <button className={`${styles} px-5 py-2 bg-white text-color hover-text-color rounded-md font-bold`}>
      {children}
    </button>
  );
};

export default Button;
