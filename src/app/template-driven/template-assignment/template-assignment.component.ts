import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface LoginData {
  email: string;
  subscriptionLevel: string;
  password: string;
}

@Component({
  selector: 'app-template-assignment',
  templateUrl: './template-assignment.component.html',
  styleUrls: ['./template-assignment.component.css'],
})
export class TemplateAssignmentComponent implements OnInit {
  defaultSubLevel: string = 'pro';
  loginData: LoginData;
  isPasswordVisible: boolean;

  ngOnInit() {
    this.loginData = <LoginData>{};
    this.isPasswordVisible = false;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.doLogin(form);
  }

  doLogin(form: NgForm) {
    this.loginData.email = form.value.email;
    this.loginData.subscriptionLevel = form.value.subLevel;
    this.loginData.password = form.value.password;
  }

  doResetForm(form: NgForm) {
    form.reset();
  }
}
