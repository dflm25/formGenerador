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
              type: "checkbox",
              className: "",
              name: "mortgage-comparison-30-year-fixed",
              placeholder: "30 Year Fixed",
              validate: {
                required: true
              },
            },
            {
                type: "checkbox",
                className: "",
                name: "mortgage-comparison-15-year-fixed",
                placeholder: "15 Year Fixed",
                validate: {
                  required: true
                },
            },
            {
                type: "checkbox",
                className: "",
                name: "mortgage-comparison-cash-out",
                placeholder: "Cash Out Refinance",
                validate: {
                  required: true
                },
            },
            {
                type: "checkbox",
                className: "",
                name: "mortgage-comparison-5-1-arm",
                placeholder: "5/1 Year Adjustable",
                validate: {
                  required: true
                },
            },
            {
                type: "checkbox",
                className: "",
                name: "mortgage-comparison-fha",
                placeholder: "FHA Loan",
                validate: {
                  required: true
                },
            },
            {
                type: "checkbox",
                className: "",
                name: "mortgage-comparison-va",
                placeholder: "VA Loan",
                validate: {
                  required: true
                },
            },
            {
                type: "checkbox",
                className: "",
                name: "mortgage-comparison-harp",
                placeholder: "HARP Refinance",
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
