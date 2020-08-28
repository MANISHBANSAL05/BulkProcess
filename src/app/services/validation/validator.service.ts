import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  private errorMessages = {
      required: 'This field is mandatory.',
      file:'Please upload the Image',
      nonNumeric: 'Should only contain numbers',
      ageLimit: 'The age should be greater than 18.',
      ngbDate:"End Date should be greater than Start date.",
      email: 'Please enter valid email address',
      minlength: 'Minimum 11 digits required.',
      maxlength:'Maximum 11 digits required.',
      invalidSimkitLength: 'The length should be equal to 15.',
      invalidEmail: 'Please enter valid email address',
      invalidpostal: 'The length should be equal to 4',
      invalidmsisdn: 'The length should be equal to 11',
      invalidLength: 'The length should be equal to 10 or 13 or 17',
      invalidNameLength: 'Name should be have at-least 3 characters.',
      invalidNameDotSpace: 'Please insert a valid name',
      invalidNameRepeated: 'Name cannot have 3 repetitive charactes.',
      invalidNameConsecutive: 'Name cannot have 4 sequential charactes.',
      invalidAddressLength: 'Address should be have at-least 5 characters.',
      invalidAddressOnlyDigits: 'Address cannot have only numeric input.',
      invalidAddressDotSpace: 'Please insert a valid address',
      invalidAddressRepeated: 'Address cannot have 3 repetitive charactes.',
      invalidAddressConsecutive: 'Address cannot have 4 sequential charactes.',
      noSelect: 'Please select a vaid option.',
      pattern: 'Please enter valid phone number.',
  };

  constructor() { }

  getErrorMessage(key: string) {
    return this.errorMessages[key];
  }

  static numeric = (control: AbstractControl): {[key: string]: any} => {
    const value = control.value;

    if (!/[.^\d]+$/.test(value)) {
        return {nonNumeric: true};
    }
    return null;
}
}

//!/^\d*$/.test(value) numeric validation
//!/[.^\d]+$/.test(value) decimal validation