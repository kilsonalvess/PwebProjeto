import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  URL_USUARIOS = 'http://localhost:8080/usuarios';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  pesquisarPorId(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  alterar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
  }

  apagar(id: number): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }
}
