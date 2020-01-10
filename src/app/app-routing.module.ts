import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundErrorsComponent } from './page-not-found-errors/page-not-found-errors.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';


const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path: 'change-password', component : ChangePasswordComponent},
  {path: 'page-not-found-errors', component : PageNotFoundErrorsComponent},
  {path: 'dashboard-admin', component : DashboardAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
