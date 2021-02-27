
import { Component, NgModule, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { StudentDataService } from '../service/student-data.service';
import { Student } from '../Student';



@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})

export class ListStudentsComponent implements OnInit {
  students: Student[]|any;
  sortedData: Student[] | any;
  message: string |undefined
  constructor(
    private studentService: StudentDataService,
    private router: Router,
    
  ) { 
    this.studentService.retrieveStudentsBySchoolNum(LoginComponent.schoolNum).subscribe(
            response =>{
        this.students=response;
        console.log(this.students);
        this.sortedData= this.students.slice();
      }
    )
    
    
  }
  ngOnInit(): void {
    this.refreshStudents();
    var schoolNum= localStorage.getItem("schoolStringNumKey");
    var schoolNumber= Number(schoolNum);
    LoginComponent.schoolNum= schoolNumber;
  }

  
    
    
 
 refreshStudents(){
    this.studentService.retrieveStudentsBySchoolNum(LoginComponent.schoolNum).subscribe(
        response =>{
        console.log(this.students);
        this.students=response; 
        this.sortedData= this.students.slice();
      }
    )
  }
  updateStudent(id:number){

  }
  deleteStudent(id: number){
      this.studentService.deleteStudent(id).subscribe(
        response=>{
          console.log(response);
          this.message= 'Delete Successful!'
          this.refreshStudents();
          
        }
      )
      
  }
  
  sortData(sort: Sort){
    const data= this.students.slice();
    if(!sort.active || sort.direction==''){
      this.sortedData=data;
      return;
    }

    this.sortedData= data.sort((a: Student,b: Student) =>{
      let isAsc= sort.direction=='asc';
      switch(sort.active){
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        case 'lastName': return compare(a.lastName, b.lastName, isAsc);
        case "studentId": return compare(a.studentId, b.studentId, isAsc);
        case "ticketNumber": return compare(a.ticketNumber, b.ticketNumber, isAsc);
        case "status": return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    })
  }

}
function compare(a: string | number,b: string | number, isAsc: boolean){
  return (a<b?-1:1)*(isAsc?1:-1);
}