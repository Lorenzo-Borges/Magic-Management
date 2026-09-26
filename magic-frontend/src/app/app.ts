import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // O RouterModule é essencial para ativar a navegação
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Projeto Magic';
}
