import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

import { DepositarComponent } from './depositar/depositar.component';
import { TransferirComponent } from './transferir/transferir.component';
import { SacarComponent } from './sacar/sacar.component';

@NgModule({
  declarations: [
    DepositarComponent,
    TransferirComponent,
    SacarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    RouterLink,
    MatButtonModule,
    MatInputModule
  ]
})
export class ContaModule { }
