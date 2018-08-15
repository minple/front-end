import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Address } from '../DTO/address';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { 
    console.log("component is created");
  }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => {
        this.users = data;
      },
      err => console.error(err),
      () => console.log('ket thuc')
    );
  }

}
