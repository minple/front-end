import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Address } from '../DTO/address';
import { User } from '../DTO/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private data: DataService) { 
    console.log("users component: constructor: html tags is created");
  }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => {
        this.users = data;
      },
      err => console.error(err),
      () => console.log('users component: ngOnInit: end for geting data of users')
    );
  }

}
