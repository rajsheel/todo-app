import { Component, OnInit, Injectable } from '@angular/core';
import {TaskService} from '../task.service';
import { Task } from '../task.model';
import { ActivatedRoute, Data} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})


export class DisplayTasksComponent implements OnInit   {
  
  private tasksDisplay: Task[] = [];

  constructor(private taskService: TaskService,
  	 		  private route: ActivatedRoute,
  	 		  private http: HttpClient) { }

  ngOnInit() {

  	this.http.get<Task[]>('http://localhost:3000/task/search').subscribe(data => {
      
      this.tasksDisplay = <Task[]>data;
      //console.log("Inside Task Service"+this.tasks);
      //return this.tasks;
      // for (let task of data) {
      //   // console.log("Tasks Value inside service";
      //   this.tasks.push(task);    
      // }


    },
      err => {
        console.log("Error occured.")
      });

    // this.tasksDisplay = this.taskService.getTasks();
    // console.log("Inside Task Component"+this.tasksDisplay);
  	 // // this.route.data
    //   .subscribe(
    //     (data: Data) => {
    //       this.tasks = data['tasks'];
    //     }
    //   );
  }
  

  
  //message: string;

 removeTask(i:number) {

 	this.taskService.removeTasks(i);

 }
 
}
