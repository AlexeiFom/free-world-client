import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})

export class AuthModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}
