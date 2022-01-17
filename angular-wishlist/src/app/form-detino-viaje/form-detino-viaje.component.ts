import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn} from '@angular/forms';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-detino-viaje.component.html',
  styleUrls: ['./form-detino-viaje.component.css']
})
export class FormDetinoViajeComponent implements OnInit {

	@Output() onItemAdded: EventEmitter<DestinoViaje>;
	fg: FormGroup;
	MinLongitud = 5;
	
  constructor(fb: FormBuilder) { 
	this.onItemAdded = new EventEmitter();
	this.fg = fb.group({
		nombre: ['', Validators.compose([
			this.nombreValidator,
			this.nombreValidatorParametrizable(this.MinLongitud)
		])],
		url: ['']
	});
	this.fg.valueChanges.subscribe((form: any) => {
		console.log('cambio el formulario: ', form);
	});
  }

  ngOnInit(): void {
  }

	guardar(nombre: string, url: string): boolean {
		const d = new DestinoViaje(nombre, url);
		this.onItemAdded.emit(d);
		return false;
	}

	nombreValidator(control: FormControl): { [s: string]: boolean} {
		const l =  control.value.toString().trim().length;
		if(l > 0 && l < 5){
			return {InvalidName: true}
		}
		return null;
	}
	nombreValidatorParametrizable(minLong: number): ValidatorFn {
		return(control: FormControl): { [s: string]: boolean} | null => {
			const l =  control.value.toString().trim().length;
			if(l > 0 && l < minLong){
				return {MinLongName: true}
			}
			return null;
		}
	}
}
