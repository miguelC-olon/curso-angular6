import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-form-detino-viaje',
  templateUrl: './form-detino-viaje.component.html',
  styleUrls: ['./form-detino-viaje.component.css']
})
export class FormDetinoViajeComponent implements OnInit {

	@Output() onItemAdded: EventEmitter<DestinoViaje>;
	fg: FormGroup;
	
  constructor(fb: FormBuilder) { 
	this.onItemAdded = new EventEmitter();
	this.fg = fb.group({
		nombre: [''],
		url: ['']
	});
  }

  ngOnInit(): void {
  }

	guardar(nombre: string, url: string): boolean {
		const d = new DestinoViaje(nombre, url);
		this.onItemAdded.emit(d);
		return false;
	}
}
