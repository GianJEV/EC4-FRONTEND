import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Sede } from 'src/app/model/sede';
import { SedeService } from 'src/app/service/sede.service';
import { DialogComponentSede } from './dialog/dialog.component';
import { SedeModalComponent } from './sede-modal/sede-modal.component';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  displayedColumns = ["idSede", "sede", "acciones"];
  dataSource!: MatTableDataSource<Sede>;

  constructor(
    private sedeService: SedeService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
        this.sedeService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    //PARA ACTUALIZAR EN TIEMPO REAL
    this.sedeService.sedeActualizar.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  onEliminar(id: number){
    let dialogRef = this.dialog.open(DialogComponentSede,{
    });
    dialogRef.afterClosed().subscribe(estado =>{
      if (estado) {
        this.sedeService.eliminar(id).subscribe(()=>{
          this.sedeService.listar().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
     
    })
  }

  abrirModal(sede?: Sede){
    let sed = sede != null ? sede: new Sede();
    this.dialog.open(SedeModalComponent,{
      width: '15%',
      height: '16%',
      data: sed
    })
  }

}
