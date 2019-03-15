import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  title = 'test';

  @Output()
  taskAdded = new EventEmitter<string>();

  @Output()
  tasksRemoved = new EventEmitter<void>();

  handleTitleChanged(event) {
    this.title = event.target.value;
  }

  handleAddTask() {
    if (this.title) {
      this.taskAdded.emit(this.title);
      this.title = '';
    }
  }

  handleRemoveTasks() {
    this.tasksRemoved.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
