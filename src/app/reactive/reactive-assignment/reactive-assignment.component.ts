import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css'],
})
export class ReactiveAssignmentComponent {
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];
}
