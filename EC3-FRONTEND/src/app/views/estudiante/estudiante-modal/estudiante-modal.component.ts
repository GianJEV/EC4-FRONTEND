import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Carrera } from 'src/app/model/carrera';
import { Estudiante } from 'src/app/model/estudiante';
import { Sede } from 'src/app/model/sede';
import { CarreraService } from 'src/app/service/carrera.service';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { SedeService } from 'src/app/service/sede.service';

@Component({
  selector: 'app-estudiante-modal',
  templateUrl: './estudiante-modal.component.html',
  styleUrls: ['./estudiante-modal.component.css']
})
export class EstudianteModalComponent implements OnInit {

  estudiante!: Estudiante;
  carrera!: Carrera[];
  sede!: Sede[];

  constructor(
    private dialogRef: MatDialogRef<EstudianteModalComponent>,
    private estudianteService: EstudianteService,
    private carreraService: CarreraService,
    private sedeService: SedeService,
    @Inject(MAT_DIALOG_DATA) private data: Estudiante
  ) { }

  ngOnInit(): void {
    this.estudiante = new Estudiante();
    this.estudiante.idEstudiante=this.data.idEstudiante;
    this.estudiante.dni=this.data.dni;
    this.estudiante.nombres=this.data.nombres;
    this.estudiante.apellidos=this.data.apellidos;
    this.estudiante.direccion=this.data.direccion;
    this.estudiante.email=this.data.email;
    this.estudiante.numero=this.data.numero;
    this.estudiante.ciclo=this.data.ciclo;
    this.estudiante.sede=this.data.sede;
    this.estudiante.carrera=this.data.carrera;

    this.carreraService.listar().subscribe(data =>{
      this.carrera=data
    })

    this.sedeService.listar().subscribe(data =>{
      this.sede=data
    })
  }

  modificar(){
    if (this.estudiante != null && this.estudiante.idEstudiante != 0) {
      this.estudianteService.editar(this.estudiante).subscribe(()=>{
        return this.estudianteService.listar().subscribe(data=>{
          this.estudianteService.estudianteActualizar.next(data);
        })
      });
    }else{
      this.estudianteService.registrar(this.estudiante).subscribe(()=>{
        this.estudianteService.listar().subscribe(data=>{
          this.estudianteService.estudianteActualizar.next(data);
        })
      })
    }
    
    this.cancelar()
  }

  //cerrar ventana
  cancelar(){
    this.dialogRef.close();
  }

}
