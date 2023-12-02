/*Title: float-max-field.js
    Author: Evelyn Zepeda
    Date 11/23/2023
    Description: The FloatMaxField class exported
*/

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    };

    validate() {
        return parseFloat(this.field) > parseFloat(this.max);
    };
    

    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}`

    };
};