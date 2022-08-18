import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sede } from 'src/app/model/sede';
import { SedeService } from 'src/app/service/sede.service';

@Component({
  selector: 'app-sede-modal',
  templateUrl: './sede-modal.component.html',
  styleUrls: ['./sede-modal.component.css']
})
export class SedeModalComponent implements OnInit {

  sede!: Sede;

  constructor(
    private dialogRef: MatDialogRef<SedeModalComponent>,
    private sedeService: SedeService,
    @Inject(MAT_DIALOG_DATA) private data: Sede
  ) { }

  ngOnInit(): void {
    this.sede = new Sede();
    this.sede.idSede=this.data.idSede;
    this.sede.sede=this.data.sede;
  }

  modificar(){
    if (this.sede != null && this.sede.idSede != 0) {
      this.sedeService.editar(this.sede).subscribe(()=>{
        return this.sedeService.listar().subscribe(data=>{
          this.sedeService.sedeActualizar.next(data);
        })
      });
    }else{
      this.sedeService.registrar(this.sede).subscribe(()=>{
        this.sedeService.listar().subscribe(data=>{
          this.sedeService.sedeActualizar.next(data);
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
