import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import {DomSanitizer} from '@angular/platform-browser';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  base64Image:any="../../../assets/profile.svg";
  ine:string;
  reader:Blob;
  email:string;
  name:string;
  app:string;
  apm:string;
  date:string;
  curp:string;
  password:string;

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  clear() {
    this.base64Image=null;
    this.ine=null;
  }

  pickImage(sourceType, value) {
    const options: CameraOptions = {
      quality: 20,
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

 async sendnudes(){
  
// e.g. for multiple files
// const filePath = [this.ine, this.base64Image];
// const name = ['ine', 'profile'];

// cordova.plugin.http.uploadFile("http/", {
//     id: '12',
//     message: 'test'
// }, { Authorization: 'OAuth2: token' }, filePath, name, function(response) {
//     console.log(response.status);
// }, function(response) {
//     console.error(response.error);
// });

//   console.log(JSON.stringify(this.ine));
//   console.log(JSON.stringify(this.base64Image));


    let obj:any={
      name: this.name,
      firstSurname:this.app,
      lastSurname:this.apm,
      birthday:this.date,
      curp: this.curp,
      // selfie:this.base64Image,
      // ine:this.ine,
      email: this.email,
      password:this.password
    }
      console.log(obj);
    
      await this.userService.RegisterUser(obj).subscribe((data)=>{
        console.log(data);
      })
  }

}
