import { Loja } from './loja';
import { Livro } from './livro';
export interface LivroDesejo extends Livro {
  lojas: Loja[];
}
