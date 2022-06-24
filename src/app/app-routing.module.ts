import { CadastrarLivroObtidoComponent } from './cadastrar-livro-obtido/cadastrar-livro-obtido.component';
import { LivroObtidoComponent } from './livro-obtido/livro-obtido.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livro-obtido', component: LivroObtidoComponent },
  { path: 'cadastrar-livro-obtido', component: CadastrarLivroObtidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
