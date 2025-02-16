import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'huangmao_front'
  users = DUMMY_USERS
  selectedUserId?:string 

  get selectUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
