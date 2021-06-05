import { ProntuarioComponent } from './prontuario/prontuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesPageRoutingModule } from './pages-routing.module';

import { PagesPage } from './pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PagesPageRoutingModule
  ],
  declarations: [
    PagesPage,
    ConsultaComponent,
    PerfilComponent,
    ProntuarioComponent
  ]
})
export class PagesPageModule { }
