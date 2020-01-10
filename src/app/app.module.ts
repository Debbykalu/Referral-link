import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


import { CustomMaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundErrorsComponent } from './page-not-found-errors/page-not-found-errors.component';
import{ DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';             


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,          
    ChangePasswordComponent,
    PageNotFoundErrorsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
