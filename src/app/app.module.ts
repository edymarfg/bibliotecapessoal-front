import { CadastrarLivroObtidoModule } from './cadastrar-livro-obtido/cadastrar-livro-obtido.module';
import { LivroObtidoModule } from './livro-obtido/livro-obtido.module';
import { LivroObtidoModel } from './model/livro-obtido-model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LivroObtidoModule,
    CadastrarLivroObtidoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
