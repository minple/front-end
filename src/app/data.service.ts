import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './DTO/user';
import { Post } from './DTO/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUsers: string = "https://ubunsys.com/wp-json/wp/v2/users";
  private apiPosts: string = "https://ubunsys.com/wp-json/wp/v2/posts";
  private apiMedia: string = "https://ubunsys.com/wp-json/wp/v2/media";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUsers);
  }
  getUser( userId): Observable<User> {
    return this.http.get<User>(this.apiUsers + "/" + userId);
  }

  getPosts_v0() {  
    return this.http.get<Post[]>(this.apiPosts).pipe(
      map((result: Post[]) => result.map( (item: Post) => {
        return item;  
      })
    ));
  }

  getPosts_v1() {  
    let res = this.http.get<Post[]>(this.apiPosts).pipe(
      map( (result:Post[])=> result.map((item:Post)=>{
          return {
            id: item.id,
            title: item.title,
            imageId: item.imageId,
            image: item.image,
            data: item.data,
            excerpt: item.excerpt
          }
        })
      )
    );
    return res;
  }

  getPost( postId: number ): Observable<Post> {
    return this.http.get<Post>(this.apiPosts + "/" + postId);
  }
  getPostImage(postImageId: number): Observable<string> {
    return this.http.get<string>(this.apiMedia + "/" + postImageId);
  }
}
