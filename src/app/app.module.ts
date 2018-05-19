import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';
import { TaskService } from './task.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes} from '@angular/router';
import { MessageComponent } from './add-tasks/message/message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskResolver } from './display-tasks/task-resolver.service';

const appRoutes : Routes =  [


{ path : 'add' , component: AddTasksComponent},
{ path : 'display' , component: DisplayTasksComponent, resolve: {tasks: TaskResolver}},
{ path : 'page-not-found' , component: PageNotFoundComponent},
{ path : '**' , redirectTo: '/page-not-found'}
 
]

@NgModule({
  declarations: [
    AppComponent,
    AddTasksComponent,
    DisplayTasksComponent,
    HeaderComponent,
    MessageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService,TaskResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
