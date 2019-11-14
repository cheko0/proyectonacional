import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss'],
})
export class BuyModalComponent implements OnInit {

  fragment: any;

  idKeystone: string;

  idUser: string;

  person: any;

  constructor(params: NavParams, private projectService: ProjectService, private modalCtrl: ModalController) {
    this.fragment = params.get('fragmentName');
    this.person = params.get('person');
    this.idKeystone = params.get('idKeystone');
    this.idUser = params.get('idUser');
    console.log(params.get('person'));
   }

  ngOnInit() {}

  onClose(){
    this.modalCtrl.dismiss();
  }

  buyNow(){
    console.log("Comprado...");
    this.projectService.buyFragment(this.idKeystone, this.fragment.id, this.idUser).subscribe(res => {
      console.log("Compra exitosa");
    })
    this.onClose();
  }
   
}
