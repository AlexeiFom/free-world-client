import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthService } from '@app/shared/services/google-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  email: string;

  constructor(private router: Router, private googleAuthService: GoogleAuthService) {
    this.email = JSON.parse(localStorage.getItem('userInfo'))?.email;
  }


  logout() {
    localStorage.removeItem('userInfo');
    this.googleAuthService.signOut();

    this.router.navigate(['login']);
  }
}
