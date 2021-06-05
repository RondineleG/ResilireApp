import { ProntuarioComponent } from './prontuario/prontuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children: [
      {
        path: 'perfil',
        component: PerfilComponent,
        data: {
          title: 'Perfil'
        }
      },
      {
        path: 'prontuario',
        component: ProntuarioComponent,
        data: {
          title: 'Prontuario'
        }
      },
      {
        path: 'consulta',
        component: ConsultaComponent,
        data: {
          title: 'Consultas'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
