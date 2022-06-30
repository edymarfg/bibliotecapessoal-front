import { FormValidations } from './../validators/form-validations';
import { LivroObtidoService } from './../service/livro-obtido.service';
import { LivroObtidoModel } from './../model/livro-obtido-model';
import { LivroObtido } from './../domain/livro-obtido';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
      FormValidations.numberValidator,
    ]),
    pagLidas: new FormControl(null, [
      Validators.required,
      FormValidations.numberValidator,
    ]),
    ano: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      FormValidations.numberValidator,
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private livroObtidoService: LivroObtidoService
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    const livroObtidoModel: LivroObtidoModel = this.form.getRawValue();
    this.livroObtidoService
      .cadastrar(livroObtidoModel)
      .subscribe((domain: LivroObtido) => {
        if (domain.id) {
          this.form.reset();
        }
      });
  }
}
