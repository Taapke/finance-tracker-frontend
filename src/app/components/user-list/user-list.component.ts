import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    console.log(this.users);
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
