import { ContaService } from './../../../shared/services/conta.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Conta } from 'src/app/shared/model/conta';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  usuario: Usuario;
  usuarios: Usuario[] = [];
  conta: Conta;
  contas: Conta[] = [];

  constructor(private usuarioService: UsuarioService, private contaService: ContaService, private rotaAtual: ActivatedRoute, private router: Router) {
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
    this.contaService.listar().subscribe(contas => this.contas = contas)
    this.usuarioService.listar().subscribe(usuarios => this.usuarios = usuarios)
  }

  btnAlterar(){
    this.router.navigate(['alterar-usuario'], { relativeTo: this.rotaAtual.parent });
  }

  btnRemover(){
    if(this.usuario.id) {
      this.usuarioService.apagar(parseInt(this.usuario.id)).subscribe(
        usuarioRemovido => {
          const indx = this.usuarios.findIndex(usuario =>
            usuario.id === this.usuario.id);
          this.usuarios.splice(indx, 1);
        }
      )
    }

    if (this.conta.id) {
      this.contaService.apagar(parseInt(this.conta.id)).subscribe(
        contaRemovida => {
          const indx = this.contas.findIndex(conta =>
            conta.id === this.conta.id);
          this.contas.splice(indx, 1);
        }
      )
    }
    this.router.navigate(['/'])
  }
}
