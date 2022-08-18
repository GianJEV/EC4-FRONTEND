import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Docente } from '../model/docente';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  docenteActualizar = new Subject<Docente[]>();

  private url: string = "http://localhost:8080/docente"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Docente[]>(this.url)
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(docente:Docente){
    return this.http.put(this.url, docente)
  }

  registrar(docente:Docente){
    return this.http.post(this.url, docente)
  }
}
