import { useState } from "react";
import { useForm } from "react-hook-form";

import FormGenerator from "./components/formGenerator";
import Indicator from "./components/indicator";

// Source data
// import { dataForm } from "./scheme/mortgageAnalysis";
// import { dataForm } from "./scheme/refinanceMortgageCalculator";
// import { dataForm } from "./scheme/mortgageCalculator";
// import { dataForm } from "./scheme/mortgageAdvisor"; 
// import { dataForm } from './scheme/mortgageComparison';
import { dataForm } from './scheme/debtToIncomeCalculator';

import "./styles.css";

export default function App() {
  const [formStep, setFormStep] = useState(0);
  const { formScheme, showSteps } = dataForm;
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty }
  } = useForm({
    mode: "onChange"
  });

  const handleStepCompletion = () => {
    setFormStep(formStep + 1);
  };

  const handleGoBackToPreviousStep = () => {
    setFormStep(formStep - 1);
  };

  const onSubmit = (values) => {
    console.log("values", values);
    handleStepCompletion();
  };

  return (
    <div className="App">
      <h1>Let's Get Started</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formScheme.map(
          (item, index) =>
            index === formStep && (
              <FormGenerator
                key={`form-${item.step}`}
                {...item}
                register={register}
                errors={errors}
                action={{ handleGoBackToPreviousStep }}
                step={formStep}
              />
            )
        )}
      </form>
      {showSteps && <Indicator current={formStep} setState={setFormStep} data={formScheme} />}
    </div>
  );
}
