import { Injectable } from '@angular/core';
import Alocados from '../../model/alocados';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
const baseUrl = environment.endpointApi;

@Injectable({
  providedIn: 'root'
})
export class AlocarService {
  endPointFuncionario = 'alocados';
  constructor(private http: HttpClient) { }

  getAlocados (): Observable<Alocados[]> {
    return this.http.get<Alocados[]>(baseUrl + '/' + this.endPointFuncionario);
  }
}