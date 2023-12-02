/*Title: float-field.js
    Author: Evelyn Zepeda
    Date 11/23/2023
    Description: The FloatField class exported
*/

export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

  
    validate() {
        //return isNaN(parseFloat(this.field));
        return isNaN(parseFloat(this.field))
    }
    

    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}.`
    }
};