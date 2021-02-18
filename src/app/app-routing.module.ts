import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewempComponent } from './addnewemp/addnewemp.component';
import { DeventryformComponent } from './main/deventryform/deventryform.component';
import { EmpentryformComponent } from './main/empentryform/empentryform.component';
import { MainComponent } from './main/main.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'welcome',component:WelcomePageComponent},
  {path:'main',component:MainComponent},
  {path:'newuser',component:AddnewempComponent},
  {path:'newdevice',component:DeventryformComponent},
  {path:'empdetails',component:UserDetailsComponent},
  {path:'',redirectTo:'/welcome',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
