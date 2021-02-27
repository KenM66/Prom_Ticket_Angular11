import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { StudentDataService } from '../service/student-data.service';
import { Student } from '../Student';


@Component({
  selector: 'app-admit-student',
  templateUrl: './admit-student.component.html',
  styleUrls: ['./admit-student.component.css']
})
export class AdmitStudentComponent implements OnInit {

  ticketNumber:string='';
  students: Student[] | any
  constructor(
    private studentService: StudentDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    var schoolNum= localStorage.getItem("schoolStringNumKey");
    var schoolNumber= Number(schoolNum);
    LoginComponent.schoolNum= schoolNumber;
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
      if(student.ticketNumber===this.ticketNumber&& student.schoolNum=== LoginComponent.schoolNum){
       var c= confirm("Is this student "+student.firstName+" "+ student.lastName+"?");
       if(c===true){
         if(student.restricted===true){
           window.alert("ACCESS DENIED!  Student is banned from event for the following reason: "+student.restrictedReason)
           return;
         } 
         if(student.status==="Entered"){
           window.alert("Student has already entered event!");
           return;
         }
            window.alert("Access Granted!");
            student.status= "Entered";
            i++;

         this.studentService.updateStudent(student.id, student).subscribe(
           data=>{
             console.log(data);
           }
         )
       }
       else{
         window.alert("ACCESS DENIED! Students must present their assigned ticket!")
         return;
       }

      }
    }
    if(i===0){
      window.alert("Ticket Number does not exist!");
    }
  }
  }

