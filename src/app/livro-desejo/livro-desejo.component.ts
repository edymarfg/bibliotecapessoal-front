import { LivroDesejoModel } from './../model/livro-desejo-model';
import { LivroDesejoService } from './../service/livro-desejo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-desejo',
  templateUrl: './livro-desejo.component.html',
  styleUrls: ['./livro-desejo.component.scss'],
})
export class LivroDesejoComponent implements OnInit {
  list: LivroDesejoModel[] = [];

  constructor(private livroDesejoService: LivroDesejoService) {}

  ngOnInit(): void {
    this.carregaTabela();
  }

  private carregaTabela(): void {
    this.livroDesejoService
      .consultar()
      .subscribe((domains: LivroDesejoModel[]) => {
        this.list = domains;
      });
  }
}
