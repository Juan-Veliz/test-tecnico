import { Component, OnInit } from '@angular/core';
import { User } from '../_class/user';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor( private userService:UserService ) { }

  users: User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
      .subscribe((data:any)=>{
        this.users = data.body
        // console.log(data)
      })
  }

}
