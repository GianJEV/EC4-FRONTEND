import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../model/estudiante';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  estudianteActualizar = new Subject<Estudiante[]>();

  private url: string = "http://localhost:8080/estudiante"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Estudiante[]>(this.url)
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(estudiante:Estudiante){
    return this.http.put(this.url, estudiante)
  }

  registrar(estudiante:Estudiante){
    return this.http.post(this.url, estudiante)
  }
}
