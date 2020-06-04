import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../Interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  users: User[];
  constructor(private usersService: UsersService, private httpClient: HttpClient) {
      httpClient.get(this.API_ENDPOINT + '/users').subscribe( (data: User[]) => {
        console.log(data);
        this.users = data;
      });
   }

  ngOnInit(): void {
  }

}
