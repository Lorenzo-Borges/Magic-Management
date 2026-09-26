export interface ColecaoCriarDto {
  nome: string;
  ano: number;
  descricao: string;
  qntCartas: number;
}

export interface Colecao extends ColecaoCriarDto {
  id: number;
}
