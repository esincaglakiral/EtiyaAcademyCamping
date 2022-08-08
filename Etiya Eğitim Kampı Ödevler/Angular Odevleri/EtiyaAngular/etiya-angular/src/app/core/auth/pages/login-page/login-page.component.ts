import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForLoginModel } from '../../models/userForLoginModel';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName:['', Validators.required],
      password:['', Validators.required]
    })
   
  }
  
  login(){
    const userForLoginModel: UserForLoginModel = {

      // userName: this.loginForm.get('userName')!.value,  //null değer olursa ünlem konulmalıdır 
      // password: this.loginForm.get('password')!.value

      ...this.loginForm.value

    }
    this.authService.login(userForLoginModel).subscribe(response =>{
      this.authService.saveAuth(response);
      this.toastrService.success("Your login process has been successful.")
      this.router.navigateByUrl('')


      console.log(this.authService.isAuthhenticated)
    })
      
  }

}
