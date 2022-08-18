import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponentDocente implements OnInit {

  constructor(
    public dialogref: MatDialogRef<Component>
  ) { }

  ngOnInit(): void {
  }

  onEliminar(){
    this.dialogref.close(true);
  }

  onCancelar(){
    this.dialogref.close(false);
  }
}
