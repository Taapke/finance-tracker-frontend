import { Routes } from '@angular/router';
import {UserFormComponent} from "./components/user-form/user-form.component";
import {UserListComponent} from "./components/user-list/user-list.component";

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent }
];
