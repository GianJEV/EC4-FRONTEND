import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//VISTA PRINCIPAL
import { EstudianteComponent } from './views/estudiante/estudiante.component';
import { DocenteComponent } from './views/docente/docente.component';
import { CarreraComponent } from './views/carrera/carrera.component';
import { SedeComponent } from './views/sede/sede.component';
//MODALES
import { DialogComponentEstudiante } from './views/estudiante/dialog/dialog.component';
import { DialogComponentDocente } from './views/docente/dialog/dialog.component';
import { DialogComponentSede } from './views/sede/dialog/dialog.component';
import { DialogComponentCarrera } from './views/carrera/dialog/dialog.component';

//RUTEOS
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//ANGULAR MATERIAL
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
//EDITAR
import { EstudianteModalComponent } from './views/estudiante/estudiante-modal/estudiante-modal.component';
import { DocenteModalComponent } from './views/docente/docente-modal/docente-modal.component';
import { CarreraModalComponent } from './views/carrera/carrera-modal/carrera-modal.component';
import { SedeModalComponent } from './views/sede/sede-modal/sede-modal.component';

const routes: Routes = [
  {path: 'carrera', component: CarreraComponent},
  {path: 'sede', component: SedeComponent},
  {path: 'docente', component: DocenteComponent},
  {path: 'estudiante', component: EstudianteComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    DocenteComponent,
    CarreraComponent,
    SedeComponent,
    DialogComponentEstudiante,
    DialogComponentDocente,
    DialogComponentSede,
    DialogComponentCarrera,
    EstudianteModalComponent,
    DocenteModalComponent,
    CarreraModalComponent,
    SedeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
