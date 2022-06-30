import { MostrarLivroDesejoComponent } from './mostrar-livro-desejo/mostrar-livro-desejo.component';
import { LivroDesejoComponent } from './livro-desejo/livro-desejo.component';
import { MostrarLivroObtidoComponent } from './mostrar-livro-obtido/mostrar-livro-obtido.component';
import { CadastrarLivroObtidoComponent } from './cadastrar-livro-obtido/cadastrar-livro-obtido.component';
import { LivroObtidoComponent } from './livro-obtido/livro-obtido.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarLivroDesejoComponent } from './cadastrar-livro-desejo/cadastrar-livro-desejo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livro-obtido', component: LivroObtidoComponent },
  { path: 'cadastrar-livro-obtido', component: CadastrarLivroObtidoComponent },
  { path: 'mostrar-livro-obtido', component: MostrarLivroObtidoComponent },
  { path: 'livro-desejo', component: LivroDesejoComponent },
  { path: 'cadastrar-livro-desejo', component: CadastrarLivroDesejoComponent },
  { path: 'mostrar-livro-desejo', component: MostrarLivroDesejoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
