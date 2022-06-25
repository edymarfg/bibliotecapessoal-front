import { LivroObtido } from './../domain/livro-obtido';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-livro-obtido',
  templateUrl: './livro-obtido.component.html',
  styleUrls: ['./livro-obtido.component.scss'],
})
export class LivroObtidoComponent implements OnInit {
  list: LivroObtido[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.get().subscribe((domains: LivroObtido[]) => {
      this.list = domains;
    });
  }

  private get(): Observable<LivroObtido[]> {
    const url = 'http://localhost:8080/cliente/consultar';
    return this.http.get<LivroObtido[]>(url);
  }
}
