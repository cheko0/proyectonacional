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
      projectName: 'Proyectito2',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      businessPlan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      photos: [
        {
          img: 'https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/card-saopaolo.png'
        },
        {
          img: 'https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/card-saopaolo.png'
        }
      ],
      team: [
        {
          name: 'Damian Zamora',
          correo: 'emer@mail.com',
          telephone: '2711223456'
        },
        {
          name: 'Miguel Eduardo',
          correo: 'mike@mail.com',
          telephone: '2711223456'
        },
        {
          name: 'Sergio Rosas',
          correo: 'cheko@mail.com',
          telephone: '2711223456'
        },
        {
          name: 'Jose Ignacion',
          correo: 'colohua@mail.com',
          telephone: '2711223456'
        }
      ],
      status: 'pending',
      price: '1200',
      keystones: [
        {
          idKeystone: '1001',
          keystoneName: 'Keystone 1',
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
      ]
    }
  ];

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async buyFragment(idKeystone: string, fragment: any, idUser: string) {
    console.log('Comprar fragmento ', fragment);
    let buyFragmentModal = await this.modalCtrl.create(
      {
        component: BuyModalComponent,
        componentProps: {
          fragment: fragment,
          idKeystone: idKeystone,
          idUser: idUser
        }
      });
    return buyFragmentModal.present();
  }

  async viewMore(participant: any) {
    let personModal = await this.modalCtrl.create(
      {
        component: BuyModalComponent,
        componentProps: {
          person: participant
        }
      }
    );
    return personModal.present();
  }

}
