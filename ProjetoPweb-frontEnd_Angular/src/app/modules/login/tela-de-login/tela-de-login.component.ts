import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styleUrls: ['./tela-de-login.component.css']
})

export class TelaDeLoginComponent implements OnInit{
  usuario: Usuario;
  usuarios: Usuario[] = [];
  hide = true;
  constructor(private usuarioService: UsuarioService, private router: Router,private snackBar: MatSnackBar){
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  login(): void {
    if(this.autenticarUsuario()) {
      this.router.navigate(['/menu', this.usuario.id])
    } else {
      
      const SnackConfig = new MatSnackBarConfig ();
      SnackConfig.politeness = 'assertive';
      SnackConfig.duration = 5000;
      SnackConfig.panelClass = ['success'];


      this.snackBar.open('Dados Incorretos!', 'X',SnackConfig);
    }
  }

  autenticarUsuario(): boolean {
    for(let usuario of this.usuarios) {
      if(this.usuario.username === usuario.username && this.usuario.password === usuario.password) {
        this.usuario = usuario;
        return true;
      }
    }
    return false;
  }
}
