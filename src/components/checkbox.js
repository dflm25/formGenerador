import React from "react";

function Input({ validate, errors, name, register, placeholder }) {
  return (
   <>
    <label>
      <input
        type="checkbox"
        {...register(name, validate)}
        id={name}
      />
      {placeholder}
    </label>
    {errors[name] && <span className="error">{errors[name].message}</span>}
   </>
  );
}

export default Input;
