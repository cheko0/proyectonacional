import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  categories: any[] = [];

  projects: any[] = [];

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getCateogries().subscribe(data => {
      console.log('categoias: ', data);
      this.categories = data;
    })
  }

  navigateToProject(){
    this.router.navigateByUrl('/project-detail');
  }

  selectCategory(category: any){
    console.log("selected: ",category)
    this.projectService.getProjects(category).subscribe(data => {
      console.log("project",data);
      this.projects = data;
    })
  }

}
