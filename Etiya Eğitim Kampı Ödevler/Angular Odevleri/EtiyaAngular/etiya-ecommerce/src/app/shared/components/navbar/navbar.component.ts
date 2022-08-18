import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'etiya-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logOut() {
    this.authService.logOut();
  }
}
