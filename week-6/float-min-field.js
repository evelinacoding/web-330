/*Title: float-min-field.js
    Author: Evelyn Zepeda
    Date 11/23/2023
    Description: The FloatMinField class exported
*/

export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    };

    validate() {
        return parseFloat(this.field) < parseFloat(this.min);
    }

    getMessage() {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}`
    };
};