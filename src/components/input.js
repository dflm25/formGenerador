import React from "react";

function Input({ validate, errors, name, register, placeholder }) {
  return (
    <>
      <input
        placeholder={placeholder}
        type="text"
        {...register(name, validate)}
      />
      {errors[name] && <span className="error">{errors[name].message}</span>}
    </>
  );
}

export default Input;
