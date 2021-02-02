import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TemplateAssignmentComponent } from './template-driven/template-assignment/template-assignment.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent,
    children: [{ path: 'assignment', component: TemplateAssignmentComponent }],
  },
  { path: 'reactive', component: ReactiveComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    TemplateAssignmentComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
