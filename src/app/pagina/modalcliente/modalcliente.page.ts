import { Cliente, ClienteService } from './../../servico/cliente.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.page.html',
  styleUrls: ['./modalcliente.page.scss'],
})
export class ModalclientePage implements OnInit {
  @Input() c: Cliente | undefined;
  atualizar = false;
  dados ={
    nome: '',
    cidade: '',
    email: ''
  }

  constructor(
    private modalCtrl: ModalController,
    private service: ClienteService
    ) {

   }

  ngOnInit() {
    if(this.c){
      // console.log("atualizar");
      this.atualizar = true;
      this.dados = this.c;

    }
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    // console.log(form.value);
    const cliente = form.value;
    if(this.atualizar){
      this.service.update(cliente).subscribe(response =>{
        this.modalCtrl.dismiss(response);
      })
    }else{
      this.service.create(cliente).subscribe(response =>{
        this.modalCtrl.dismiss(response);
      })
    }
  }

}
