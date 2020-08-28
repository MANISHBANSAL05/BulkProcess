import { VALIDATIONS } from '../utils/Validator';

export interface Validation {
    value: string;
    validations: VALIDATIONS[];
    options?: any;
}