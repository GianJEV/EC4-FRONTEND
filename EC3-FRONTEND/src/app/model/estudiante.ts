import { Carrera } from "./carrera";
import { Sede } from "./sede";

export class Estudiante {
    idEstudiante: number | undefined;
    dni: string | undefined;
    nombres: string | undefined;
    apellidos: string | undefined;
    direccion: string | undefined;
    email: string | undefined;
    numero: string | undefined;
    ciclo: string | undefined;
    sede: Sede = new Sede;
    carrera: Carrera = new Carrera;
}