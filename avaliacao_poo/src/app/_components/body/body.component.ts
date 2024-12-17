import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { FormularioJogosComponent } from "../formulario-jogos/formulario-jogos.component";
import { ListaJogosComponent } from "../lista-jogos/lista-jogos.component";

@Component({
  selector: 'app-body',
  imports: [HeaderComponent, FormularioJogosComponent, ListaJogosComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
