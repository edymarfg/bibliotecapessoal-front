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

  consultar(): Observable<LivroObtidoModel[]> {
    return this.http.get<LivroObtidoModel[]>(this.url + 'consultar');
  }

  consultarEspecifico(id: string): Observable<LivroObtidoModel> {
    return this.http.get<LivroObtidoModel>(this.url + 'consultar/' + id);
  }

  cadastrar(model: LivroObtidoModel): Observable<LivroObtidoModel> {
    return this.http.post<LivroObtidoModel>(this.url + 'cadastrar', model);
  }

  editar(model: LivroObtidoModel): Observable<LivroObtidoModel> {
    return this.http.put<LivroObtidoModel>(this.url + 'editar', model);
  }

  addPaginas(id: string, model: PagLidasModel): Observable<LivroObtidoModel> {
    return this.http.put<LivroObtidoModel>(
      this.url + 'adicionar-paglidas/' + id,
      model
    );
  }

  excluir(id: string): Observable<LivroObtidoModel> {
    return this.http.delete<LivroObtidoModel>(this.url + 'excluir/' + id);
  }
}
