import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AutenticacaoPageRoutingModule } from './autenticacao-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    CriarContaComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AutenticacaoPageRoutingModule
  ]
})
export class AutenticacaoPageModule {}
