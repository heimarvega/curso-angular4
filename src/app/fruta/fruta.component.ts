import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Papaya, Pera, Manzana';

    public nombre:string = 'David';
    public edad:number = 24;
    public mayorDeEdad: boolean = true;
    public trabajos: Array<any> = ['Carpintero', 25, 'Ingeniero'];
    constructor() {
        console.log('Este es el valor en el constructor' + this.nombre_componente);
    }
    ngOnInit() {   }
}

