import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManageUserComponent } from "./manage-user/manage-user.component";

export const adminRoute: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'manage-user', component: ManageUserComponent}
]