import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

  constructor(private http: HttpClient) {}

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
        username: new FormControl('batatapalha', [
          Validators.required,
          this.forbiddenNamesValidator.bind(this),
          this.minLengthValidator.bind(this),
        ]),
        gender: new FormControl('male', [Validators.required]),
      }),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.asyncEmailValidator
      ),
      hobbies: new FormArray([]),
    });
    // this.loginForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    this.loginForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    this.loginForm.setValue({
      userData: {
        username: 'PACWOMAN',
        gender: 'famale',
      },
      email: 'test@test.com',
      hobbies: [],
    });
    this.loginForm.patchValue({ email: 'test@email.com' });
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

  minLengthValidator(control: FormControl): { [key: string]: boolean } {
    if (control.value && (control.value as string).length < 10) {
      return { minLengthInvalid: true };
    }
    return null;
  }

  forbiddenNamesValidator(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) > -1) {
      return { forbiddenName: true };
    }
    return null;
  }

  asyncEmailValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if (control.value === 'admin@test.com') {
          resolve({ forbiddenName: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
