import { Loja } from './../domain/loja';
import { LivroDesejoService } from './../service/livro-desejo.service';
import { LivroDesejo } from './../domain/livro-desejo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-desejo',
  templateUrl: './livro-desejo.component.html',
  styleUrls: ['./livro-desejo.component.scss'],
})
export class LivroDesejoComponent implements OnInit {
  list: LivroDesejo[] = [];

  constructor(private livroDesejoService: LivroDesejoService) {}

  ngOnInit(): void {
    this.carregaTabela();
  }

  private carregaTabela(): void {
    this.livroDesejoService.consultar().subscribe((domains: LivroDesejo[]) => {
      this.list = domains;
    });
  }
}
