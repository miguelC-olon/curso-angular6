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

   constructor(public nombre: string, public u: string) {}

   isSelected(): boolean{
       return this.selected;
   }
   setSelected(s: boolean) {
       this.selected = s;
   }
}