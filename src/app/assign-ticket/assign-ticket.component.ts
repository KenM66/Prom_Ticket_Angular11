import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { StudentDataService } from '../service/student-data.service';
import { Student } from '../Student';


@Component({
  selector: 'app-assign-ticket',
  templateUrl: './assign-ticket.component.html',
  styleUrls: ['./assign-ticket.component.css']
})
export class AssignTicketComponent implements OnInit {

  studentId: string="";
  ticketNumber:string="";
  students: Student[] | any

  constructor(
    private studentService: StudentDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.studentService.retrieveAllStudents().subscribe(
      response=>{
            this.students=response;
     
            this.update();
      }
    );
  }

  update(){
    var i=0;
    for(var student of this.students){
      if(student.studentId===this.studentId && student.schoolNum===LoginComponent.schoolNum){
        if(student.restricted===true){
          window.alert("Ticket Purchased Declined!  Student is Banned from Prom for the following reason: "+student.restrictedReason)
          return;
        }
        else{
        student.ticketNumber= this.ticketNumber;
        student.status= "Purchased";
        i++;
        this.studentService.updateStudent(student.id, student).subscribe(
          data=>{
            console.log(data);
          }
        );
      }}
      
  }
  if(i===0){
    window.alert("Student does not exist!");
  }

}
}