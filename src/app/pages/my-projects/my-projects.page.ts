import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.page.html',
  styleUrls: ['./my-projects.page.scss'],
})
export class MyProjectsPage implements OnInit {

  my_projects: any[] = ['oli'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createProject(){
    this.router.navigateByUrl('/create-project');
  }

  navigateToKeystones(){
    this.router.navigateByUrl('/keystones');
  }

}
