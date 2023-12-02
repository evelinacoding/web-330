/*Title: required-field.js
    Author: Evelyn Zepeda
    Date 11/23/2023
    Description: The RequiredField class
*/

//A class for the required field
export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    //To validate if it's a string
    validate() {
        if(parseFloat(this.field)) {
            return false;
        }else {
  
        return true;
        };
    }

    //To return a message
    getMessage() {
        return `${this.name} is a required field.`
    }
}


