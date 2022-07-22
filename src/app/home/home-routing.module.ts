import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent,             /* Gerando o caminho individual da rota */

  children: [                         /* children -> Aqui eu crio um array de rotas */
      {
        path: '',
        component: LoginComponent,     /* Aqui eu estou criando uma subRota dentro da rota Home, para chamar a pagina Login */
      },
      {
        path: 'novousuario',
        component: NovoUsuarioComponent,
      },
    ],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
