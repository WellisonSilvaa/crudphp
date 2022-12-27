import { ClienteService } from './../../servico/cliente.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.page.html',
  styleUrls: ['./modalcliente.page.scss'],
})
export class ModalclientePage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private service: ClienteService
    ) {

   }

  ngOnInit() {
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    // console.log(form.value);
    const cliente = form.value;
    this.service.create(cliente).subscribe(response =>{
      this.modalCtrl.dismiss(response);
    })
  }

}
