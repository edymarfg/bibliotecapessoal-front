import { LivroObtidoService } from './../service/livro-obtido.service';
import { MostrarLivroObtidoComponent } from './../mostrar-livro-obtido/mostrar-livro-obtido.component';
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

  constructor(private livroObtidoService: LivroObtidoService) {}

  ngOnInit(): void {
    this.carregaTabela();
  }

  private carregaTabela(): void {
    this.livroObtidoService.consultar().subscribe((domains: LivroObtido[]) => {
      this.list = domains;
    });
  }
}
