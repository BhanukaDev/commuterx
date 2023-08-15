/* eslint-disable react/prop-types */

import { useState } from "react"

const FormInput = ({ label, errorMessage, onChange, id, ...inputProps }) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        data-focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
