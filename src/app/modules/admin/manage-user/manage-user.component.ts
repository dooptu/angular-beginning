import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message'; 

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.scss'
})
export class ManageUserComponent {

  users: any[] = [];
  columns: string[] = [];
  actions = [
    { title: 'Edit', callback: (user: any) => this.editUser(user) },
    { title: 'Inactive', callback: (user: any) => this.inactiveUser(user) },
    { title: 'Info', callback: (user: any) => this.viewInfo(user) },
    { title: 'Report', callback: (user: any) => this.reportUser(user) }
  ];
  constructor(
    private apiService: AdminService,
    private message: NzMessageService // Inject message service
  ) {

  }

  ngOnInit() {
    this.loadUserFromApi();
  }

  loadUserFromApi() {
    this.apiService.getUsers('users').subscribe({
      next: (data) => {
        this.users = data;
        const attributes = Object.keys(data[0]);
        this.columns = attributes;
        console.log('data: ', JSON.stringify(data));
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


  // Action methods
  editUser(user: any): void {
    this.message.success(`Edit user: ${user.name}`); // Replace with your edit logic
  }

  inactiveUser(user: any): void {
    this.message.success(`Inactive user: ${user.name}`); // Replace with your inactive logic
  }

  viewInfo(user: any): void {
    this.message.success(`View info for user: ${user.name}`); // Replace with your info logic
  }

  reportUser(user: any): void {
    this.message.success(`Report user: ${user.name}`); // Replace with your report logic
  }

}
