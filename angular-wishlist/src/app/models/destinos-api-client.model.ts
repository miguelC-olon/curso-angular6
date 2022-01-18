import { BehaviorSubject, Subject } from 'rxjs';
import { DestinoViaje } from './destino-viaje.model';

export class DestinosApiClient {
	destinos: DestinoViaje[];
	current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(null);

	constructor() {
       this.destinos = [];
	}
	add(d:DestinoViaje){
	  this.destinos.push(d);
	}
	getAll(){
	  return this.destinos;
    }

	/*
	//falta modificar definicion de clase de DestinoViaje
	getById(id:string):DestinoViaje{
		return this.destinos.filter(function(d) {return d.id.toString() == id; })[0];
	}
	*/
	elegir(d: DestinoViaje) {
		this.destinos.forEach(x => x.setSelected(false));
		d.setSelected(true);
		this.current.next(d);
	}
	subscribeOnChange(fn) { //para que los demas se subscriban a las actualizaciones (observables)
		this.current.subscribe(fn);
	}
}
