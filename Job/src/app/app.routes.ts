import { Router, RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { ApplicationComponent } from './components/application/application.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
    {path: 'register' , component: UserRegistrationComponent},
    {path: 'login' , component: LoginComponent},
    {path:'jobs', component:JobListComponent},
    {path:'job/:id', component:JobDetailsComponent},
    {path:'post-job', component:JobPostingComponent},
    {path:'application/:id', component:ApplicationComponent},
    {path:'profile/:username', component:ProfileComponent},
    {path:'Dashboard', component:DashboardComponent},
    {path:'', redirectTo:'/login', pathMatch:'full'}
];
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoute{}