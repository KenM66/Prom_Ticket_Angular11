import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from '../School';
import { SchoolService } from '../service/school.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  schoolName: string='';
  
  password2: string='';
  school:School= new School();
  constructor(
    private SchoolService: SchoolService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    console.log(this.password2)
    if(this.school.password===this.password2){
      
    
    this.SchoolService.createNewSchool(this.school).subscribe(
      response=>{console.log(response);
      console.log(this.password2)
      
      }
    ) 
    
  }
    
  

  
  

    else{
      window.alert("Passwords must match!")
    }
  }

}
