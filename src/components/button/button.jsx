/* eslint-disable react/prop-types */
function Button({ name, type }) {
  const primary =
    "uppercase hover:bg-[#343434] font-semibold transition-colors duration-300 text-sm bg-[#282828] text-[#fff] px-12 py-3";
  const secondary = "text-sm uppercase";

  const buttonStyle = type === "primary" ? primary : secondary;
  return (
    <button type={type} className={buttonStyle}>
      {name}
    </button>
  );
}

export default Button;
