import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IAccess } from 'src/app/models/IAccess';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  email:string;
  password:string;

  constructor(private userService: UserService,private router: Router, private fcm:FCM) {
  }

  login(){
    console.log(this.email,this.password);
    this.userService.login({email:this.email,password:this.password}).subscribe((access:IAccess)=>{
      console.log("ACCESO: ",access);
      this.fcm.getToken().then((token)=>{
        console.log("Tokensito: ",token );
      })
      if(access.id){
        this.router.navigateByUrl("/home");
      }else{
        console.log("no se pudo hacer login");
      }
    });
  }

}
