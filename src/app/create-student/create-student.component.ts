import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { School } from '../School';
import { StudentDataService } from '../service/student-data.service';
import { Student } from '../Student';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student:Student= new Student();
  school: School= new School();

 
  

  constructor(
    private studentService: StudentDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    var schoolNum= localStorage.getItem("schoolStringNumKey");
    var schoolNumber= Number(schoolNum);
    LoginComponent.schoolNum= schoolNumber;
    console.log(LoginComponent.schoolNum);

  }

  public onSubmit(){
    
    this.school.id= LoginComponent.schoolNum;
    this.student.school= this.school;
    this.student.schoolNum= this.school.id;
    this.student.status= "Not Purchased";
    this.studentService.createStudent(this.student).subscribe(
      data => (console.log(data))
    );
    console.log(this.student.firstName);
    console.log(this.student.school);
    this.router.navigateByUrl('/newstudent');
  }

}