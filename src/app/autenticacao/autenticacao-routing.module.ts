import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'recuperar-senha',
    component: RecuperarSenhaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'criar-conta',
    component: CriarContaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutenticacaoPageRoutingModule {}
