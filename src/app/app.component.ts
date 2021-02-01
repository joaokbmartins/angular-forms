import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface UserInfo {
  username: string;
  email: string;
  gender: string;
  secret: string;
  secretAnswer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  defaultQuestion: string = 'teacher';
  answer: string = null;
  genders: string[] = ['female', 'male'];
  userinfo: UserInfo;

  @ViewChild('formRef') formRef: NgForm;

  ngOnInit() {
    this.userinfo = <UserInfo>{};
  }

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
    this.onSaveUserInfo();
    this.onResetForm();
  }

  onSaveUserInfo() {
    this.userinfo.username = this.formRef.value['user-data'].username;
    this.userinfo.email = this.formRef.value['user-data'].mail;
    this.userinfo.gender = this.formRef.value['user-data'].gender;
    this.userinfo.secret = this.formRef.value.secret;
    this.userinfo.secretAnswer = this.formRef.value.answer;
  }

  onResetForm() {
    this.formRef.reset();
  }
}
