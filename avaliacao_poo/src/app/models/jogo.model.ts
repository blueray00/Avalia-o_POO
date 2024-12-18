export abstract class Jogo {
  constructor(
    public titulo: string,
    public anoPublicacao: number,
    public fabricante: string
  ) {}

  abstract exibirRegras(): string;
}

export class JogoTabuleiro extends Jogo {
  constructor(
    titulo: string,
    anoPublicacao: number,
    fabricante: string,
    public numeroJogadores: number
  ) {
    super(titulo, anoPublicacao, fabricante);
  }

  exibirRegras(): string {
    return `O jogo de tabuleiro "${this.titulo}" é para até no máximo ${this.numeroJogadores} jogadores.`;
  }
}

export class JogoCarta extends Jogo {
  constructor(
    titulo: string,
    anoPublicacao: number,
    fabricante: string,
    public idadeMinima: number
  ) {
    super(titulo, anoPublicacao, fabricante);
  }

  exibirRegras(): string {
    return `O jogo de cartas "${this.titulo}" é recomendado para maiores de ${this.idadeMinima} anos.`;
  }
}

export class Biblioteca {
  private jogos: Jogo[] = [];

  adicionarJogo(jogo: Jogo): void {
    this.jogos.push(jogo);
  }

  removerJogo(titulo: string): void {
    this.jogos = this.jogos.filter(jogo => jogo.titulo !== titulo);
  }

  listarJogos(): Jogo[] {
    return this.jogos;
  }
}
