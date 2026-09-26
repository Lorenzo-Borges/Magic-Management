import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColecaoService } from '../../services/colecao';
import { Colecao, ColecaoCriarDto } from '../../models/colecao';

@Component({
  selector: 'app-colecao-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './colecao-cadastro.html'
})
export class ColecaoCadastro implements OnInit {
  novaColecao: ColecaoCriarDto = this.gerarColecaoVazia();
  listaColecoes: Colecao[] = [];
  editandoId: number | null = null;

  constructor(
    private colecaoService: ColecaoService,
    private cdr: ChangeDetectorRef // Injetado para forçar a atualização da tela
  ) {}

  ngOnInit(): void {
    this.carregarColecoes();
  }

  carregarColecoes() {
    this.colecaoService.listar().subscribe({
      next: (dados) => {
        this.listaColecoes = dados;
        this.cdr.detectChanges(); // Força o Angular a exibir a lista instantaneamente
      },
      error: (erro) => console.error('Erro ao carregar coleções:', erro)
    });
  }

  salvar() {
    if (this.editandoId) {
      this.colecaoService.atualizar(this.editandoId, this.novaColecao).subscribe({
        next: () => {
          alert('Coleção atualizada com sucesso!');
          this.cancelarEdicao();
          this.carregarColecoes();
        },
        error: (erro) => console.error(erro)
      });
    } else {
      this.colecaoService.criar(this.novaColecao).subscribe({
        next: () => {
          alert('Coleção salva com sucesso!');
          this.cancelarEdicao();
          this.carregarColecoes();
        },
        error: (erro) => console.error(erro)
      });
    }
  }

  editar(colecao: Colecao) {
    console.log('Botão Editar clicado! Coleção:', colecao); // Para verificarmos no F12

    this.editandoId = colecao.id;
    this.novaColecao = {
      nome: colecao.nome,
      ano: colecao.ano,
      descricao: colecao.descricao,
      qntCartas: colecao.qntCartas
    };

    // Rola a página suavemente para o topo para o utilizador ver o formulário preenchido
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  apagar(id: number) {
    console.log('Botão Excluir clicado! Tentando apagar ID:', id);

    if (confirm('Tem certeza que deseja excluir esta coleção?')) {
      this.colecaoService.apagar(id).subscribe({
        next: () => {
          alert('Coleção excluída com sucesso!');
          this.carregarColecoes();
        },
        error: (erro) => {
          console.error('Erro detalhado ao excluir:', erro);
          alert('Erro ao excluir. Pressione F12 e veja a consola para mais detalhes.');
        }
      });
    }
  }

  cancelarEdicao() {
    this.novaColecao = this.gerarColecaoVazia();
    this.editandoId = null;
  }

  private gerarColecaoVazia(): ColecaoCriarDto {
    return { nome: '', ano: new Date().getFullYear(), descricao: '', qntCartas: 0 };
  }
}
