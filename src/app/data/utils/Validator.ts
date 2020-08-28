import { Validation } from '../interfaces/Validation';
import { Result } from '../interfaces/Result';

export class Validator {

    public static validate(input: Validation): Result {

        const result = {
            valid: true,
            message: []
        } as Result;

        for (const validation of input.validations) {
            switch (validation) {
                case VALIDATIONS.REQUIRED:
                    if (!this.required(input.value)) {
                        result.valid = false;
                        result.message.push('এই ঘর টি বাধ্যতামূলক');
                    }
                    break;
                case VALIDATIONS.NUMERIC:
                    if (!this.numeric(input.value)) {
                        result.valid = false;
                        result.message.push('Only numbers are allowed.');
                    }
                    break;
                case VALIDATIONS.LENGTH:
                    console.log("inside length")
                    if (!this.lengths(input.value, input.options)) {
                        result.valid = false;
                        result.message.push('Length should be equal to ' + input.options.len.join(' or ') + '.');
                    }
                    break;
                case VALIDATIONS.EMAIL:
                    this.email(input.value);
                    break;
                case VALIDATIONS.CONTACT:
                    console.log("case contact",input.value)

                    if (!this.contact(input.value)) {
                        // console.log("inside case condition")
                        result.valid = false;
                        result.message.push('MSISDN should start with 17.');
                    }
                    else{
                        result.message.push("test");
                    }
                    break;
                case VALIDATIONS.AGE:
                    if (!this.age(input.value, input.options)) {
                        result.valid = false;
                        result.message.push('Age should be greater than ' + input.options.year + ' years.');
                    }
                    break;
            }
        }

        return result;
    }

    private static required(value: string) {
        console.log("required ")
        if (value !== null && typeof value !== 'undefined' && value !== '') {
            return true;
        }
        return false;
    }
    private static lengths(value: string, options: any) {
        // console.log("inside method length ",options.len )
        // console.log("length value ", value.length);
        if (value && options.len.indexOf(value.length) !== -1) {
            return true;
        }
        return false;
    }
    private static contact(value: string) {
        console.log("inside contact ")
        console.log(value)
        if (value && value.startsWith('17')) {
            console.log("inside if")
            return true;
        }
        else{
            console.log("making false")
        return false;
        }
    }
    private static email(value) {

    }
    private static numeric(value: string) {
        if (value && /^[0-9]*$/.test(value)) {
            return true;
        }
        return false;
    }
    private static age(value: string, options: any) {
        if (value && value.length > 0) {
            const limit = options.year;
            const d1 = new Date(value).getTime();
            const d2 = new Date().getTime();

            const years = new Date(d2 - d1).getFullYear() - 1970;

            if (years >= limit) {
                return true;
            }
        }
        return false;
    }
    private static pattern(value) {

    }
}

export enum VALIDATIONS {
    REQUIRED,
    NUMERIC,
    LENGTH,
    EMAIL,
    CONTACT,
    PATTERN,
    AGE
}
