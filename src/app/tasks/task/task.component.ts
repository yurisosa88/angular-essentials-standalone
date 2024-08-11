import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) userTask!:Task;
  //@Output() complete = new EventEmitter<Task>();
  private readonly tasksService;

  constructor(tasksService:TasksService){
    this.tasksService = tasksService;
  }

  onCompleteTask(){
    this.tasksService.removeTask(this.userTask);
    //this.complete.emit(this.userTask);
  }

}
