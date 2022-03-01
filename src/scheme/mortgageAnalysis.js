// https://www.lowermybills.com/mortgage/mortgage-tools/mortgage-analysis/
import { mortgageGol, monthlyPayment, mortgageBalance, homeValue, creditProfile, interestRate } from './data'

export const dataForm = {
    title: 'mortgage analysis',
    endpoint: "",
    callBack: () => {},
    showSteps: true,
    formScheme: [
        {
            step: 1,
            title: "What Is Your Mortgage Goal?",
            subTitle: "",
            properties: [
            {
                type: "select",
                name: "goal",
                placeholder: "Select Mortgage Goal",
                className: "",
                validate: {
                    required: true
                },
                data: mortgageGol
            },
            {
                type: "button",
                label: "Continue",
                handle: () => {},
                action: "submit",
                icon: ""
            }],
        },
        {
            step: 2,
            title: "Monthly Mortgage payment",
            subTitle: "",
            properties: [
            {
                type: "select",
                name: "currentmonthlypayment",
                required: true,
                placeholder: "Select monthly payment",
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
            answer: {}
        },
        {
            step: 3,
            title: "Current Mortgage Balance",
            subTitle: "",
            properties: [
            {
                type: "select",
                name: "currentmortgagebalance",
                required: true,
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
            step: 4,
            title: "Estimated Home Value",
            subTitle: "",
            properties: [
            {
                type: "select",
                name: "currenthomevalue",
                required: true,
                placeholder: "Please Select Home Value",
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
            step: 5,
            title: "Credit Profile",
            subTitle: "",
            properties: [
            {
                type: "select",
                name: "creditscore",
                required: true,
                placeholder: "Select Credit Profile",
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
            step: 6,
            title: "Interest Rate",
            subTitle: "",
            properties: [
            {
                type: "select",
                name: "currentinterestrate",
                required: true,
                placeholder: "Select a Rate",
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
            answer: {}
        },
        {
            step: 7,
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
