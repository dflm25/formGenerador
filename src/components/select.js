import React from "react";

function Input({ errors, name, register, validate, placeholder, data }) {
  return (
    <div>
      <select {...register(name, validate)}>
        <option value="">{placeholder}</option>
        {data.map((option, index) => (
          <option key={`option-${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && <div className="error">This field is required</div>}
    </div>
  );
}

export default Input;
