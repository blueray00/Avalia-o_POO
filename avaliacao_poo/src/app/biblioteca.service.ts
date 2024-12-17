import { Injectable } from '@angular/core';
import { Jogo } from './models/jogo.model';

@Injectable({
  providedIn: 'root',
})
export class BibliotecaService {
  private biblioteca: Jogo[] = [];

  adicionarJogo(jogo: Jogo): void {
    this.biblioteca.push(jogo);
  }

  removerJogo(titulo: string): void {
    this.biblioteca = this.biblioteca.filter(jogo => jogo.titulo !== titulo);
  }

  listarJogos(): Jogo[] {
    return this.biblioteca;
  }
}

