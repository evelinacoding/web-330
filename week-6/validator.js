/*Title: validator.js
    Author: Evelyn Zepeda
    Date 11/23/2023
    Description: The validator 
*/

import { RequiredField } from './required-field.js'
import { FloatField } from './float-field.js'
import { FloatMinField } from './float-min-field.js'
import { FloatMaxField } from './float-max-field.js'

export class Validator {
    constructor(name, field) {
        this.name = name;
        this.field = field;
        this.validators = [];
        this.messages = [];
    };

    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    };

    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    };

    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    };

    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    };

    validate() {
        for (let valid of this.validators) {

            if (valid.validate()) {
                this.messages.push(valid.getMessage());
                return false;
            };
            
        };

        return true;
    };
};