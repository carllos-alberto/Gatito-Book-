import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variáveis utilizadas no [(ngModel)]
  usuario ='';
  senha = '';


  constructor(private authService: AutenticacaoService) { } /*  Nesse caso o angular está injetando o serviço do arquivo AutenticacaoService */

  ngOnInit(): void {
  }

  //método
  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      /* se usuário estiver correto */
    ()=>{
      console.log('Autenticado com sucesso');
    },

    //comando caso o usuário ou senha estejam errados
      (error)=>{
        alert("Usuário ou senha inválidos");
        console.log(error);
    }
    );
  }
}
  /* Aqui estou consumindo o serviço autenticar, passando para as variáveis usuarieo e senha.
  O método subscribe, no momento em que a requisição for executada ele retornará no subscribe.
  O subscribe recebe dois parametros uma função que é chamada no momento do sucesso. e o outro paramentro
  é no caso de error
  */





