import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

import { AlterarUsuarioComponent } from './alterar-usuario/alterar-usuario.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';



@NgModule({
  declarations: [
    CriarUsuarioComponent,
    AlterarUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterLink,
    MatIconModule
  ],
  exports: [
    CriarUsuarioComponent
  ]
})
export class UsuarioModule { }
