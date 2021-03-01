import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReclamoagenciaComponent } from './reclamoagencia/reclamoagencia.component';
import { ReconocimientoagenciaComponent } from './reconocimientoagencia/reconocimientoagencia.component';
import { VerreclamoagenciaComponent } from './verreclamoagencia/verreclamoagencia.component';
import { VerreconocimientoagenciaComponent } from './verreconocimientoagencia/verreconocimientoagencia.component';
import { NotificacionagenciaComponent } from './notificacionagencia/notificacionagencia.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { HomealojamientoComponent } from './homealojamiento/homealojamiento.component';
import { HomerestauranteComponent } from './homerestaurante/homerestaurante.component';
import { NotificacionguiaComponent } from './notificacionguia/notificacionguia.component';
import { NotificacionrestauranteComponent } from './notificacionrestaurante/notificacionrestaurante.component';
import { ReclamoalojamientoComponent } from './reclamoalojamiento/reclamoalojamiento.component';
import { ReclamoguiaComponent } from './reclamoguia/reclamoguia.component';
import { ReclamorestauranteComponent } from './reclamorestaurante/reclamorestaurante.component';
import { HomeguiaComponent } from './homeguia/homeguia.component';
import { NotificacionalojamientoComponent } from './notificacionalojamiento/notificacionalojamiento.component';
import { ReconocimientoalojamientoComponent } from './reconocimientoalojamiento/reconocimientoalojamiento.component';
import { ReconocimientoguiaComponent } from './reconocimientoguia/reconocimientoguia.component';
import { ReconocimientorestauranteComponent } from './reconocimientorestaurante/reconocimientorestaurante.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    ReclamoagenciaComponent,
    ReconocimientoagenciaComponent,
    VerreclamoagenciaComponent,
    VerreconocimientoagenciaComponent,
    NotificacionagenciaComponent,
    PasswordresetComponent,
    HomealojamientoComponent,
    HomerestauranteComponent,
    HomealojamientoComponent,
    NotificacionguiaComponent,
    NotificacionrestauranteComponent,
    ReclamoalojamientoComponent,
    ReclamoguiaComponent,
    ReclamoagenciaComponent,
    ReclamorestauranteComponent,
    HomeguiaComponent,
    NotificacionalojamientoComponent,
    ReconocimientoalojamientoComponent,
    ReconocimientoguiaComponent,
    ReconocimientorestauranteComponent
  ],
})
export class PagesModule {
}
