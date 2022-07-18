import { LojaModel } from './loja-model';
export interface LivroDesejoModel {
  id: string;
  titulo: string;
  autor: string;
  paginas: number;
  ano: number;
  lojas: LojaModel[];
}
