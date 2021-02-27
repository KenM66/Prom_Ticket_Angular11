import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ) { }

  ngOnInit(): void {
    //this.isUserLoggedIn= this.hardCodedAuthenticationService.isUserLoggedIn();
    var schoolNum= localStorage.getItem("schoolStringNumKey");
    var schoolNumber= Number(schoolNum);
    LoginComponent.schoolNum= schoolNumber;
  }

}
