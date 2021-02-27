import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material.module'
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListStudentsComponent } from './list-students/list-students.component';
import { StudentDataService } from './service/student-data.service';
import { StudentService } from './service/student.service';
import { MatSortModule } from '@angular/material/sort';
import { CreateStudentComponent } from './create-student/create-student.component';
import { RestrictStudentComponent } from './restrict-student/restrict-student.component';
import { AdmitStudentComponent } from './admit-student/admit-student.component';
import { RegisterComponent } from './register/register.component';
import { AssignTicketComponent } from './assign-ticket/assign-ticket.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    ListStudentsComponent, 
    CreateStudentComponent,
    RestrictStudentComponent,
    AdmitStudentComponent,
    RegisterComponent,
    AssignTicketComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
    
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
