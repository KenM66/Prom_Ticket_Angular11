import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmitStudentComponent } from './admit-student/admit-student.component';
import { AssignTicketComponent } from './assign-ticket/assign-ticket.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { RestrictStudentComponent } from './restrict-student/restrict-student.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
{ path: 'login', component: LoginComponent},
{path: 'students', component: ListStudentsComponent, canActivate:[RouteGuardService]},
{ path: 'welcome', component: WelcomeComponent, canActivate:[RouteGuardService]},
{ path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
{path: 'newstudent', component: CreateStudentComponent, canActivate:[RouteGuardService]},
{path: 'restrict', component: RestrictStudentComponent, canActivate:[RouteGuardService]},
{path: 'register', component: RegisterComponent},
{path: 'admit', component: AdmitStudentComponent, canActivate:[RouteGuardService]},
{path: 'assign', component: AssignTicketComponent, canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
