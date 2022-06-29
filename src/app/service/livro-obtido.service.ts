import { PagLidasModel } from './../model/pag-lidas-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivroObtido } from '../domain/livro-obtido';
import { LivroObtidoModel } from '../model/livro-obtido-model';

@Injectable({
  providedIn: 'root',
})
export class LivroObtidoService {
  url = 'http://localhost:8080/livro-obtido/';

  constructor(private http: HttpClient) {}

  consultar(): Observable<LivroObtido[]> {
    return this.http.get<LivroObtido[]>(this.url + 'consultar');
  }

  consultarEspecifico(id: string): Observable<LivroObtido> {
    return this.http.get<LivroObtido>(this.url + 'consultar/' + id);
  }

  cadastrar(model: LivroObtidoModel): Observable<LivroObtido> {
    return this.http.post<LivroObtido>(this.url + 'cadastrar', model);
  }

  editar(id: string, model: LivroObtidoModel): Observable<LivroObtido> {
    return this.http.put<LivroObtido>(this.url + 'editar/' + id, model);
  }

  addPaginas(id: string, model: PagLidasModel): Observable<LivroObtido> {
    return this.http.put<LivroObtido>(
      this.url + 'adicionar-paglidas/' + id,
      model
    );
  }

  excluir(id: string): Observable<LivroObtido> {
    return this.http.delete<LivroObtido>(this.url + 'excluir/' + id);
  }
}
