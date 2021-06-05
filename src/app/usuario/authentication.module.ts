import { RecuperarSenhaComponent } from './recuperar-senha/forgot.component';
import { RegistrationComponent } from './criar-conta/criar-conta.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AuthenticationPageRoutingModule
  ]
})
export class AuthenticationPageModule {}
