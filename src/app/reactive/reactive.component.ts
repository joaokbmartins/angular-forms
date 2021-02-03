import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  genders: string[] = ['female', 'male'];

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        gender: new FormControl('male'),
      }),
      email: new FormControl(null, [Validators.required, Validators.email]),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.loginForm);
  }

  onAddHobbie() {
    (<FormArray>this.loginForm.get('hobbies')).push(
      new FormControl('', Validators.required)
    );
    console.log(this.loginForm.get('hobbies')['controls']);
  }
}
