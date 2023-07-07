import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';


@NgModule({
  declarations: [
    TelaDeLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    MatIconModule
  ],
  exports: [
    TelaDeLoginComponent
  ]
})
export class LoginModule { }
