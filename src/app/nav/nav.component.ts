import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { UserAuth } from '../_model/userAuth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  userAuth: UserAuth = {
    username: '',
    password: ''
  };

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.userAuth).subscribe(
      next => {
        this.alertify.success('success');
      },
      error => {
        this.alertify.error('fail');
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    this.authService.logout();
    this.alertify.message('logged out');
  }
}
