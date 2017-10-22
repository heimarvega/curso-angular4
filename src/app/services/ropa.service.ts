import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
    public nombrePrenda = 'Pantalones Vaqueros';
    public coleccion_ropa = ['Pantalones', 'Camisa', 'Saco'];
    prueba(nombrePrenda): string {
        return nombrePrenda;
    }
    addRopa(nombre_prenda: string): Array<string> {
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }
    getRopa(): Array<string> {
        return this.coleccion_ropa;
    }
    deleteRopa(index: number): Array<string> {
        this.coleccion_ropa.splice(index, 1);
        return this.getRopa();
    }
}
