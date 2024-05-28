#!/usr/bin/env node
import inquirer from "inquirer";
console.log(" Welcome to the my Currency convertor");
const currency = { USD: 1, // BASE CURRENCY
    EUR: 0.91, //Euro
    PKR: 285, //Pakistani Rupees
    JPY: 140, //Japanese Yen
    CAD: 1.36, //Canadian Dollar
    GBP: 0.79, //British Pound (GBP)
    AUD: 1.50, //Australian Dollar (AUD)
    CNY: 7.07, //Chinese Yuan
    NZD: 1.63, //New Zealand Dollar
};
let userAnswer = await inquirer.prompt([
    { name: "from",
        message: "Select the currency from given list",
        type: "list",
        choices: ["EUR", "PKR", "JPY", "CAD", "GBP", "AUD", "CNY", "NZD"], },
    { name: "to",
        message: "choose the currency converted into",
        type: "list",
        choices: ["EUR", "PKR", "JPY", "CAD", "GBP", "AUD", "CNY", "NZD"], },
    {
        name: "amount",
        message: "Enter your amount please",
        type: "number",
        validate: function (value) {
            if (value) {
                return true;
            }
            return "Please enter a valid amount.";
        },
    },
]);
if (userAnswer.amount === undefined) {
    console.log("No amount entered. Please restart the program and enter an amount.");
}
else {
    let fromAmount = currency[userAnswer.from]; // exchange rate
    let toAmount = currency[userAnswer.to]; // exchange rate
    let amount = userAnswer.amount;
    // formula to convert the currency
    let baseAmount = amount / fromAmount;
    let convertedAmount = amount * (toAmount / fromAmount);
    console.log(convertedAmount.toFixed(2)); // display converted currency, toFixed(2) shows only two decimal places
}
