/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonColor,
  className,
  linkpath,
}) => {
  return (
    <Link to={linkpath} className={className}>
      <button
        className={`btn ${
          buttonStyle ? buttonStyle : "btn-nav"
        } ${buttonColor}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}
