import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service'
import { Post } from '../../DTO/post';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postId: number;
  post: Post;
  postImageId: number;
  postImage: string;

  constructor(private router: ActivatedRoute, private data: DataService) { 
    console.log("post-details component: constructor: html tags is created");
    this.postId = Number(router.snapshot.paramMap.get("id"));
    //ngOnInit running when the constructor created basic component that have html tags. Because html tag use interpolation with property of Post class, but post object not New so it donot have its properties. So have to new Post() at constructor.
  }

  ngOnInit() {
    console.log('post-details component: ngOnInit: end for geting data of post-details');
    //get post details
    let one = this.data.getPost(this.postId);
    let two = one.subscribe(
      (data: Post) => this.post = {
        id: data['id'],
        image: data['image'],
        imageId: data['imageId'],
        title: data['title'],
        data: data['data'],
        excerpt: data['excerpt']
      },
      err => console.log('error anywhere!'),
    () => console.log(this.post)
    );

    //get image link from post details
    //this.data.getPostImage(this.post.)
  }

  getis() {
    //get post details
    this.data.getPost(this.postId).subscribe(
      data => {
        this.post = data as Post;
        //this.postImageId = data.iam
      },
      err => console.log(err)
    );

    //get image link from post details
    //this.data.getPostImage(this.post.)
  }

}
