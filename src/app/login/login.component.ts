import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from '../School';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication-service.service';

import { SchoolService } from '../service/school.service';

interface SchoolRecord {
  id: number;
  schoolName: string;
  userName: string;
  password: string;
  students: Array<School>; 
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
 static schoolNum: number
 static user: string
 static pass: string
   username= ''
   password = ''
   
  errorMessage= 'Invalid Credentials'
  invalidLogin= false;
  public schools: School[] = [];
  school:School =new School();
  constructor(public router: Router,
    private schoolService: SchoolService,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
   this.school=new School();
    
  }
  storeUserDetails(){
    
    this.schoolService.getSchoolByUserName(this.username)
      .subscribe(data=> {
        const school= data as SchoolRecord;
        LoginComponent.schoolNum=school.id;
        var schoolStringNum= LoginComponent.schoolNum.toString()
        localStorage.setItem("schoolStringNumKey", schoolStringNum);
        
        console.log(school.schoolName);
        this.school.userName= school.userName
        this.school.password= school.password
        console.log(this.school.userName)
        console.log(this.username)
        this.handleLogin();
       })
      


  }

  handleLogin(){
     if(this.username=== this.school.userName && this.password=== this.school.password){
      this.username= LoginComponent.user
      this.password= LoginComponent.pass
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      
      this.router.navigate(['/welcome'])
      this.invalidLogin= false}

    }
    else{
      this.invalidLogin= true
      console.log(this.school.userName)
    }

 

}
}