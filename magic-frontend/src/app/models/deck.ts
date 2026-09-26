export interface DeckCriarDto {
  nome: string;
  modoJogo: string;
  cores: string;
  valido: boolean;
  qntCartas: number;
}

export interface Deck extends DeckCriarDto {
  id: number;
}
