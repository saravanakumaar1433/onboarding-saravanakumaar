import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from '../../services/user.spec';
import { User } from '../../models/user';

@Component({
  selector: 'app-search',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  searchText = '';
  users: User[] = [];

  constructor(private userService: UserService) {}

  search(): void {

    if (!this.searchText.trim()) {
      this.users = [];
      return;
    }

    this.userService
      .searchUsers(this.searchText)
      .subscribe({
        next: (response) => {
          this.users = response.data;
        },
        error: (error) => {
          console.error('Search failed:', error);
        }
      });
  }
}