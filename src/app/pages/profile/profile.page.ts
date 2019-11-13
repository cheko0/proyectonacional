import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data: any;
  idUser: any;
  origin: any;
  constructor(private userService: UserService) {
    this.idUser = localStorage.getItem('uid');

  }


  async ngOnInit() {
    await this.userService.getDataUser(this.idUser).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    })
  }


  saveparams() {
    console.log('prueba');
    this.userService.updateProfile(this.idUser, this.data).subscribe((res) => {
      console.log(res);
    })
  }

  resetParams() {
    console.log('prueba');
    this.userService.getDataUser(this.idUser).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    })
  }

  click(){
    console.log(".....");
  }

}
