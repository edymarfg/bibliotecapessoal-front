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
      Validators.minLength(2),
    ]),
    paglidas: new FormControl(null, [Validators.required]),
    ano: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
