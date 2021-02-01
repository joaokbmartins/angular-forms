import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TemplateAssignmentComponent } from './template-driven/template-assignment/template-assignment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent,
    children: [{ path: 'assignment', component: TemplateAssignmentComponent }],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    TemplateAssignmentComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
