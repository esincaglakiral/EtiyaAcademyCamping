import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'etiya-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  testAuth(){
    this.authService.test().subscribe(response =>{
      console.log(response)
    })
  }

  isLoggedIn(){
    return this.authService.isAuthhenticated
  }

  logOut(){
    this.authService.logOut()
  }

}
