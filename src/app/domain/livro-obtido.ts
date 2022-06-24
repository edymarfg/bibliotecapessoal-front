import { Livro } from './livro';
export interface LivroObtido extends Livro {
  pagLidas: number;
  leitura: string;
  porcentagemLido: string;
}
