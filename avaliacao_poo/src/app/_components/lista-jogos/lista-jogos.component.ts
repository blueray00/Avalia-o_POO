import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaService } from '../../biblioteca.service';
import { Jogo } from '../../models/jogo.model';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-jogos.component.html',
})
export class ListaJogosComponent {
  jogos: Jogo[] = [];

  constructor(private bibliotecaService: BibliotecaService) {
    this.carregarJogos();
  }

  carregarJogos(): void {
    this.jogos = this.bibliotecaService.listarJogos();
  }

  removerJogo(titulo: string): void {
    this.bibliotecaService.removerJogo(titulo);
    this.carregarJogos();
  }
}

