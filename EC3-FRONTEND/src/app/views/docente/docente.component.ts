import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Docente } from 'src/app/model/docente';
import { DocenteService } from 'src/app/service/docente.service';
import { DialogComponentDocente } from './dialog/dialog.component';
import { DocenteModalComponent } from './docente-modal/docente-modal.component';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  displayedColumns = ["idDocente", "nombres", "apellidos", "email", "numero", "sede", "acciones"];
  dataSource!: MatTableDataSource<Docente>;

  //Metodo sin Angular Material y con una tabla normal
  //docente: Docente[] | undefined;

  constructor(
    private docenteService: DocenteService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.docenteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.docenteService.docenteActualizar.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  onEliminar(id: number){
    let dialogRef = this.dialog.open(DialogComponentDocente,{
    });
    dialogRef.afterClosed().subscribe(estado =>{
      if (estado) {
        this.docenteService.eliminar(id).subscribe(()=>{
          this.docenteService.listar().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
     
    })
  }

  abrirModal(docente?: Docente){
    let doc = docente != null ? docente: new Docente();
    this.dialog.open(DocenteModalComponent,{
      width: '25%',
      height: '30%',
      data: doc
    })
  }

}
