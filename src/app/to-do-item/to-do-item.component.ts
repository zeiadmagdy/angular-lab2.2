import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-item',
  standalone: true,
  imports: [],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
removeItem(arg0: ToDoItem) {

  this.RemoveMe.emit(arg0);
  
}
  @Input() item!: ToDoItem;
  @Output() RemoveMe = new EventEmitter<ToDoItem>();
}
