import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../model/task.model';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  taskChanged = new EventEmitter<Task>();

  handleCheckBoxChange() {
    this.taskChanged.emit(this.task);
  }

  ngOnInit() {
  }
}
