import {NgModule} from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  exports: [
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    { 
      provide: MAT_DIALOG_DEFAULT_OPTIONS, 
      useValue: {
        ...new MatDialogConfig(),
        disableClose: true ,
      } as MatDialogConfig
    },
  ],
})
export class MaterialModule { }
