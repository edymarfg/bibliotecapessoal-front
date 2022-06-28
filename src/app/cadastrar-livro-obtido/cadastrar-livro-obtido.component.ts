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
import { LivroObtidoComponent } from '../livro-obtido/livro-obtido.component';

@Component({
  selector: 'app-cadastrar-livro-obtido',
  templateUrl: './cadastrar-livro-obtido.component.html',
  styleUrls: ['./cadastrar-livro-obtido.component.scss'],
})
export class CadastrarLivroObtidoComponent implements OnInit {
  list: LivroObtido[] = [];

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
    pagLidas: new FormControl(null, [Validators.required]),
    ano: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  cadastrar(): void {
    const livroObtidoModel: LivroObtidoModel = this.form.getRawValue();
    this.post(livroObtidoModel).subscribe((domain: LivroObtido) => {
      if (domain.id) {
        this.list.push(domain);
        this.form.reset();
      }
    });
  }

  private post(model: LivroObtidoModel): Observable<LivroObtido> {
    const url = 'http://localhost:8080/livro-obtido/cadastrar';
    return this.http.post<LivroObtido>(url, model);
  }
}
