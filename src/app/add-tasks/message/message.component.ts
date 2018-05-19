import { Component, OnInit,OnChanges
} from '@angular/core';
import { TaskService} from '../../task.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnChanges
 {

  
  constructor (private taskService: TaskService) {}

  
  message = 'test';
  //this.taskService.getMessage();;
  
  //console.log("inside app compoment message rcvd is "+this.message);
  

  ngOnChanges() {

  	this.message = this.taskService.getMessage();
  }

}
