import React from "react";
import { Link } from "react-router-dom";

const STYLES = ["btn-nav", "btn-outline", "btn-calltoaction"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  className,
  linkpath,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <Link to={linkpath} className={className}>
      <button
        className={`btn ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
