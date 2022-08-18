import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/model/estudiante';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { DialogComponentEstudiante } from './dialog/dialog.component';
import { EstudianteModalComponent } from './estudiante-modal/estudiante-modal.component';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  displayedColumns = ["idEstudiante", "dni", "nombres", "apellidos", "direccion", "email", "numero", "ciclo", "carrera", "sede", "acciones"];
  dataSource!: MatTableDataSource<Estudiante>;

  //Metodo sin Angular Material y con una tabla normal
  //estudiante: Estudiante[] | undefined;

  constructor(
    private estudianteService: EstudianteService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.estudianteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    //PARA ACTUALIZAR EN TIEMPO REAL
    this.estudianteService.estudianteActualizar.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  onEliminar(id: number){
    let dialogRef = this.dialog.open(DialogComponentEstudiante,{
    });
    dialogRef.afterClosed().subscribe(estado =>{
      if (estado) {
        this.estudianteService.eliminar(id).subscribe(()=>{
          this.estudianteService.listar().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
     
    })
  }

  abrirModal(estudiante?: Estudiante){
    let estud = estudiante != null ? estudiante: new Estudiante();
    this.dialog.open(EstudianteModalComponent,{
      width: '35%',
      height: '40%',
      data: estud
    })
  }

}
