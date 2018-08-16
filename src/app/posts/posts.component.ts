import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Observable } from 'rxjs';
import { Post } from '../DTO/post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Array<Post>;

  constructor(private data: DataService) {
    console.log("posts component: constructor: html tags is created");
   }

  ngOnInit() {
    console.log('posts component: ngOnInit: end for geting data of posts');
    this.data.getPosts().subscribe(
      data => {
        this.posts = data;
      },
      err => console.log(err)
    );
  }

}
