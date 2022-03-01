// https://www.lowermybills.com/mortgage/mortgage-tools/mortgage-advisor
import { monthlyPayment, homeValue, interestRate, propertyUse } from './data';

export const dataForm = {
    title: 'Mortgage Advisor',
    endpoint: "",
    callBack: () => {},
    showSteps: false,
    formScheme: [
        {
          step: 1,
          title: "Estimated Home Value",
          subTitle: "",
          properties: [
            {
              type: "select",
              className: "",
              name: "homevalue",
              placeholder: "Please Select Home Value",
              validate: {
                required: true
              },
              data: homevalue
            },
            {
              type: "button",
              label: "Continue",
              handle: () => {},
              action: "submit",
              icon: ""
            }
          ],
          answer: {}
        },
        {
          step: 2,
          title: "Current Mortgage Balance",
          subTitle: "",
          properties: [
            {
              type: "select",
              name: "balance",
              required: true,
              placeholder: "Select Mortgage Balance",
              validate: {
                required: true
              },
              data: homeValue
            },
            {
              type: "button",
              label: "Continue",
              handle: () => {},
              action: "submit",
              icon: ""
            }
          ],
          answer: {}
        },
        {
          step: 3,
          title: "Property Use",
          subTitle: "",
          properties: [
            {
              type: "select",
              name: "propdesc",
              required: true,
              placeholder: "Select Property Use",
              validate: {
                required: true
              },
              data: propertyUse
            },
            {
              type: "button",
              label: "Continue",
              handle: () => {},
              action: "submit",
              icon: ""
            }
          ],
        },
        {
          step: 4,
          title: "Interest Rate",
          subTitle: "",
          properties: [
            {
              type: "select",
              name: "interestrate",
              required: true,
              placeholder: "Interest Rate",
              validate: {
                required: true
              },
              data: interestRate
            },
            {
              type: "button",
              label: "Continue",
              handle: () => {},
              action: "submit",
              icon: ""
            }
          ],
        },
        {
          step: 5,
          title: "Monthly Mortgage payment",
          subTitle: "OK to estimate",
          properties: [
            {
              type: "select",
              name: "currentpayment",
              required: true,
              placeholder: "Select Monthly Payment",
              validate: {
                required: true
              },
              data: monthlyPayment
            },
            {
              type: "button",
              label: "Continue",
              handle: () => {},
              action: "submit",
              icon: ""
            }
          ],
        },
    ]
};
