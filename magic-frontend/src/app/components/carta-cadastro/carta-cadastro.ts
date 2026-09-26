import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartaService } from '../../services/carta';
import { Carta, CartaCriarDto } from '../../models/carta';

@Component({
  selector: 'app-carta-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carta-cadastro.html'
})
export class CartaCadastro implements OnInit {
  novaCarta: CartaCriarDto = this.gerarCartaVazia();
  listaCartas: Carta[] = [];
  editandoId: number | null = null;

  constructor(
    private cartaService: CartaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarCartas();
  }

  carregarCartas() {
    this.cartaService.listar().subscribe({
      next: (dados) => {
        this.listaCartas = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar cartas:', erro)
    });
  }


  salvar() {
    if (this.editandoId) {
      this.cartaService.atualizar(this.editandoId, this.novaCarta).subscribe({
        next: () => {
          alert('Carta atualizada com sucesso!');
          this.cancelarEdicao();
          this.carregarCartas();
        },
        error: (erro) => console.error(erro)
      });
    } else {
      this.cartaService.criar(this.novaCarta).subscribe({
        next: () => {
          alert('Carta salva com sucesso!');
          this.cancelarEdicao();
          this.carregarCartas();
        },
        error: (erro) => console.error(erro)
      });
    }
  }

  editar(carta: Carta) {
    this.editandoId = carta.id;
    this.novaCarta = {
      nome: carta.nome,
      tipo: carta.tipo,
      cor: carta.cor,
      colecao: carta.colecao,
      raridade: carta.raridade,
      ataque: carta.ataque,
      resistencia: carta.resistencia,
      lendaria: carta.lendaria
    };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  apagar(id: number) {
    if (confirm('Tem certeza que deseja excluir esta carta?')) {
      this.cartaService.apagar(id).subscribe({
        next: () => {
          alert('Carta excluída com sucesso!');
          this.carregarCartas();
        },
        error: (erro) => console.error(erro)
      });
    }
  }

  cancelarEdicao() {
    this.novaCarta = this.gerarCartaVazia();
    this.editandoId = null;
  }

  private gerarCartaVazia(): CartaCriarDto {
    // Definimos 'Branco' como padrão para a cor, como no seu projeto original
    return { nome: '', tipo: '', cor: 'Branco', colecao: '', raridade: '' , ataque: 0, resistencia: 0, lendaria: false };
  }
}
