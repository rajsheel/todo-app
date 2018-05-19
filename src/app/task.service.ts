import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  private tasks: Task[];
  message: string = '';


  getTasks() {

    this.http.get<Task[]>('http://localhost:3000/task/search').subscribe(data => {
      
      this.tasks = <Task[]>data;
      console.log("Inside Task Service"+this.tasks);
      return this.tasks;
      // for (let task of data) {
      //   // console.log("Tasks Value inside service";
      //   this.tasks.push(task);    
      // }


    },
      err => {
        console.log("Error occured.")
      });


   return this.tasks;
  }


  addTasks(task: Task) {

    console.log("Going to Add Task"+task.description);

    const req = this.http.post('http://localhost:3000/task/create', {
      "description": task.description
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  removeTasks(i: number) {

    this.tasks.splice(i, 1);
  }

  setMessage(task: Task) {

    this.message = "Task " + task + " added";
    console.log("Set the message" + this.message);

  }

  getMessage() {
    return this.message;
  }
}
