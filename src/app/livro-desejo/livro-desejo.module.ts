import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroDesejoComponent } from './livro-desejo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LivroDesejoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class LivroDesejoModule {}
