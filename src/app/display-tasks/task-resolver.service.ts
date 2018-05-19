import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { TaskService } from '../task.service';
import { Task } from '../task.model';



@Injectable()
export class TaskResolver implements Resolve<Task[]> {
  constructor(private taskService: TaskService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task[]> | Promise<Task[]> | Task[] {
    return this.taskService.getTasks();
  }
}
