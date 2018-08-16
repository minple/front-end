import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './DTO/user';
import { Post } from './DTO/post';
import { Observable } from 'rxjs';
import { post } from '../../node_modules/@types/selenium-webdriver/http';

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

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiPosts);
  }
  getPost( postId: number ) {
    return this.http.get(this.apiPosts + "/" + postId);
  }
  getPostImage(postImageId: number): Observable<string> {
    return this.http.get<string>(this.apiMedia + "/" + postImageId);
  }
}
