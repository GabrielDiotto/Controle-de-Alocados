import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { ClientesComponent } from './components/clientes/clientes/clientes.component';
import { AlocarComponent } from './components/alocar/alocar/alocar.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: HomeComponent
  },
  { path: 'login', 
    component: LoginComponent },
  { path: 'funcionarios', 
    component: FuncionariosComponent },
  { path: 'clientes', 
    component: ClientesComponent },
  { path: 'alocar', 
    component: AlocarComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
