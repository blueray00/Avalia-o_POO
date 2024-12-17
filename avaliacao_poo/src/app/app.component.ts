import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from "./_components/body/body.component";
import { FooterComponent } from './_components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'avaliacao_poo';
}
