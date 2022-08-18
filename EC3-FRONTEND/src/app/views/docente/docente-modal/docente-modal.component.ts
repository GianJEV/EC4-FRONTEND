import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Docente } from 'src/app/model/docente';
import { Sede } from 'src/app/model/sede';
import { DocenteService } from 'src/app/service/docente.service';
import { SedeService } from 'src/app/service/sede.service';

@Component({
  selector: 'app-docente-modal',
  templateUrl: './docente-modal.component.html',
  styleUrls: ['./docente-modal.component.css']
})
export class DocenteModalComponent implements OnInit {

  docente!: Docente;
  sede!: Sede[];

  constructor(
    private dialogRef: MatDialogRef<DocenteModalComponent>,
    private docenteService: DocenteService,
    private sedeService: SedeService,
    @Inject(MAT_DIALOG_DATA) private data: Docente
  ) { }

  ngOnInit(): void {
    this.docente = new Docente();
    this.docente.idDocente=this.data.idDocente;
    this.docente.nombres=this.data.nombres;
    this.docente.apellidos=this.data.apellidos;
    this.docente.email=this.data.email;
    this.docente.numero=this.data.numero;
    this.docente.sede=this.data.sede;

    this.sedeService.listar().subscribe(data =>{
      this.sede=data
    })
  }

  modificar(){
    if (this.docente != null && this.docente.idDocente != 0) {
      this.docenteService.editar(this.docente).subscribe(()=>{
        return this.docenteService.listar().subscribe(data=>{
          this.docenteService.docenteActualizar.next(data);
        })
      });
    }else{
      this.docenteService.registrar(this.docente).subscribe(()=>{
        this.docenteService.listar().subscribe(data=>{
          this.docenteService.docenteActualizar.next(data);
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
