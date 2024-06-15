// src/app/livro-lista/livro-lista.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  standalone: true, // Marcar como standalone
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {
  editoras: Editora[] = [];
  livros: Livro[] = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir(codigo: number): void {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
