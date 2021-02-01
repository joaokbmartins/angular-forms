import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultQuestion: string = 'teacher';
  answer: string = null;
  genders: string[] = ['female', 'male'];

  @ViewChild('formRef') formRef: NgForm;

  onSuggestUsername() {
    const suggestedUsername: string = 'Supseruser';
    // this.formRef.setValue({
    //   'user-data': {
    //     username: suggestedUsername,
    //     mail: '',
    //     gender: '',
    //   },
    //   secret: 'teacher',
    //   answer: '',
    // });

    this.formRef.form.patchValue({
      'user-data': {
        username: suggestedUsername,
      },
    });
  }

  onSubmit(form: NgForm) {
    console.log('Submitted!', form);
  }
}
