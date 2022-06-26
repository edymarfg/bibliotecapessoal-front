import { LivroObtidoModule } from './../livro-obtido/livro-obtido.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarLivroObtidoComponent } from './cadastrar-livro-obtido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CadastrarLivroObtidoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class CadastrarLivroObtidoModule {}
