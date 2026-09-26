export interface CartaCriarDto {
  nome: string;
  tipo: string;
  cor: string;
  colecao: string;
  raridade: string;
  ataque: number;
  resistencia: number;
  lendaria: boolean;
}

export interface Carta extends CartaCriarDto {
  id: number;
}
