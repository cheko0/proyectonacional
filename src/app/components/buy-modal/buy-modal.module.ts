import { NgModule } from '@angular/core'; 
import { BuyModalComponent } from './buy-modal.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        BuyModalComponent
    ],
    entryComponents:[
        BuyModalComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports:[
        BuyModalComponent
    ]
})

export class BuyModalModule {

}