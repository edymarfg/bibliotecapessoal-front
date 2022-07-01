import { ExcluiLojaModel } from './../model/exclui-loja-model';
import { ModificaLojaModel } from './../model/modifica-loja-model';
import { LojaModel } from './../model/loja-model';
import { LivroObtido } from './../domain/livro-obtido';
import { LivroDesejo } from './../domain/livro-desejo';
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

  consultar(): Observable<LivroDesejo[]> {
    return this.http.get<LivroDesejo[]>(this.url + 'consultar');
  }

  consultarEspecifico(id: string): Observable<LivroDesejo> {
    return this.http.get<LivroDesejo>(this.url + 'consultar/' + id);
  }

  cadastrar(model: LivroDesejoModel): Observable<LivroDesejo> {
    return this.http.post<LivroDesejo>(this.url + 'cadastrar', model);
  }

  editar(id: string, model: LivroDesejoModel): Observable<LivroDesejo> {
    return this.http.put<LivroDesejo>(this.url + 'editar/' + id, model);
  }

  adicionarLoja(id: string, model: LojaModel): Observable<LivroDesejo> {
    return this.http.put<LivroDesejo>(this.url + 'adicionar-loja/' + id, model);
  }

  editarLoja(id: string, model: ModificaLojaModel): Observable<LivroDesejo> {
    return this.http.put<LivroDesejo>(this.url + 'modificar-loja/' + id, model);
  }

  excluirLoja(id: string, idLoja: string): Observable<LivroDesejo> {
    return this.http.delete<LivroDesejo>(
      this.url + 'excluir-loja/' + id + '/' + idLoja
    );
  }

  livroObtido(id: string): Observable<LivroObtido> {
    return this.http.delete<LivroObtido>(this.url + 'livro-obtido/' + id);
  }

  excluir(id: string): Observable<LivroDesejo> {
    return this.http.delete<LivroDesejo>(this.url + 'excluir/' + id);
  }
}
