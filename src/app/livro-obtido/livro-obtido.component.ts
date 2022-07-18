import { LivroObtidoService } from './../service/livro-obtido.service';
import { MostrarLivroObtidoComponent } from './../mostrar-livro-obtido/mostrar-livro-obtido.component';
import { LivroObtido } from './../domain/livro-obtido';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LivroObtidoModel } from '../model/livro-obtido-model';

@Component({
  selector: 'app-livro-obtido',
  templateUrl: './livro-obtido.component.html',
  styleUrls: ['./livro-obtido.component.scss'],
})
export class LivroObtidoComponent implements OnInit {
  list: LivroObtidoModel[] = [];

  constructor(private livroObtidoService: LivroObtidoService) {}

  ngOnInit(): void {
    this.carregaTabela();
  }

  private carregaTabela(): void {
    this.livroObtidoService
      .consultar()
      .subscribe((domains: LivroObtidoModel[]) => {
        this.list = domains;
      });
  }
}
