import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../DTO/user'

@Component({
  selector: 'app-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class DetailsComponent implements OnInit {

  userId: number;
  user: User;
  one: Array<string> = [
    "one","two","three","four","five"
  ];
  

  constructor(private route: ActivatedRoute, private data: DataService) {
    console.log("user-details component: constructor: html tags is created");
    //this.route.params.subscribe(params => this.userId = params.id);
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    
    //ngOnInit running when the constructor created basic component that have html tags. Because html tag use interpolation with property of User class, but user object not New so it donot have its properties. So have to new User() at constructor.
    this.user = new User();
  }

  ngOnInit() {
    console.log('user-details component: ngOnInit: end for geting data of users');
    this.data.getUser(this.userId).subscribe(
      data => {
        this.user = data;
        console.log(this.one);
      },
      err => console.log("asd")
    );
  }

}
