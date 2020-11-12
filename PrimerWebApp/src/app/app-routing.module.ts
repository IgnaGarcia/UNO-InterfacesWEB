import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ExtrasComponent } from './components/extras/extras.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  { path:'', component: InicioComponent },
  { path:'inicio', component: InicioComponent },
  { path:'sobre-mi', component: SobremiComponent },
  { path:'extras', component: ExtrasComponent },
  { path:'formulario', component: FormularioComponent },
  { path:'formulario/:nombre/:apellido', component: FormularioComponent },
  { path:'listado', component: ListadoComponent },
  { path:'usuarios', component: UsuariosComponent },
  { path:'**', component: InicioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}