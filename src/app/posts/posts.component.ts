import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Observable } from 'rxjs';
import { Post } from '../DTO/post';
import { Router } from '@angular/router'
import { Route } from '../../../node_modules/@angular/compiler/src/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Array<Post>;
  static count: number = 0;
  static count_v: number = 0;

  constructor(private data: DataService, private router: Router) {
    console.log("posts component: constructor: html tags is created");
   }

  ngOnInit() {
    console.log('posts component: ngOnInit: end for geting data of posts');

    this.getPost()
  }

  getPost() {
    let startFrom = new Date().getTime();
    this.data.getPosts_v1().subscribe(
      data => {
        this.posts = data;

        PostsComponent.count++;
        let timess = new Date().getTime() - startFrom;
        PostsComponent.count_v +=  timess;
        console.log(timess);
      },
      err => console.log(err),
      () => {
        if(PostsComponent.count < 20) {
          this.router.navigate(['']);
        }
        else {
          console.log("Time trung binh:" + PostsComponent.count_v/PostsComponent.count/1000);
          console.log(PostsComponent.count);
          console.log(PostsComponent.count_v/1000);
        }
      }
    );
  }

}
