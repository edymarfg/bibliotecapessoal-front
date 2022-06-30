import { LojaModel } from './../model/loja-model';
import { LivroObtido } from './../domain/livro-obtido';
import { LivroDesejoService } from './../service/livro-desejo.service';
import { LivroDesejoModel } from './../model/livro-desejo-model';
import { LivroDesejo } from './../domain/livro-desejo';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormValidations } from '../validators/form-validations';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mostrar-livro-desejo',
  templateUrl: './mostrar-livro-desejo.component.html',
  styleUrls: ['./mostrar-livro-desejo.component.scss'],
})
export class MostrarLivroDesejoComponent implements OnInit {
  idLivro: string = '';
  livro?: LivroDesejo;
  inscricao: Subscription = new Subscription();
  list: LivroDesejo[] = [];

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
      FormValidations.numberValidator,
    ]),
    ano: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      FormValidations.numberValidator,
    ]),
  });

  formAddLoja: FormGroup = this.formBuilder.group({
    idLivroDesejo: new FormControl('', [Validators.required]),
    preco: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      FormValidations.noLetterValidator,
    ]),
    nome: new FormControl(null, [Validators.required, Validators.minLength(1)]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private livroDesejoService: LivroDesejoService,
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
    this.livroDesejoService
      .consultarEspecifico(this.idLivro)
      .subscribe((domain: LivroDesejo) => {
        this.livro = domain;
        this.carregaDados(this.livro);
      });
  }

  carregaDados(livroObtido: LivroDesejo): void {
    this.form.controls['id'].setValue(livroObtido.id);
    this.form.controls['titulo'].setValue(livroObtido.titulo);
    this.form.controls['autor'].setValue(livroObtido.autor);
    this.form.controls['paginas'].setValue(livroObtido.paginas);
    this.form.controls['ano'].setValue(livroObtido.ano);
  }

  editar(): void {
    const id = this.idLivro;
    const livroDesejoModel: LivroDesejoModel = this.form.getRawValue();
    if (id) {
      this.livroDesejoService
        .editar(id, livroDesejoModel)
        .subscribe((domain: LivroDesejo) => {
          if (domain.id) {
            this.router.navigate(['/livro-obtido']);
            this.form.reset();
          }
        });
    }
  }

  clickAddLoja(): void {
    const id = this.idLivro;
    this.formAddLoja.controls['idLivroDesejo'].setValue(id);
  }

  addLoja() {
    const lojaModel: LojaModel = this.formAddLoja.getRawValue();
    const id = this.idLivro;
    if (id) {
      this.livroDesejoService.adicionarLoja(id, lojaModel).subscribe(() => {
        this.resetForm();
      });
    }
  }

  addLivrosObtidos(): void {
    const id = this.idLivro;
    if (id) {
      this.livroDesejoService
        .livroObtido(id)
        .subscribe((domain: LivroObtido) => {
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
      this.livroDesejoService
        .excluir(this.idLivro)
        .subscribe((domain: LivroDesejo) => {
          if (domain.id) {
            this.router.navigate(['/livro-obtido']);
            this.form.reset();
          }
        });
    }
  }

  resetForm(): void {
    this.formAddLoja.reset();
    this.formAddLoja.controls['idLivroDesejo'].setValue('');
    this.buscaLivro();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
