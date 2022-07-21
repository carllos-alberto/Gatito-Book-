import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',               /* Acessa a página inicial, caso o usuário não defina nehuma rota.*/
    pathMatch:'full',        /* Esse atributo retira todos os espaço */
    redirectTo: 'home',       /* Redireciona para o Homer */
  },
  // Criando as rotas dos caminhos
  {
    path: 'home',
    loadChildren:() => import('./home/home.module').then((m)=> m.HomeModule),   /* comando da rota que será executada ao clicar no home */
  },

  {
    path: 'animais',
    loadChildren:() => import('./animais/animais.module').then((m)=> m.AnimaisModule),
  }




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
