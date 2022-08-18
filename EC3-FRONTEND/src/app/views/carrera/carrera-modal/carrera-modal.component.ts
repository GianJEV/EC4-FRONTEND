import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Carrera } from 'src/app/model/carrera';
import { CarreraService } from 'src/app/service/carrera.service';
import { SedeService } from 'src/app/service/sede.service';

@Component({
  selector: 'app-carrera-modal',
  templateUrl: './carrera-modal.component.html',
  styleUrls: ['./carrera-modal.component.css']
})
export class CarreraModalComponent implements OnInit {

  carrera!: Carrera;

  constructor(
    private dialogRef: MatDialogRef<CarreraModalComponent>,
    private carreraService: CarreraService,
    private sedeService: SedeService,
    @Inject(MAT_DIALOG_DATA) private data: Carrera
  ) { }

  ngOnInit(): void {
    this.carrera = new Carrera();
    this.carrera.idCarrera=this.data.idCarrera;
    this.carrera.carrera=this.data.carrera;
  }

  modificar(){
    if (this.carrera != null && this.carrera.idCarrera != 0) {
      this.carreraService.editar(this.carrera).subscribe(()=>{
        return this.carreraService.listar().subscribe(data=>{
          this.carreraService.carreraActualizar.next(data);
        })
      });
    }else{
      this.carreraService.registrar(this.carrera).subscribe(()=>{
        this.carreraService.listar().subscribe(data=>{
          this.carreraService.carreraActualizar.next(data);
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
