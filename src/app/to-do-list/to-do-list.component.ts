import { Component, Input } from '@angular/core';
import { ToDoItemComponent } from "../to-do-item/to-do-item.component";
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoItemComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
removeItem($event: ToDoItem) {
  //will remove item where id = $event
  const indexToRemove = this.items.indexOf($event);
  this.items.splice(indexToRemove, 1);
}
  @Input() items: ToDoItem[] = [];
}
