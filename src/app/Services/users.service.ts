import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url="https://jsonplaceholder.typicode.com/users/";

  constructor(private httpClient:HttpClient) { }

  GetUsuarios(){
    return this.httpClient.get(this.url);
  }

  GetTareas(id:any){
    return this.httpClient.get(this.url+id+"/todos");
  }

  GetPosteos(id:any){
    return this.httpClient.get(this.url+id+"/posts");
  }
}
