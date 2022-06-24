import { LivroObtidoModel } from './../model/livro-obtido-model';
import { LivroObtido } from './../domain/livro-obtido';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastrar-livro-obtido',
  templateUrl: './cadastrar-livro-obtido.component.html',
  styleUrls: ['./cadastrar-livro-obtido.component.scss'],
})
export class CadastrarLivroObtidoComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
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
    paglidas: new FormControl(null, [Validators.required]),
    ano: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  cadastrar(): void {
    const livroObtidoModel: LivroObtidoModel = this.form.getRawValue();
    this.post(livroObtidoModel);
  }

  private post(model: LivroObtidoModel): Observable<LivroObtidoModel> {
    const url = 'http://localhost:8080/cliente/cadastrar';
    return this.http.post<LivroObtido>(url, model);
  }
}
