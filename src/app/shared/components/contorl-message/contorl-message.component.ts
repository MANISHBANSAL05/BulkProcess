import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validation/validator.service';


@Component({
  selector: 'app-contorl-message',
  templateUrl: './contorl-message.component.html',
  styleUrls: ['./contorl-message.component.scss']
})
export class ContorlMessageComponent {

  // errorMessage: string;
  @Input() control: FormControl;

  constructor(private validator: ValidatorService) { }

  get errorMessage() {
    // console.log(this.control.errors);
    for (const property in this.control.errors) {
      if (this.control.errors.hasOwnProperty(property) && this.control.touched) {
        return this.validator.getErrorMessage(property);
      }
    }

    return null;
  }

}
