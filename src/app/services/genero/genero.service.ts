import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private API_SERVER = "http://localhost:8080/api/v1/generos/"

  constructor(private httpCliente: HttpClient) { }

  public getAllGeneros(): Observable<any> {
    return this.httpCliente.get(this.API_SERVER);
  }

}
