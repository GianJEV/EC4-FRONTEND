import { Sede } from "./sede";

export class Docente {
    idDocente: number | undefined;
    nombres:string | undefined;
    apellidos:string | undefined;
    email:string | undefined;
    numero:string | undefined;
    sede: Sede = new Sede;
}