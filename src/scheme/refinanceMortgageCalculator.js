// https://www.lowermybills.com/mortgage/mortgage-tools/refinance-mortgage-calculator/
import { mortgageGol, monthlyPayment, mortgageBalance, homeValue, creditProfile, interestRate } from './data'

export const dataForm = {
    title: 'mortgage analysis',
    endpoint: "",
    callBack: () => {},
    showSteps: true,
    formScheme: [
        {
          step: 1,
          title: "Select Your Current Mortgage Balance",
          subTitle: "OK to estimate",
          properties: [
            {
              type: "select",
              className: "",
              name: "currentmortgagebalance",
              placeholder: "Select Mortgage Balance",
              validate: {
                required: true
              },
              data: mortgageBalance
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
          title: "Select Your Current Home Value",
          subTitle: "OK to estimate",
          properties: [
            {
              type: "select",
              name: "currenthomevalue",
              required: true,
              placeholder: "Select Your Home Value",
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
          title: "Select Your Credit Profile",
          subTitle: "OK to estimate",
          properties: [
            {
              type: "select",
              name: "creditscore",
              required: true,
              placeholder: "Select Your Credit Profile",
              validate: {
                required: true
              },
              data: creditProfile
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
          step: 4,
          title: "Select Your Current Interest Rate",
          subTitle: "OK to estimate",
          properties: [
            {
              type: "select",
              name: "currentinterestrate",
              required: true,
              placeholder: "Select Rate",
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
          title: "Select your current monthly payment",
          subTitle: "OK to estimate",
          properties: [
            {
              type: "select",
              name: "currentmonthlypayment",
              required: true,
              placeholder: "Select a Payment",
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
        {
          step: 6,
          title: "Enter Your ZIP Code",
          subTitle: "OK to estimate",
          properties: [
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
          answer: {}
        }
    ]
};
