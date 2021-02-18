import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EmpentryformComponent } from './main/empentryform/empentryform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from './employees.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { DeventryformComponent } from './main/deventryform/deventryform.component'
import { DevicesService } from './devices.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { AddnewempComponent } from './addnewemp/addnewemp.component';
import { DevupdateComponent } from './user-details/devupdate/devupdate.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmpentryformComponent,
    HeaderComponent,
    DeventryformComponent,
    SideBarComponent,
    UserDetailsComponent,
    EmpDetailsComponent,
    AddnewempComponent,
    DevupdateComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeesService,DevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
