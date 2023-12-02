/*Title: float-field.js
    Author: Evelyn Zepeda
    Date 11/23/2023
    Description: The FloatField class exported
*/

//Exports the FloatField class
export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    //Validates the field
    validate() {
        return isNaN(parseFloat(this.field))
    }
    
    //Returns an error message
    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}.`
    }
};