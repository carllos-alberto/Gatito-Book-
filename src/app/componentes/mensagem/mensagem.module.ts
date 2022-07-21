import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';



@NgModule({
  declarations: [
    MensagemComponent
  ],
  imports: [
    CommonModule
  ],
  
  //Exportando o Input de mensagens
  exports:[MensagemComponent],


})
export class MensagemModule { }
