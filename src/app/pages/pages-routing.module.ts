import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from'./home/home.component';
import { ReconocimientoagenciaComponent } from './reconocimientoagencia/reconocimientoagencia.component';
import { ReclamoagenciaComponent } from './reclamoagencia/reclamoagencia.component';
import { NotificacionagenciaComponent } from './notificacionagencia/notificacionagencia.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // Rutas Global
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'reconocimiento',
      component: ReconocimientoagenciaComponent,
    },
    {
      path: 'reclamo',
      component: ReclamoagenciaComponent,
    },
    {
      path: 'notificacion',
      component: NotificacionagenciaComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule {

  holaMundo () {

  }



}
