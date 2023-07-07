import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conta } from 'src/app/shared/model/conta';
import { Usuario } from 'src/app/shared/model/usuario';
import { ContaService } from 'src/app/shared/services/conta.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit{
  usuarioOrigem: Usuario;
  contaOrigem: Conta;
  contaDestino: Conta;
  inputQuantia: string= '0';

  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private contaService: ContaService){
    this.usuarioOrigem = new Usuario();
    this.contaOrigem = new Conta();
    this.contaDestino = new Conta();
  }

  ngOnInit(): void {
    const idUsuario = this.rotaAtual.parent?.snapshot.paramMap.get('id');
    if (idUsuario) {
      this.usuarioService.pesquisarPorId(parseInt(idUsuario)).subscribe(
        usuario => {
          this.usuarioOrigem = usuario
          this.contaService.findByCpf(this.usuarioOrigem.cpf).subscribe(conta=> this.contaOrigem = conta)
        }
      )
    }
  }

  transferir() {
    this.contaService.findByCpf(this.contaDestino.cpf).subscribe(conta => {
      this.contaDestino = conta

      console.log(this.contaOrigem)
      console.log(this.contaDestino)
      this.contaService.transferir(this.contaOrigem, this.contaDestino, parseFloat(this.inputQuantia)).subscribe(
        contasAtualizadas => {
          this.contaOrigem = contasAtualizadas[0];
          this.contaDestino = contasAtualizadas[1];
        }
      )
    })
  }
}

