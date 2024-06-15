import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importando RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule] // Adicionando RouterModule aos imports
})
export class AppComponent {
  title = 'livros-angular';
}
