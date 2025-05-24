import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  constructor(private userServie:UsersService){}
  
  Users:any;

  ngOnInit(): void {
    this.userServie.GetUsuarios().subscribe(x=>{
      this.Users=x;
    })
  }
}
