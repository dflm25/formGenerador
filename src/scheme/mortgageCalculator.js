// https://www.lowermybills.com/mortgage/mortgage-tools/refinance-mortgage-calculator/
import { mortgageGol, monthlyPayment, mortgageBalance, homeValue, creditProfile, interestRate } from './data'

export const dataForm = {
    title: 'mortgage analysis',
    endpoint: "",
    callBack: () => {},
    showSteps: false,
    formScheme: [
        {
          step: 1,
          title: "",
          subTitle: "",
          properties: [
            {
              type: "select",
              className: "",
              name: "loan_amount",
              placeholder: "Loan Amount",
              validate: {
                required: true
              },
              data: homeValue
            },
            {
                type: "select",
                className: "",
                name: "creditscore",
                placeholder: "Credit Profile",
                validate: {
                  required: true
                },
                data: creditProfile
            },
            {
                type: "input",
                name: "zipcode",
                required: true,
                placeholder: "000000",
                validate: {
                  pattern: {
                    value: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                    message: "invalid zipcode"
                  }
                }
            },
            {
              type: "button",
              label: "Calculate",
              handle: () => {},
              action: "submit",
              icon: ""
            }
          ],
        },
    ]
};
