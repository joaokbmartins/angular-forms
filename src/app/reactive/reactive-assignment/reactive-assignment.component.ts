import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css'],
})
export class ReactiveAssignmentComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    userData: new FormGroup({
      username: new FormControl('batata', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    }),
    projStatus: new FormControl(null),
  });
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    // this.configureForm();
    this.projectForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('batata', Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      projStatus: new FormControl('Stable'),
    });
  }

  configureForm() {
    this.projectForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('batata', Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      projStatus: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
