import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/registro-cliente', pathMatch: 'full' },
  { path: 'registro-cliente', component: RegistroClienteComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
