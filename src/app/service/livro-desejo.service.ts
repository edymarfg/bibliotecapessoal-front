import { LivroObtidoModel } from './../model/livro-obtido-model';
import { LojaModel } from './../model/loja-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivroDesejoModel } from '../model/livro-desejo-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LivroDesejoService {
  url = 'http://localhost:8080/livro-desejo/';

  constructor(private http: HttpClient) {}

  consultar(): Observable<LivroDesejoModel[]> {
    return this.http.get<LivroDesejoModel[]>(this.url + 'consultar');
  }

  consultarEspecifico(id: string): Observable<LivroDesejoModel> {
    return this.http.get<LivroDesejoModel>(this.url + 'consultar/' + id);
  }

  cadastrar(model: LivroDesejoModel): Observable<LivroDesejoModel> {
    return this.http.post<LivroDesejoModel>(this.url + 'cadastrar', model);
  }

  editar(model: LivroDesejoModel): Observable<LivroDesejoModel> {
    return this.http.put<LivroDesejoModel>(this.url + 'editar', model);
  }

  adicionarLoja(id: string, model: LojaModel): Observable<LivroDesejoModel> {
    return this.http.put<LivroDesejoModel>(
      this.url + 'adicionar-loja/' + id,
      model
    );
  }

  editarLoja(id: string, model: LojaModel): Observable<LivroDesejoModel> {
    return this.http.put<LivroDesejoModel>(
      this.url + 'modificar-loja/' + id,
      model
    );
  }

  excluirLoja(id: string, idLoja: string): Observable<LivroDesejoModel> {
    return this.http.delete<LivroDesejoModel>(
      this.url + 'excluir-loja/' + id + '/' + idLoja
    );
  }

  livroObtido(id: string): Observable<LivroObtidoModel> {
    return this.http.delete<LivroObtidoModel>(this.url + 'livro-obtido/' + id);
  }

  excluir(id: string): Observable<LivroDesejoModel> {
    return this.http.delete<LivroDesejoModel>(this.url + 'excluir/' + id);
  }
}
