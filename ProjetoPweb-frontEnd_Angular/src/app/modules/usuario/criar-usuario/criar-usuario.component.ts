import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Conta } from 'src/app/shared/model/conta';
import { Usuario } from 'src/app/shared/model/usuario';
import { ContaService } from 'src/app/shared/services/conta.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})

export class CriarUsuarioComponent implements OnInit{
  usuario: Usuario;
  conta: Conta;
  usuarios: Usuario[] = [];
  contas: Conta[] = [];
  hide = true;

  constructor(private usuarioService: UsuarioService, private contaService: ContaService,private snackBar: MatSnackBar) {
    this.usuario = new Usuario();
    this.conta = new Conta();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
    this.contaService.listar().subscribe(
      contas => this.contas = contas
    );
  }

  criarUsuario(usuario: Usuario) {
    this.usuarioService.inserir(usuario).subscribe(
      novoUsuario => { 
        this.usuarios.push(novoUsuario)
        const SnackConfig = new MatSnackBarConfig ();
        SnackConfig.politeness = 'assertive';
        SnackConfig.duration = 5000;
        SnackConfig.panelClass = ['success'];


        this.snackBar.open('Usuario Cadastrado Com Sucesso', 'X',SnackConfig);

      }
    )
    this.conta.cpf = usuario.cpf;
    this.contaService.inserir(this.conta).subscribe(
      novaConta => this.contas.push(novaConta)
    )

    this.usuario = new Usuario();
    this.conta = new Conta();
  }
}
