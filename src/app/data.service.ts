import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './DTO/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiString: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiString);
  }
  getUser( userId): Observable<user> {
    return this.http.get<user>(this.apiString + "/" + userId);
  }
}
