import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IAccess } from 'src/app/models/IAccess';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  email:string;
  password:string;

  constructor(private userService: UserService,private router: Router) {
  }

  login(){
    console.log(this.email,this.password);
    this.userService.login({email:this.email,password:this.password}).subscribe((access:IAccess)=>{
      console.log("ACCESO: ",access);
      if(access.id){
        localStorage.setItem('uid',access.id)
        this.router.navigateByUrl(`/home`);
      }else{
        console.log("no se pudo hacer login");
      }
    });
  }

}
