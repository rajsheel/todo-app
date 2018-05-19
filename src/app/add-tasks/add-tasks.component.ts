import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Router} from '@angular/router';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  constructor(private taskService: TaskService, private routerService: Router ) { }
  
  //@Output('msg') message = new EventEmitter<string>();
  ngOnInit() {
  }

  task: string = '';
  
  
  //message: string = '';

  addTask(task) {
     console.log("Going to call add Task"+ task);

     var taskObj: Task = { description : task};

     this.taskService.addTasks(taskObj);
     this.taskService.setMessage(taskObj);
     this.routerService.navigate(['/display']);

     //this.message.emit("Task "+ task+ " Added Successfully") ;
     //alert(this.message);
 
  }

}
