import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Carrera } from '../model/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  carreraActualizar = new Subject<Carrera[]>();

  private url: string = "http://localhost:8080/carrera"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Carrera[]>(this.url)
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(carrera:Carrera){
    return this.http.put(this.url, carrera)
  }

  registrar(carrera:Carrera){
    return this.http.post(this.url, carrera)
  }
}
