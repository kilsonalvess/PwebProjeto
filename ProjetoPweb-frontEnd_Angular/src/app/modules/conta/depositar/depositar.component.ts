import { ContaService } from './../../../shared/services/conta.service';
import { UsuarioService } from './../../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conta } from 'src/app/shared/model/conta';
import { Usuario } from 'src/app/shared/model/usuario';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';


@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit{
  usuario: Usuario;
  conta: Conta;
  inputQuantia: string= '0';

  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private contaService: ContaService,private snackBar: MatSnackBar){
    this.usuario = new Usuario();
    this.conta = new Conta();
  }

  ngOnInit(): void {
    const idUsuario = this.rotaAtual.parent?.snapshot.paramMap.get('id');
    if (idUsuario) {
      this.usuarioService.pesquisarPorId(parseInt(idUsuario)).subscribe(
        usuario => {
          this.usuario = usuario
          this.contaService.findByCpf(this.usuario.cpf).subscribe(conta=> this.conta = conta)
        }
      )
    }
  }

  depositar() {
    this.contaService.depositar(this.conta, parseFloat(this.inputQuantia)).subscribe(
      contaAtualizada => this.conta = contaAtualizada
    )

    const SnackConfig = new MatSnackBarConfig ();
      SnackConfig.politeness = 'assertive';
      SnackConfig.duration = 5000;
      SnackConfig.panelClass = ['success'];


      this.snackBar.open('Deposito realizado com sucesso!', '',SnackConfig);
  }

  }



