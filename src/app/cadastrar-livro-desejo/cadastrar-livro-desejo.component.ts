import { LivroDesejo } from './../domain/livro-desejo';
import { LivroDesejoModel } from './../model/livro-desejo-model';
import { LivroDesejoService } from './../service/livro-desejo.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormValidations } from '../validators/form-validations';

@Component({
  selector: 'app-cadastrar-livro-desejo',
  templateUrl: './cadastrar-livro-desejo.component.html',
  styleUrls: ['./cadastrar-livro-desejo.component.scss'],
})
export class CadastrarLivroDesejoComponent implements OnInit {
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
    ano: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      FormValidations.numberValidator,
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private livroDesejoService: LivroDesejoService
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    const livroDesejoModel: LivroDesejoModel = this.form.getRawValue();
    this.livroDesejoService
      .cadastrar(livroDesejoModel)
      .subscribe((domain: LivroDesejo) => {
        if (domain.id) {
          this.form.reset();
        }
      });
  }
}
