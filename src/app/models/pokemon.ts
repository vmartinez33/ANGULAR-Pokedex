import { Movimiento } from "./movimiento";

export class Pokemon{
    constructor (
        public id: number,
        public nombre:string,
        public tipo1:string,
        public tipo2:string,
        public habilidades:Array<string>,
        public movimientos:Array<string>,
        public estadisticas:object
        ) {}
}