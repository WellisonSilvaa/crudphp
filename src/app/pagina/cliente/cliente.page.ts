import { ModalclientePage } from './../modalcliente/modalcliente.page';
import { Cliente, ClienteService } from './../../servico/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  clientes: Cliente[] | undefined;
  constructor(
    private service: ClienteService,
    private modalCtrl: ModalController
    ) {}

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.clientes = response;

    })
  }

  remover(id: any){
    this.service.remove(id).subscribe(() =>{
    this.service.getAll().subscribe(response => {
      this.clientes = response;

    })
    })
  }

  novoCliente(){
    this.modalCtrl.create({
      component: ModalclientePage
    }).then(modal =>{
       modal.present()
       return modal.onDidDismiss();
    }).then(({data}) => {
      this.ngOnInit();
    })
  }

}
