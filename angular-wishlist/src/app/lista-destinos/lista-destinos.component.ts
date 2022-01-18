import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { DestinosApiClient } from './../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

	//destinos: DestinoViaje[];
	@Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
	
  constructor(public destinosApiClient:DestinosApiClient) { 
	//this.destinos = [];
	this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }
  
  agregado(d: DestinoViaje) {
	  ////this.destinos.push(d);
    ////console.log(this.destinos);
	this.destinosApiClient.add(d); //no explicado ni implementado
	this.onItemAdded.emit(d);
	  
	  //return false; //para que recargue la pagina con el post del formulario
  }

  elegido(d: DestinoViaje){
    //this.destinos.forEach( function(x) {x.setSelected(false);});
    //d.setSelected(true);
    
    //this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    //d.setSelected(true);
    this.destinosApiClient.elegir(d);
  }

}
