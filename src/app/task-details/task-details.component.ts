import { Component } from '@angular/core';
import { TaskService } from '../core/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  task="";
  id:number=0;
constructor(private  route: ActivatedRoute,private taskService: TaskService)
{
this.id=parseInt(this.route.snapshot.paramMap.get("index")||"",10);
this.task=taskService.getTask(this.id);
}

}
