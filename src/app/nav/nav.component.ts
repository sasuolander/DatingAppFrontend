import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UserModel } from '../model/userModel';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success('success');
      },
      error => {
        this.alertify.error('fail');
      }
    );
    console.log(this.model);
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    this.authService.logout();
    this.alertify.message('logged out');
  }
}
