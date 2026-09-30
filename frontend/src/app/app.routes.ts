import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { UserList } from './pages/user-list/user-list';
import { UserDetail } from './pages/user-detail/user-detail';
import { Search } from './pages/search/search';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'users',
    component: UserList
  },
  {
    path: 'users/:id',
    component: UserDetail
  },
  {
    path: 'search',
    component: Search
  },
  {
    path: '**',
    redirectTo: ''
  }
];