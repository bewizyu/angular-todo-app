import {Component, OnInit} from '@angular/core';
import {Task} from '../../model/task.model';
import _ from 'lodash';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.css']
})
export class TodosContainerComponent implements OnInit {

  tasks: Task[] = [];

  addTask(title: string) {
    this.tasks = [...this.tasks, new Task(this.tasks.length + 1, title)];
  }

  removeTasks() {
    this.tasks = [];
  }

  updateTask(task: Task) {
    // Find todo to update in the todos list
    const taskToUpdate = this.tasks.find(item => item.id === task.id);

    // Filter other Todos
    const others = _.without(this.tasks, taskToUpdate);

    this.tasks = [...others, {...taskToUpdate, isDone: !taskToUpdate.isDone}].sort((a, b) => a.id - b.id);
  }

  ngOnInit() {
    this.tasks = [
      new Task(0, 'Faire un truc', true),
      new Task(1, 'Faire un autre truc '),
      new Task(2, 'Faire un troisème truc'),
    ];
  }

}
