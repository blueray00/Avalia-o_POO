import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BibliotecaService } from '../../biblioteca.service';
import { JogoTabuleiro, JogoCarta } from '../../models/jogo.model';

@Component({
  selector: 'app-formulario-jogos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-jogos.component.html',
})
export class FormularioJogosComponent {
  titulo = '';
  anoPublicacao = 0;
  fabricante = '';
  tipo = 'tabuleiro';
  atributoEspecifico = 0;

  constructor(private bibliotecaService: BibliotecaService) {}

  adicionarJogo(): void {
    if (this.tipo === 'tabuleiro') {
      const jogo = new JogoTabuleiro(
        this.titulo,
        this.anoPublicacao,
        this.fabricante,
        this.atributoEspecifico
      );
      this.bibliotecaService.adicionarJogo(jogo);
    } else {
      const jogo = new JogoCarta(
        this.titulo,
        this.anoPublicacao,
        this.fabricante,
        this.atributoEspecifico
      );
      this.bibliotecaService.adicionarJogo(jogo);
    }

    // Resetar o formulário
    this.titulo = '';
    this.anoPublicacao = 0;
    this.fabricante = '';
    this.atributoEspecifico = 0;
  }
}

