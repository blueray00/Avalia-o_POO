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
    const index = this.biblioteca.findIndex(jogo => jogo.titulo === titulo);
    if (index !== -1) {
      this.biblioteca.splice(index, 1);
    }
  }

  listarJogos(): Jogo[] {
    return this.biblioteca;
  }
}
