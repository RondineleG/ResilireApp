import { RecuperarSenhaComponent  } from './recuperar-senha/forgot.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'criar-conta',
    component: CriarContaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recuperar-senha',
    component: RecuperarSenhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationPageRoutingModule {}
