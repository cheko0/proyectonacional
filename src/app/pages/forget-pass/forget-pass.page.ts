import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.page.html',
  styleUrls: ['./forget-pass.page.scss'],
})
export class ForgetPassPage implements OnInit {

  emailFormControlLogin = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  errorText:boolean;
  constructor() { }

  ngOnInit() {
  }

  clear(){
    this.emailFormControlLogin=null;
    this.errorText=false;
  }
  
  send(){
    if(this.emailFormControlLogin != null){
      this.errorText=false;
      console.log(this.emailFormControlLogin);
    }else{
      this.errorText=true;
    }
  }

}
