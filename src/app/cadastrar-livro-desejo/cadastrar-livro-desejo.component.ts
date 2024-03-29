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
import { Router } from '@angular/router';

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
      FormValidations.numberValidator.prototype(),
    ]),
    ano: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      FormValidations.numberValidator.prototype(),
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private livroDesejoService: LivroDesejoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    const livroDesejoModel: LivroDesejoModel = this.form.getRawValue();

    this.livroDesejoService
      .cadastrar(livroDesejoModel)
      .subscribe((domain: LivroDesejoModel) => {
        if (domain.id) {
          this.form.reset();
          this.router.navigate(['/livro-desejo']);
        }
      });
  }
}
