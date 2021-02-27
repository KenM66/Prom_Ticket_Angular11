import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { School } from '../School';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  getSchoolByUserName(userName: string){
    return this.http.get(`http://localhost:9191/schoolById/${userName}`)
  }
  createNewSchool(school:School){
    return this.http.post('http://localhost:9191/addSchool', school)
  }
  errorHandler(){

  }
}