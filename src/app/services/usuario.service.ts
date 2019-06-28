import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosDto, UsuarioDto } from '../models/usuario';
import { Observable } from 'rxjs';
import { filter } from 'minimatch';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private  API_URL =  'https://reqres.in/api';

  constructor(public http: HttpClient) { }

  ObtenerUsuarios(page: number): Observable<UsuariosDto> {
    return this.http.get<UsuariosDto>(`${this.API_URL}/users?page=${page}&per_page=5`);
  }

  ObtenerUsuario(id: number): Observable<any> {
    return this.http.get<UsuarioDto>(`${this.API_URL}/users/${id}`);
  }
}


