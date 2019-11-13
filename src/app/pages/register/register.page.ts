import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  base64Image:any="../../../assets/profile.svg";
  ine:any;
  reader:any;

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File
  ) { }

  ngOnInit() {
  }

  clear() {
    this.base64Image=null;
    this.ine=null;
  }

  pickImage(sourceType, value) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      (value ==1)?
      this.base64Image = 'data:image/jpeg;base64,' + imageData :
      this.ine = 'data:image/jpeg;base64,' + imageData;

      
      
    }, (err) => {
      // Handle error
    });
  }

  async selectImage(value) {
    const actionSheet = await this.actionSheetController.create({
      header: "Seleccionar archivo",
      buttons: [{
        text: 'Gáleria',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, value);
        }
      },
      {
        text: 'Cámara',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA, value);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

 

}
