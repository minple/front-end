import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './DTO/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUsers: string = "https://jsonplaceholder.typicode.com/users";
  private apiPosts: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUsers);
  }
  getUser( userId): Observable<user> {
    return this.http.get<user>(this.apiUsers + "/" + userId);
  }

  getPosts() {
    return this.http.get(this.apiPosts);
  }
}
