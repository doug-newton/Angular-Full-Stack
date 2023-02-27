import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/user.model';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  users: User[] = [];
  isLoading = true;

  constructor(public auth: AuthService,
              public toast: ToastComponent,
              private userService: UserService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe({
      next: data => this.users = data,
      error: error => console.log(error),
      complete: () => this.isLoading = false
    });
  }

  deleteUser(user: User): void {
    this.dialogService.confirm({
      title: 'Confirm',
      body: 'Are you sure you want to delete ' + user.username + '?'
    },
      () => {
        this.userService.deleteUser(user).subscribe({
          next: data => this.toast.setMessage('User deleted successfully.', 'success'),
          error: error => console.log(error),
          complete: () => this.getUsers()
        });
      },
      () => {
      })
  }

}
