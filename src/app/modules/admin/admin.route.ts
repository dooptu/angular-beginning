import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManageUserComponent } from "./manage-user/manage-user.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";

export const adminRoute: Routes = [
    {path: '', component: AdminPageComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'manage-user', component: ManageUserComponent}
]