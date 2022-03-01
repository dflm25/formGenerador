// https://www.lowermybills.com/mortgage/mortgage-tools/mortgage-comparison/

export const dataForm = {
    title: 'mortgage comparison',
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
              type: "input",
              className: "",
              name: "income",
              placeholder: "Gross Monthly Income",
              validate: {
                required: true
              },
            },
            {
                type: "input",
                className: "",
                name: "housing-payments",
                placeholder: "Monthly Mortgage/Rent",
                validate: {
                  required: true
                },
            },
            {
                type: "input",
                className: "",
                name: "credit-payments",
                placeholder: "Monthly Minimum Credit Card Payments",
                validate: {
                  required: true
                },
            },
            {
                type: "input",
                className: "",
                name: "loan-payments",
                placeholder: "Monthly Non-Mortgage Loan Payments",
                validate: {
                  required: true
                },
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
