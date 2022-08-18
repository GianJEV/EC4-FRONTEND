import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Sede } from '../model/sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  sedeActualizar = new Subject<Sede[]>();

  private url: string = "http://localhost:8080/sede"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Sede[]>(this.url)
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(sede:Sede){
    return this.http.put(this.url, sede)
  }

  registrar(sede:Sede){
    return this.http.post(this.url, sede)
  }
}