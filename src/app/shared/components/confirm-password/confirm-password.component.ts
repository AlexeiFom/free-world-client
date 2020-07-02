import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '@app/shared/services/auth.service';
import { LoaderService } from '@app/shared/services/loader.service';
import { ComparePasswords } from '@app/shared/helpers/compare-passwords';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {
  confirmPasswordForm: FormGroup;

  constructor(
    private authService: AuthService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder,
  ) {
    //this.confirmPasswordForm = this.formBuilder.group({
    this.confirmPasswordForm = this.formBuilder.group({
      password: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      confirmPassword: ['',
        [
          Validators.required
        ]
      ]
    },
      {
        validator: ComparePasswords('password', 'confirmPassword')
      })
    //});

  }
  get getFormControls() { return this.confirmPasswordForm.controls; }

  ngOnInit(): void {
  }

  confirmResetPassword() {
    debugger
  }
}
