import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {



  constructor() { 
    let id=localStorage.getItem('uid')
    console.log(id)
  }

  ngOnInit() {

  }

}
