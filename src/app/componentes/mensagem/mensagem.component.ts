import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input()
  mensagem = '';


  constructor() { }

  ngOnInit(): void {
  }

}


/*
@input -> O input vai criar um atributo chamado mensagem, que ira passar a "Mensagem de erro" para o componente.
para que de fato eu consiga usar o Input eu tenho que expor ele no mesangem.module.ts utilizando o atributo exports.
Depois tenho que importa o MensagemModule no home modules
*/
