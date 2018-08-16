import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Observable } from 'rxjs';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: object;

  constructor(private data: DataService) {
    console.log("Constructor");
    this.data.getPosts().subscribe(
      data => {
        this.posts = data as HTMLBodyElement;
        console.log(data);
      },
      err => console.log(err),
      () => console.log("end get posts")
    );
    console.log("end constructor");
   }

  ngOnInit() {
    console.log("ngOnInit");
  }

}
