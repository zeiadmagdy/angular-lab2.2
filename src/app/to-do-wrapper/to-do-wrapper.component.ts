import { Component } from '@angular/core';
import { ToDoFormComponent } from "../to-do-form/to-do-form.component";
import { ToDoListComponent } from "../to-do-list/to-do-list.component";
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-wrapper',
  standalone: true,
  imports: [ToDoFormComponent, ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})
export class ToDoWrapperComponent {
  ToDoList : ToDoItem[] = [{"id": 0, "Content": "test"}, {"id": 1, "Content": "test2"}, {"id": 2, "Content": "test3"}];
  
addItem($event: string) {

  this.ToDoList.push({"id": this.ToDoList.length, "Content": $event});
}

}
