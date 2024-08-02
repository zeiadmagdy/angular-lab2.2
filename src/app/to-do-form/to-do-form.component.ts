import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {
  @Output() ItemContent: EventEmitter<string> = new EventEmitter<string>();
  addItem(arg0: string) {
    this.ItemContent.emit(arg0);
  }

}
