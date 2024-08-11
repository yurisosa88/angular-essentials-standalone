import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string; 
  @Output() close = new EventEmitter<void>();
  //@Output() onNewTask = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  tasksSvc = inject(TasksService);

  submitForm(){
    const newTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }
    this.tasksSvc.addTask(newTask,this.userId);
    this.close.emit();
    //this.onNewTask.emit(newTask)
  }

  onCancel(){
    this.close.emit();
  }
}
