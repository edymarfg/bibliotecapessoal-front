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

  /*pegaMenorPreco(livroDesejo: LivroDesejo): Loja {
    const preco = livroDesejo.lojas
      .map((l) => l.preco)
      .reduce((a, e) => (a < e ? a : e));
    const loja = livroDesejo.lojas.filter((l) => l.preco === preco);
    return loja;
  }*/
}
