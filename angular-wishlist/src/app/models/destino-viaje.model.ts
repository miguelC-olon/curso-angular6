//import {v4 as uuid} from 'uuid'; //falta hacer npm install uuid

export class DestinoViaje {
    /*
    nombre: string;
    imageUrl: string;

    constructor(n:string, u: string) {
        this.nombre = n;
        this.imageUrl = u;
    }
    */
   //codigo resumido equivalente al anterior, con mejoras para manejar eventos
   private selected: boolean;

   public servicios: string[];
   //id = uuid();

   constructor(public nombre: string, public u: string) {
       this.servicios = ['pileta','desayuno'];
   }

   isSelected(): boolean{
       return this.selected;
   }
   setSelected(s: boolean) {
       this.selected = s;
   }
}