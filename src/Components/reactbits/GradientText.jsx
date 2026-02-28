/* eslint-disable react/prop-types */
const GradientText = ({
  children,
  className = "",
  colors = ["#7c3aed", "#06b6d4", "#a855f7", "#7c3aed"],
  animationSpeed = 4,
  showBorder = false,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animation: `gradient-shift ${animationSpeed}s ease-in-out infinite`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const borderStyle = showBorder
    ? {
        border: "1px solid transparent",
        borderImage: `linear-gradient(90deg, ${colors.join(", ")}) 1`,
        borderImageSlice: 1,
        padding: "0.4em 0.6em",
        borderRadius: "0.5em",
      }
    : {};

  return (
    <span className={`gradient-text ${className}`} style={{ ...gradientStyle, ...borderStyle }}>
      {children}
    </span>
  );
};

export default GradientText;
