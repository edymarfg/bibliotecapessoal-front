import { LivroObtidoModel } from './../model/livro-obtido-model';
import { LivroObtido } from './../domain/livro-obtido';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mostrar-livro-obtido',
  templateUrl: './mostrar-livro-obtido.component.html',
  styleUrls: ['./mostrar-livro-obtido.component.scss'],
})
export class MostrarLivroObtidoComponent implements OnInit {
  idLivro: string = '';
  livro?: LivroObtido;
  inscricao: Subscription = new Subscription;
  list: LivroObtido[] = [];  

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
    ]),
    pagLidas: new FormControl(null, [Validators.required]),
    ano: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.idLivro = queryParams['id'];
      }
    )
    this.buscaLivro();
  }

  buscaLivro(){
    this.get(this.idLivro).subscribe((domain: LivroObtido) => {
      this.livro = domain;
      this.carregaDados(this.livro);
    });    
  }
  
  carregaDados(livroObtido: LivroObtido): void{
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
      this.put(id, livroObtidoModel).subscribe((domain: LivroObtido) => {
        if (domain.id) {
          this.form.reset();
        }
      });
    }
  }

  excluir(): void{
    const id = this.idLivro;
    if (id) {
      this.delete(this.idLivro).subscribe((domain: LivroObtido) => {
        if (domain.id) {
          this.form.reset();
        }
      });
    }    
  }

  private delete(id: string): Observable<LivroObtido> {
    const url = 'http://localhost:8080/livro-obtido/excluir/' + id;
    return this.http.delete<LivroObtido>(url);
  }

  private put(id: string, model: LivroObtidoModel): Observable<LivroObtido> {
    const url = 'http://localhost:8080/livro-obtido/editar/' + id;
    return this.http.put<LivroObtido>(url, model);
  }

  private get(id: string): Observable<LivroObtido> {
    const url = 'http://localhost:8080/livro-obtido/consultar/' + id;
    return this.http.get<LivroObtido>(url);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
