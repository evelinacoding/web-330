/*Title: finance-calculator.js
    Author: Evelyn Zepeda
    Date 11/23/2023
    Description: Creating the finance calculator
*/

//To export the FinanceCalculator class
export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    static calculateFutureValue(monthlyPayment, rate, years) {
        const months = years * this.MONTHS_IN_YEAR;
        const interestRate = 1 + rate/100;
        const presentValue = monthlyPayment * months;
        const futureValue = presentValue * (Math.pow(interestRate, months));
        
        return futureValue.toFixed(2);
    };

    //Converts the field to currency
    static convertToCurrency(field) {
        const currencyFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: "USD"});

        return currencyFormatter.format(field);
    }
};