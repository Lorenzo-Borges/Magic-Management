import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TutorialService } from '../../services/tutorial';
import { Tutorial, TutorialCriarDto } from '../../models/tutorial';

@Component({
  selector: 'app-tutorial-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tutorial-cadastro.html'
})
export class TutorialCadastro implements OnInit {
  novoTutorial: TutorialCriarDto = this.gerarTutorialVazio();
  listaTutoriais: Tutorial[] = [];
  editandoId: number | null = null;

  constructor(
    private tutorialService: TutorialService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarTutoriais();
  }

  carregarTutoriais() {
    this.tutorialService.listar().subscribe({
      next: (dados) => {
        this.listaTutoriais = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao carregar tutoriais:', erro)
    });
  }

  salvar() {
    if (this.editandoId) {
      this.tutorialService.atualizar(this.editandoId, this.novoTutorial).subscribe({
        next: () => {
          alert('Tutorial atualizado com sucesso!');
          this.cancelarEdicao();
          this.carregarTutoriais();
        },
        error: (erro) => console.error(erro)
      });
    } else {
      this.tutorialService.criar(this.novoTutorial).subscribe({
        next: () => {
          alert('Tutorial salvo com sucesso!');
          this.cancelarEdicao();
          this.carregarTutoriais();
        },
        error: (erro) => console.error(erro)
      });
    }
  }

  editar(tutorial: Tutorial) {
    this.editandoId = tutorial.id;
    this.novoTutorial = {
      modoJogo: tutorial.modoJogo,
      descricao: tutorial.descricao
    };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  apagar(id: number) {
    if (confirm('Tem certeza que deseja excluir este tutorial?')) {
      this.tutorialService.apagar(id).subscribe({
        next: () => {
          alert('Tutorial excluído com sucesso!');
          this.carregarTutoriais();
        },
        error: (erro) => console.error(erro)
      });
    }
  }

  cancelarEdicao() {
    this.novoTutorial = this.gerarTutorialVazio();
    this.editandoId = null;
  }

  private gerarTutorialVazio(): TutorialCriarDto {
    return { modoJogo: '', descricao: '' };
  }
}
