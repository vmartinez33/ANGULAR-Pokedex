export class Movimiento {
    constructor(
        public nombre:string,
        public tipo:string,
        public categoria:string,
        public potencia: string|null,
        public precision: number,
        public pp:number,
        public descripcion:string,
    ) {}
}