import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {Http} from '@angular/http';

import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DataService {
 
 
  constructor(public http:Http){

  }
  getUsers()
  {
    return this.http.get('http://jsonplaceholder.typicode.com/users').pipe(map((response: any) => response.json()));
  }
  addUsers(user)
  {
    return this.http.post('http://jsonplaceholder.typicode.com/users',user).pipe(map((response: any) => response.json()));
  }
  deleteUsers(id)
  {
    return this.http.delete('http://jsonplaceholder.typicode.com/users/'+id).pipe(map((response: any) => response.json()));

  }
}
