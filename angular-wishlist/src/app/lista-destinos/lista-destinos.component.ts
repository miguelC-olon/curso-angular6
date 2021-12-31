import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

	destinos: string[];
	
  constructor() { 
	this.destinos = ['Barranquilla','Lima','Buenos Aires','Barcelona'];
  }

  ngOnInit(): void {
  }
  
  guardar(nombre:string, url:string):boolean {
	  console.log(nombre);
	  console.log(url);
	  return false; //para que recargue la pagina con el post del formulario
  }

}
