import inquirer from "inquirer";
import chalk from "chalk";
//objectt 
let currency = {
    USD: 1,
    EURO: 0.94,
    RIYAL: 3.75,
    IND: 83.38,
    POUND: 0.81,
    PKR: 278.55,
};
console.log(chalk.bold.italic.underline.grey("**WELOCOME TO CURRENCY CONVERTER**"));
let answer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: chalk.bold.underline.redBright("ENTER FROM CURRENCY?"),
        choices: ["USD", "EURO", "RIYAL", "IND", "PKR", "POUND"]
    },
    {
        name: "to",
        type: "list",
        message: chalk.bold.greenBright.underline("ENTER TO CURRENCY?"),
        choices: ["USD", "EURO", "RIYAL", "IND", "PKR", "POUND"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.bold.yellowBright.underline("ENTER YOUR AMOUNT?"),
    }
]);
let userFromCurrency = answer.from;
let userToCurrency = answer.to;
let fromAmount = currency[userFromCurrency];
let toAmount = currency[userToCurrency];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedCurrency = baseAmount * toAmount;
console.log(chalk.bold.magenta.underline(convertedCurrency));
console.log(chalk.bold.underline.grey("~~THANK YOU!!~~"));
