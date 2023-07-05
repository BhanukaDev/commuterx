/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const STYLES = [
  "btn-primary",
  "btn-outline",
  "btn-calltoaction",
  "btn-secondary",
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonColor,
  className,
  linkpath,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <Link to={linkpath} className={className}>
      <button
        className={`btn ${checkButtonStyle} ${buttonColor}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
