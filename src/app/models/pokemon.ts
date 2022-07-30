import { Movimiento } from "./movimiento";
import { Stats } from "./stats";

export class Pokemon{
    constructor (
        public id: number,
        public nombre:string,
        public tipo1:string,
        public tipo2:string|null,
        public habilidades:Array<string>,
        public movimientos:Array<string>,
        public estadisticas:any
        ) {}
}