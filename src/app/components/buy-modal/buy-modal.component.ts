import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss'],
})
export class BuyModalComponent implements OnInit {

  fragment: any;

  idKeystone: string;

  constructor(params: NavParams, private modalCtrl: ModalController) {
    this.fragment = params.get('fragmentName');
    this.idKeystone = params.get('idKeystone');
    console.log(params.get('idKeystone'))
   }

  ngOnInit() {}

  onClose(){
    this.modalCtrl.dismiss();
  }

  buyNow(){
    console.log("Comprado...")
    this.onClose();
  }
   
}
