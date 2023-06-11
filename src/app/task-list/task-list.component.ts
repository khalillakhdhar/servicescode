import { Component } from '@angular/core';
import { TaskService } from '../core/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks:string[]=[];
  tache:string=""
constructor(private taskService: TaskService)
{

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getTasks();
}
getTasks()
{
  this.tasks=this.taskService.getTasks();

}
addTask()
{
  this.taskService.addTask(this.tache);
  this.tache="";
  this.getTasks();
}
deleteTask( task:string,index:number)
{
  if(confirm(`vous voulez supprimer la tache: ${task} ?!`))
  {
    this.taskService.deleteTask(index);
    this.getTasks();
  }

}
}
