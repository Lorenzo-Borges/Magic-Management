import { Routes } from '@angular/router';
import { CartaCadastro } from './components/carta-cadastro/carta-cadastro';
import { ColecaoCadastro } from './components/colecao-cadastro/colecao-cadastro';
import { DeckCadastro } from './components/deck-cadastro/deck-cadastro';
import { TutorialCadastro } from './components/tutorial-cadastro/tutorial-cadastro';

export const routes: Routes = [
  { path: 'cartas', component: CartaCadastro },
  { path: 'colecoes', component: ColecaoCadastro },
  { path: 'decks', component: DeckCadastro },
  { path: 'tutoriais', component: TutorialCadastro },

  // Rota padrão (redireciona para cartas se a URL estiver vazia)
  { path: '', redirectTo: '/cartas', pathMatch: 'full' }
];
