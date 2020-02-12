import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mimodelo } from '../modelos/mimodelo';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getLogin(usuario: Mimodelo): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/login', usuario);
  }

  crearUsuario(usuario: Mimodelo): Observable<any> {
    console.log(usuario);
    return this.http.post('http://localhost:3000/usuarios', usuario);
  }

  logIn() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

}

