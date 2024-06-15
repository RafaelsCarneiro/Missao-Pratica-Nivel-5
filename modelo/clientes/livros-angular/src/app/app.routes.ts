// app.routes.ts
import { Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';

export const routes: Routes = [
  { path: '', component: LivroListaComponent },
  // Outras rotas podem ser adicionadas aqui, se necessário
];
