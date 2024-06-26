import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_SERVER = "http://localhost:8080/api/v1/login/"

  constructor(private httpCliente: HttpClient) { }

  public loguear(datos: any): Observable<any> {
    return this.httpCliente.post(this.API_SERVER, datos);
  }
}
