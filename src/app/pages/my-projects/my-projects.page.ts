import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService  } from '../../services/user.service';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.page.html',
  styleUrls: ['./my-projects.page.scss'],
})
export class MyProjectsPage implements OnInit {

  my_projects: any[] = ['oli'];
  userId:any;
  constructor(private router: Router, private userService: UserService) { }
  verify:any;
  code:any=null;
  ngOnInit() {
    this.userId = localStorage.getItem('uid');
  this.userService.verifyStatus(this.userId).subscribe((res)=>{
    this.verify=res;
    console.log(this.verify)
  });
  }

  createProject(){
    this.router.navigateByUrl('/create-project');
  }

  navigateToKeystones(){
    this.router.navigateByUrl('/keystones');
  }

  verifyCode(){
    let obj={
      code:this.code,
      id: this.userId
    }
    this.userService.verifyCode(obj).subscribe((res)=>{
      this.verify= res;
    })
  }

}
