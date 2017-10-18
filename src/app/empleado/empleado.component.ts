import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html',

})

export class EmpleadoComponent {
    public titulo = 'Empleado componente';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo: boolean;
    public color: string;
    public color_seleccionado: string;
    constructor()
    {
        this.empleado = new Empleado('Jose', 35, 'Cocinero', false);
        this.trabajadores = [
            new Empleado('Pedro', 20, 'Albañin', true),
            new Empleado('Heimar', 35, 'Raquitecto', true),
            new Empleado('Maria', 35, 'Gerente', true)
        ];
        this.trabajador_externo = false;
        this.color = 'green';
        this.color_seleccionado = '#ccc';
    }
    ngOnInit() {
         console.log(this.empleado);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
    logColorSeleccionado() {
        console.log(this.color_seleccionado);
    }
}
