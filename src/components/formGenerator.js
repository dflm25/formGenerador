import React from "react";

// Form components
import Input from "./input";
import Button from "./button";
import Select from "./select";
import Checkbox from "./checkbox";

const FormGenerator = ({
  register,
  errors,
  properties,
  title,
  action,
  step
}) => {
  const getInput = (property, index) => {
    switch (property.type) {
      case "input":
        return (
          <Input
            key={`input-${index}`}
            {...property}
            register={register}
            errors={errors}
          />
        );
      case "select":
        return (
          <Select
            key={`select-${index}`}
            {...property}
            register={register}
            errors={errors}
          />
        );
      case "button":
        return (
            <Button 
                key={`btn-${index}`} 
                {...property} 
            />
        );
      case "checkbox":
        return (
            <Checkbox 
                key={`btn-${index}`} 
                {...property} 
                register={register} 
                errors={errors} 
            />
        )
      default:
        return null;
    }
  };

  const components = properties.map((property, index) =>
    getInput(property, index)
  );

  return (
    <>
      <div>{title}</div>
      <div className="contentForm">{components}</div>
      <div className="backBtn">
        {step > 0 && (
          <div>
            <button onClick={() => action.handleGoBackToPreviousStep()}>
              Back
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default FormGenerator;
