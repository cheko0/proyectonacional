import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BuyModalComponent } from 'src/app/components/buy-modal/buy-modal.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage implements OnInit {

  keystones: any[] = [
    {
      id: '100',
      title: 'keystone1',
      status: 'pending',
      price: '1200',
      fragments: [
        {
          id: '001',
          name: 'fragmento 1',
          price: '400.00',
          status: 'PENDING'
        },
        {
          id: '002',
          name: 'fragmento 2',
          price: '400.00',
          status: 'PENDING'
        },
        {
          id: '003',
          name: 'fragmento 3',
          price: '400.00',
          status: 'PENDING'
        }
      ]      
    }
  ];

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async buyFragment(idKeystone: string, fragment: any){
    console.log('Comprar fragmento ', fragment);
    let buyFragmentModal = await this.modalCtrl.create(
      {
        component: BuyModalComponent, 
        componentProps: {
          fragment: fragment,
          idKeystone: idKeystone
        }
      });
    return buyFragmentModal.present();
  }

}
