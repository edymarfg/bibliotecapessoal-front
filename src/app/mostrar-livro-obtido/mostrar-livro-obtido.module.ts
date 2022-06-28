import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarLivroObtidoComponent } from './mostrar-livro-obtido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MostrarLivroObtidoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
})
export class MostrarLivroObtidoModule {}
