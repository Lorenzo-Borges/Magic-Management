import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeckService } from '../../services/deck';
import { Deck, DeckCriarDto } from '../../models/deck';

@Component({
  selector: 'app-deck-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deck-cadastro.html'
})
export class DeckCadastro implements OnInit {
  novoDeck: DeckCriarDto = this.gerarDeckVazio();
  listaDecks: Deck[] = [];
  editandoId: number | null = null;

  constructor(
    private deckService: DeckService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarDecks();
  }

  carregarDecks() {
    this.deckService.listar().subscribe({
      next: (dados) => {
        this.listaDecks = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar decks:', erro)
    });
  }

  salvar() {
    if (this.editandoId) {
      this.deckService.atualizar(this.editandoId, this.novoDeck).subscribe({
        next: () => {
          alert('Deck atualizado com sucesso!');
          this.cancelarEdicao();
          this.carregarDecks();
        },
        error: (erro) => console.error(erro)
      });
    } else {
      this.deckService.criar(this.novoDeck).subscribe({
        next: () => {
          alert('Deck salvo com sucesso!');
          this.cancelarEdicao();
          this.carregarDecks();
        },
        error: (erro) => console.error(erro)
      });
    }
  }

  editar(deck: Deck) {
    this.editandoId = deck.id;
    this.novoDeck = {
      nome: deck.nome,
      modoJogo: deck.modoJogo,
      cores: deck.cores,
      valido: deck.valido,
      qntCartas: deck.qntCartas
    };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  apagar(id: number) {
    if (confirm('Tem certeza que deseja excluir este deck?')) {
      this.deckService.apagar(id).subscribe({
        next: () => {
          alert('Deck excluído com sucesso!');
          this.carregarDecks();
        },
        error: (erro) => console.error(erro)
      });
    }
  }

  cancelarEdicao() {
    this.novoDeck = this.gerarDeckVazio();
    this.editandoId = null;
  }

  private gerarDeckVazio(): DeckCriarDto {
    return { nome: '', modoJogo: '', cores: '', valido: true, qntCartas: 60 };
  }
}
