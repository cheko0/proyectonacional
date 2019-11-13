import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data={
    name: "Juan",
    firstSurname:"Romero",
    secondSurname:"Rojas",
    date: "10-12-2019",
    curp: "sfdjfdheur",
    email: "juanchito@gmail.com",

  }

}
