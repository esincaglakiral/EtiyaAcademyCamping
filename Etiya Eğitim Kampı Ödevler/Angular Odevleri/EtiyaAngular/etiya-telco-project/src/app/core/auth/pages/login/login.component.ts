import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
    });
  }
  
  login() {
    this.authService.login(this.loginForm.value).subscribe((response) => {
      console.log(response, new Date().toISOString());      
        this.authService.saveToken(response);
        setTimeout(() => {
          this.router.navigateByUrl('homepage')
        }, 1000);
       
      
    });
  }

}
