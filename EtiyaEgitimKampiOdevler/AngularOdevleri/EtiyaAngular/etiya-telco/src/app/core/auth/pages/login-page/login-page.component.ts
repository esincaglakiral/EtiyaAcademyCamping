import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userLoginForm!: FormGroup;
  
  constructor( private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.createNewLoginForm();
  }

  createNewLoginForm() {
    this.userLoginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
    });
  }

  login() {
    this.authService.login(this.userLoginForm.value).subscribe((response) => {
      console.log(response);
      if (response.success) {
        this.authService.saveToken(response);
        
      }
    });
  }

}
