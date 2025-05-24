import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url="https://jsonplaceholder.typicode.com/";

  constructor(private httpClient:HttpClient) { }

  GetUsuarios(){
    return this.httpClient.get(this.url+"users");
  }
}
