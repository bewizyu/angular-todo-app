import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../model/task.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  @Input()
  tasks: Task[];

  @Output()
  taskChanged = new EventEmitter<Task>();

  getTaskDone() {
    return this.tasks.filter(item => item.isDone);
  }

  handleTaskChanged(task: Task) {
    this.taskChanged.emit(task);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
