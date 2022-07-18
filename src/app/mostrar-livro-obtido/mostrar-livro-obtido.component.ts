import { PagLidasModel } from './../model/pag-lidas-model';
import { LivroObtidoService } from './../service/livro-obtido.service';
import { LivroObtidoModel } from './../model/livro-obtido-model';
import { LivroObtido } from './../domain/livro-obtido';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormValidations } from '../validators/form-validations';

@Component({
  selector: 'app-mostrar-livro-obtido',
  templateUrl: './mostrar-livro-obtido.component.html',
  styleUrls: ['./mostrar-livro-obtido.component.scss'],
})
export class MostrarLivroObtidoComponent implements OnInit {
  idLivro: string = '';
  livro?: LivroObtidoModel;
  inscricao: Subscription = new Subscription();
  list: LivroObtidoModel[] = [];

  form: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    titulo: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
    ]),
    autor: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
    ]),
    paginas: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      FormValidations.numberValidator,
    ]),
    pagLidas: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      FormValidations.numberValidator,
    ]),
    ano: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      FormValidations.numberValidator,
    ]),
  });

  formAddPaginas: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    pagLidas: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      FormValidations.numberValidator,
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private livroObtidoService: LivroObtidoService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscricao = this.activateRoute.queryParams.subscribe(
      (queryParams: any) => {
        this.idLivro = queryParams['id'];
      }
    );
    this.buscaLivro();
  }

  buscaLivro() {
    this.livroObtidoService
      .consultarEspecifico(this.idLivro)
      .subscribe((domain: LivroObtidoModel) => {
        this.livro = domain;
        this.carregaDados(this.livro);
      });
  }

  carregaDados(livroObtido: LivroObtidoModel): void {
    this.form.controls['id'].setValue(livroObtido.id);
    this.form.controls['titulo'].setValue(livroObtido.titulo);
    this.form.controls['autor'].setValue(livroObtido.autor);
    this.form.controls['paginas'].setValue(livroObtido.paginas);
    this.form.controls['pagLidas'].setValue(livroObtido.pagLidas);
    this.form.controls['ano'].setValue(livroObtido.ano);
  }

  editar(): void {
    const id = this.idLivro;
    const livroObtidoModel: LivroObtidoModel = this.form.getRawValue();
    if (id) {
      this.livroObtidoService
        .editar(livroObtidoModel)
        .subscribe((domain: LivroObtidoModel) => {
          if (domain.id) {
            this.router.navigate(['/livro-obtido']);
            this.form.reset();
          }
        });
    }
  }

  excluir(): void {
    const id = this.idLivro;
    if (id) {
      this.livroObtidoService
        .excluir(this.idLivro)
        .subscribe((domain: LivroObtidoModel) => {
          if (domain.id) {
            this.router.navigate(['/livro-obtido']);
            this.form.reset();
          }
        });
    }
  }

  addPaginas(): void {
    const id = this.idLivro;
    const pagLidasModel: PagLidasModel = this.formAddPaginas.getRawValue();
    if (id) {
      this.livroObtidoService
        .addPaginas(id, pagLidasModel)
        .subscribe((domain: LivroObtidoModel) => {
          this.router.navigate(['/livro-obtido']);
          this.formAddPaginas.reset();
          this.carregaDados(domain);
        });
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
