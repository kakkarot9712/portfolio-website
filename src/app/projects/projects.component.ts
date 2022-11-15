import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, ProjectData } from '../shared/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectData: ProjectData[]
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.projectData = this.dataservice.getProjects()
  }
}
