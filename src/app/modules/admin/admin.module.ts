import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminRoute } from './admin.route';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NavBarMenuComponent } from './components/nav-bar-menu/nav-bar-menu.component';
// Import required Ant Design modules
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



@NgModule({
  declarations: [
    DashboardComponent, 
    ManageUserComponent,
    NavBarMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoute),
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzToolTipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
