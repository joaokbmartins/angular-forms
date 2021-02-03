import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  loginForm: FormGroup;
  genders: string[] = ['female', 'male'];
  forbiddenNames: string[];
  errors: { [key: string]: string };

  ngOnInit() {
    this.forbiddenNames = ['Tonny', 'Wayne'];
    this.errors = {
      required: 'This field is required',
      forbiddenName: 'Username unavailable',
      minLengthInvalid: 'Required length: 10 characters',
      email: 'Invalid email',
    };
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNamesValidator.bind(this),
          this.minLengthValidator.bind(this),
        ]),
        gender: new FormControl('male', [Validators.required]),
      }),
      email: new FormControl(null, [Validators.required, Validators.email]),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.onResetForm();
  }

  onAddHobbie() {
    (<FormArray>this.loginForm.get('hobbies')).push(
      new FormControl('', Validators.required)
    );
    console.log(this.loginForm.get('hobbies')['controls']);
  }

  forbiddenNamesValidator(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) > -1) {
      return { forbiddenName: true };
    }
    return null;
  }

  minLengthValidator(control: FormControl): { [key: string]: boolean } {
    if (control.value && (control.value as string).length < 10) {
      return { minLengthInvalid: true };
    }
    return null;
  }

  getErrorMessages(control: string): string[] {
    let errorMessages: string[] = [];
    for (const [key] of Object.entries(this.loginForm.get(control).errors)) {
      errorMessages.push(this.errors[key]);
    }
    return errorMessages;
  }

  onResetForm(): void {
    this.loginForm.reset();
  }
}
