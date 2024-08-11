import { Component, Input, inject } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from '../user/user.model';
import { NewTask, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user!: User;
  isAddingTask = false;
  //private readonly tasksSvc = inject(TasksService);

  constructor(private readonly tasksSvc: TasksService) {}

  // taskComplete(taskDelete:Task){
  //   this.tasksSvc.removeTask(taskDelete);
  // }

  onstarAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddNewTask(newTask:NewTask) {
  //   this.tasksSvc.addTask(newTask,this.user.id)
  //   this.isAddingTask = false;
  // }

  get userSelectedTasks(){
    return this.tasksSvc.getUserTasks(this.user.id)
  }

}
