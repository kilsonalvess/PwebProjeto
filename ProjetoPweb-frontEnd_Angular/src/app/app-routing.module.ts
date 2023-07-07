import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { TelaDeLoginComponent } from './modules/login/tela-de-login/tela-de-login.component';
import { AlterarUsuarioComponent } from './modules/usuario/alterar-usuario/alterar-usuario.component';
import { CriarUsuarioComponent } from './modules/usuario/criar-usuario/criar-usuario.component';
import { ListarUsuarioComponent } from './modules/usuario/listar-usuario/listar-usuario.component';
import { ConversorMoedasComponent } from './conversor-moedas/conversor-moedas.component';
import { DepositarComponent } from './modules/conta/depositar/depositar.component';
import { TransferirComponent } from './modules/conta/transferir/transferir.component';
import { SacarComponent } from './modules/conta/sacar/sacar.component';

const routes: Routes = [
  {
    path: '',
    component: TelaDeLoginComponent
  },
  {
    path: 'criar-usuario',
    component: CriarUsuarioComponent
  },
  {
    path: 'menu/:id',
    component: MenuComponent,
    children: [
      {
        path: 'ver-perfil',
        component: ListarUsuarioComponent
      },
      {
        path: 'alterar-usuario',
        component: AlterarUsuarioComponent
      },
      {
        path : 'conversor-moedas',
        component: ConversorMoedasComponent
      },
      {
        path: 'depositar',
        component: DepositarComponent
      },
      {
        path: 'transferir',
        component: TransferirComponent
      },
      {
        path: 'sacar',
        component: SacarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
