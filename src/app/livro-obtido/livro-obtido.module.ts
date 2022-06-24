import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroObtidoComponent } from './livro-obtido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LivroObtidoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class LivroObtidoModule {}
