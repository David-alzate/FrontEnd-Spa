import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../services/clientes/clientes.service';
import { GeneroService } from '../services/genero/genero.service';
import { TipoIdentificacionService } from '../services/tipoIdentificacion/tipo-identificacion.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  clienteForm: FormGroup;
  genero: any;
  tipoIdentificacion: any;
  cliente: any;

  constructor(
    public fb: FormBuilder,
    public clienteService: ClientesService,
    public generoService: GeneroService,
    public tipoIdentificacionService: TipoIdentificacionService
  ){
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
      tipoIdentificacion: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      numeroTelefonico: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      password: ['', Validators.required],
  });

}

ngOnInit(): void {

}


guardarCliente(): void {
  this.clienteService.saveCliente(this.clienteForm.value).subscribe(
    resp => {
      alert(resp.mensajes[0]);
      this.clienteForm.reset();
      this.cliente.push(resp);
      console.log(resp);
    },
    error => {
      console.error(error);
      alert(error.error.mensajes[0]);
    }
  );
}

}