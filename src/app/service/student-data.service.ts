import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Student } from '../Student';


@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(
    private http: HttpClient
  ) { }

   createStudent(student: Student){
    console.log(student.lastName);
    return this.http.post(
      'http://localhost:9191/addStudent', student
    )
    
  }
    retrieveAllStudents(){
      return this.http.get('http://localhost:9191/students');
    }

    updateStudent(id: number, value:any): Observable<Object>{
      return this.http.put(`http://localhost:9191/updateStudent/${id}`, value);
    }
    retrieveStudentsBySchoolNum(id:number){
      return this.http.get(`http://localhost:9191/studentsBySchoolNum/${id}`);

    }
    deleteStudent(id:number){
      return this.http.delete(`http://localhost:9191/deleteStudent/${id}`,{responseType: 
    'text'})
    }

}