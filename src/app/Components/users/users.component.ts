import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  constructor(private userService:UsersService){}
  
  Users:any;
  Name:any;
  Username:any;
  Email:any;
  Id:any;
  DataSourceTareas:any;
  DataSourcePosteos:any;

  ngOnInit(): void {
    this.userService.GetUsuarios().subscribe(x=>{
      this.Users=x;
    })
  }

  CapturarId(parametroId:any){
    this.Id=parametroId.id;
    this.Name=parametroId.name;
    this.Username=parametroId.username;
    this.Email=parametroId.email;
  }

  GetTarea(id:any){
    this.userService.GetTareas(id).subscribe(x=>{
      this.DataSourceTareas=x;
    })
  }

  GetPosteo(id:any){
    this.userService.GetPosteos(id).subscribe(x=>{
      console.log(x);
      this.DataSourcePosteos=x;
    })
  }
}
