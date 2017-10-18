import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Papaya, Pera, Manzana';
    constructor() {
        console.log('Esta es una prueba');
    }
    ngOnInit() {
        this.nombre_componente = 'Despues del ngOnInit';
    }
}

