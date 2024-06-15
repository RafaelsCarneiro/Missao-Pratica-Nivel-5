import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importando FormsModule
import { AppRoutingModule } from './app-routing.module'; // Importando AppRoutingModule
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    LivroDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Adicionando FormsModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
