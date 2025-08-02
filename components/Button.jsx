function CustomButton({
  title,
  variant = 'md', // sm, md, lg
  type = 'button', // or 'submit', 'reset'
  onClick,
  disabled = false,
  className = '',
  style = {},
  children,
}) {
  const paddingMap = {
    sm: '.25rem',
    md: '.5rem',
    lg: '.75rem',
  };

  const verticalPadding = paddingMap[variant] || paddingMap['md'];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        paddingTop: verticalPadding,
        paddingBottom: verticalPadding,
        ...style,
      }}
      className={`bg-primaryBlue capitalize hover:bg-primaryRed text-lg text-white font-semibold px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {title || children}
    </button>
  );
}

export default CustomButton;
