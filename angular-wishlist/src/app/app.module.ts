import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { FormDetinoViajeComponent } from './form-detino-viaje/form-detino-viaje.component';
import { DestinosApiClient } from './models/destinos-api-client.model';
import { StoreModule as NgRxStoreModule, ActionReducerMap, Store } from '@ngrx/store';
import {
  DestinosViajesState,
  initializeDestinosViajesState,
  reducerDestinosViajes,
  DestinosViajesEffects,
  InitMyDataAction
} from './models/destinos-viajes-state.model';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: ListaDestinosComponent},
	{path: 'destino', component: DestinoDetalleComponent}
]
// redux init
export interface AppState {
  destinos: DestinosViajesState;
}

const reducers: ActionReducerMap<AppState> = {
  destinos: reducerDestinosViajes
};

@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDetinoViajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  FormsModule,
	  ReactiveFormsModule,
	  RouterModule.forRoot(routes)
  ],
  providers: [DestinosApiClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
