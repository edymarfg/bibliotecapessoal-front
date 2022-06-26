import { LivroObtidoModel } from './../model/livro-obtido-model';
import { LivroObtido } from './../domain/livro-obtido';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mostrar-livro-obtido',
  templateUrl: './mostrar-livro-obtido.component.html',
  styleUrls: ['./mostrar-livro-obtido.component.scss'],
})
export class MostrarLivroObtidoComponent implements OnInit {
  static idLivro: string;
  list: LivroObtido[] = [];

  static pegaId(id: string) {
    this.idLivro = id;
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.list = [];
    this.get(MostrarLivroObtidoComponent.idLivro).subscribe(
      (domain: LivroObtido) => {
        this.list.push(domain);
      }
    );
  }

  editar(): void {}

  private put(id: string, model: LivroObtidoModel): Observable<LivroObtido> {
    const url = 'http://localhost:8080/livro-obtido/consultar/' + id;
    return this.http.put<LivroObtido>(url, model);
  }

  private get(id: string): Observable<LivroObtido> {
    const url = 'http://localhost:8080/livro-obtido/consultar/' + id;
    return this.http.get<LivroObtido>(url);
  }
}
