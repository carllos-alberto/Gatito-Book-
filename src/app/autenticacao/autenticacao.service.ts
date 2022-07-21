import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private htppClient: HttpClient) { }

  autenticar(usuario:string, senha:string): Observable<any>{
    return this.htppClient.post('http://localhost:3000/user/login',{
      userName: usuario,
      password: senha,
    } )

  }

}


/*
Criei um variável do com o nome htppClient  que é do tipo HttpClient
bservable -> quando a requisição terminar ele vai retornar o objeto que eu definir que nesse caso é
*/
