import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Funcionario from '../../model/funcionario';
import { environment } from '../../../environments/environment';

const baseUrl = environment.endpointApi;

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  endPointFuncionario = 'funcionario';

  constructor(private http: HttpClient) { }

  getFuncionarios (): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(baseUrl + '/' + this.endPointFuncionario);
  }
}