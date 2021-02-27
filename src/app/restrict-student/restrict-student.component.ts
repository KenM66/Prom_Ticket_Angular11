import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { StudentDataService } from '../service/student-data.service';
import { Student } from '../Student';


@Component({
  selector: 'app-restrict-student',
  templateUrl: './restrict-student.component.html',
  styleUrls: ['./restrict-student.component.css']
})
export class RestrictStudentComponent implements OnInit {
  restrictedReason: string='';
  studentId: string='';
  //student!: Student;
  submitted: boolean=false;
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
    this.submitted=true;
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
      console.log(LoginComponent.schoolNum)
      
      
      if(student.studentId===this.studentId && student.schoolNum===LoginComponent.schoolNum){
        console.log(student.schoolNum)
      student.restricted=true;
      student.restrictedReason= this.restrictedReason;
      i++;
       this.studentService.updateStudent(student.id, student).subscribe(
         data=>{
           console.log(data);
         }
       );
}

}
if(i==0){
  window.alert("Student does not exist!");
}

  }
  

}
