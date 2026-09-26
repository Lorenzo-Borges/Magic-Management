export interface TutorialCriarDto {
  modoJogo: string;
  descricao: string;
}

export interface Tutorial extends TutorialCriarDto {
  id: number;
}
