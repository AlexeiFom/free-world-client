import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IForgotPassword } from '@app/shared/interfaces/auth/iforgot-password';
import { LoaderService } from '@app/shared/services/loader.service';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(
    private authService: AuthService,
    private loaderService: LoaderService,
  ) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('',
        [
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.required
        ])
    });
  }

  get email() { return this.forgotPasswordForm.get('email'); }

  resetPassword() {
    //this.loaderService.show();

    this.authService.resetPassword(this.forgotPasswordForm.controls['email'].value)
      .subscribe(data => {
        debugger
      },
        error => {
          debugger
        })
  }
}
