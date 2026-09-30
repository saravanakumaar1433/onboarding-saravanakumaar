import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { UserService } from '../../services/user.spec';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response.data;
      },
      error: (error) => {
        console.error('Error loading users:', error);
      }
    });
  }
}